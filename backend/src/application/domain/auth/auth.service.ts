import { CustomErrorResponse, validateSchema } from "../../@shared/error";
import { UserModel } from "../../entities/user.entity";
import { signInDtoSchema, signUpDtoSchema } from "./dtos/dtos";
import { z } from "zod";
import bcrypt from "bcrypt";
import JSONWebToken from "jsonwebtoken";
import { PayloadType } from "../../@shared/types";
import { ENV } from "../../@shared/env";
import { AccountModel } from "../../entities/account-confirmation.entity";
import mongoose from "mongoose";
import { transport } from "../../infra/Mail/node-mailer.conf";
import {
  generateFixedLengthRandomNumber,
  generateFutureDateInMinutes,
} from "../../@shared/utils";
import { WalletModel } from "../../entities/wallet.entity";

export class AuthService {
  async signUp(signUpDto: z.infer<typeof signUpDtoSchema>) {
    // Inicia uma sessão para a transação
    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      validateSchema(signUpDto, signUpDtoSchema);
      console.log(signUpDto);

      const userExistByEmail = await UserModel.findOne({
        email: signUpDto.email,
      }).exec();

      if (userExistByEmail) {
        throw new CustomErrorResponse({
          message: "email in used",
          statusCode: 401,
        });
      }

      const userExistByCpfCnpj = await UserModel.findOne({
        cpfCnpj: signUpDto.cpfCnpj,
      });

      if (userExistByCpfCnpj) {
        throw new CustomErrorResponse({
          message: "cpf or cnpj in used",
          statusCode: 406,
        });
      }

      const [userCreated] = await UserModel.create(
        [
          {
            name: signUpDto.name,
            email: signUpDto.email,
            activatedAt: null,
            cpfCnpj: signUpDto.cpfCnpj,
            deletedAt: null,
            password: null,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {
          session,
        }
      );

      await session.commitTransaction();

      return {
        name: userCreated.name,
        email: userCreated.email,
        deletedAt: userCreated.deletedAt,
        createdAt: userCreated.createdAt,
        updatedAt: userCreated.updatedAt,
      };
    } catch (e) {
      session.abortTransaction();
      throw e;
    } finally {
      session.endSession();
    }
  }

  async signIn(signInDto: z.infer<typeof signInDtoSchema>) {
    validateSchema(signInDto, signInDtoSchema);

    const userExist = await UserModel.findOne({
      email: signInDto.email,
    }).exec();

    if (!userExist) {
      throw new CustomErrorResponse({
        message: "user not found",
        statusCode: 404,
      });
    }

    if (userExist.deletedAt) {
      throw new CustomErrorResponse({
        message: "user deleted or banned",
        statusCode: 406,
      });
    }

    if (!userExist.activatedAt) {
      throw new CustomErrorResponse({
        message: "require activate account",
        statusCode: 406,
      });
    }

    if (!userExist.password) {
      throw new CustomErrorResponse({
        message: "It is necessary to register a password",
        statusCode: 406,
      });
    }

    const passwordMatches = await bcrypt.compare(
      signInDto.password,
      userExist.password
    );

    if (!passwordMatches) {
      throw new CustomErrorResponse({
        message: "invalid password",
        statusCode: 401,
      });
    }

    const payload: PayloadType = {
      sub: userExist._id.toString(),
      role: userExist.role,
    };

    const token = JSONWebToken.sign(payload, ENV.JWT_SECRET, {
      expiresIn: "24h",
    });

    return {
      user: {
        name: userExist.name,
        email: userExist.email,
        createdAt: userExist.createdAt,
        updatedAt: userExist.updatedAt,
        deletedAt: userExist.deletedAt,
        activatedAt: userExist.activatedAt,
        role: userExist.role,
      },
      accessToken: {
        token,
        expiresIn: "24h",
      },
    };
  }

  async generateConfirmationToken(email: string) {
    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      const user = await UserModel.findOne({ email }).session(session).exec();

      if (!user) {
        throw new CustomErrorResponse({
          message: "unregistered user",
          statusCode: 401,
        });
      }

      let accountConfirmation = await AccountModel.findOne({
        userId: user._id.toString(),
      }).exec();

      if (!accountConfirmation) {
        const [accountConfirmationCreated] = await AccountModel.create(
          [
            {
              attempts: 0,
              expiresAt: generateFutureDateInMinutes(5),
              token: generateFixedLengthRandomNumber(4),
              userId: user._id.toString(),
            },
          ],
          {
            session,
          }
        );

        accountConfirmation = accountConfirmationCreated;
      }

      transport.sendMail({
        from: "Fake Woovi Project",
        subject: "Email de teste da confirmação da conta",
        to: user.email,
        text: "parabéns por realizar o catastro na woofi",
        html: `
        <p>Parabens por realizar o cadastro na woofi, agora você pode desfrutrar dos nossos serviços.</p>
        <span>seu token é: ${accountConfirmation.token}</span>
        `,
      });

      await session.commitTransaction();

      return {
        message: "token was send to email",
      };
    } catch (e) {
      await session.abortTransaction();
      throw e;
    } finally {
      await session.endSession();
    }
  }

  async validateConfToken(email: string, token: string) {
    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      const user = await UserModel.findOne({ email }).session(session).exec();

      if (!user || user.activatedAt) {
        //se o usúário já foi ativo ele não precisa mais passar por esse procedimento
        throw new CustomErrorResponse({
          message: "user not found",
          statusCode: 404,
        });
      }

      const accountConf = await AccountModel.findOne({
        userId: user.id,
      }).exec();

      if (!accountConf) {
        throw new CustomErrorResponse({
          message: "account confirmation not was created",
          statusCode: 401,
        });
      }

      if (!accountConf?.token) {
        throw new CustomErrorResponse({
          message: "necessary to generate the confirmation token",
          statusCode: 406,
        });
      }

      if (accountConf?.expiresAt.getTime() < new Date().getTime()) {
        /**delete all from user to reset the register */
        await AccountModel.deleteOne({ userId: user._id.toString() }).exec();
        await UserModel.deleteOne({ _id: user._id }).exec();

        throw new CustomErrorResponse({
          message: "confirmation token has expired",
          statusCode: 406,
        });
      }

      const result = token === accountConf.token;

      if (accountConf.attempts >= 10) {
        /**delete all from user to reset the register */
        await AccountModel.deleteOne({ userId: user._id.toString() }).exec();
        await UserModel.deleteOne({ _id: user._id }).exec();

        throw new CustomErrorResponse({
          message: "number of attempts exceeded then remove account",
          statusCode: 400,
        });
      }

      if (!result) {
        await AccountModel.updateOne(
          { userId: user.id },
          {
            attempts: accountConf.attempts + 1,
          }
        );

        return {
          message: "fail",
        };
      }

      await UserModel.updateOne(
        { email },
        {
          activatedAt: new Date(),
        },
        {
          session,
        }
      );

      await WalletModel.create(
        [
          {
            balance: 0,
            userId: user._id.toString(),
            cpfCnpj: user.cpfCnpj,
            deletedAt: null,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {
          session,
        }
      );

      await session.commitTransaction();

      // send mail to confirm the register
      await transport.sendMail({
        from: "Fake Woovi Project",
        to: user.email,
        subject: "Email de teste da confirmação da conta",
        text: "parabéns por realizar o catastro na woofi",
        html: `
        <p>Parabens por realizar o cadastro na woofi, agora você pode desfrutrar dos nossos serviços.</p>
        `,
      });

      return {
        message: "success",
      };
    } catch (e) {
      await session.abortTransaction();
      throw e;
    } finally {
      await session.endSession();
    }
  }

  async createPassword(email: string, password: string) {
    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      const user = await UserModel.findOne({
        email: email,
      }).exec();

      if (!user) {
        throw new CustomErrorResponse({
          message: "user not found",
          statusCode: 404,
        });
      }

      if (user.password) {
        throw new CustomErrorResponse({
          message: "user already have a password",
          statusCode: 406,
        });
      }

      if (!user.activatedAt) {
        throw new CustomErrorResponse({
          message: "require confirm the account to create password",
          statusCode: 406,
        });
      }

      const salt = await bcrypt.genSalt(12);

      const hashedPassword = await bcrypt.hash(password, salt);

      await UserModel.updateOne(
        {
          _id: user.id,
        },
        {
          password: hashedPassword,
        },
        {
          session,
        }
      );

      const payload: PayloadType = {
        sub: user._id.toString(),
        role: user.role,
      };

      const jwtToken = await JSONWebToken.sign(payload, ENV.JWT_SECRET, {
        expiresIn: ENV.JWT_EXPIRES_IN as any,
      });

      await session.commitTransaction();

      return {
        user: {
          name: user.name,
          email: user.email,
          activatedAt: user.activatedAt,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          deletedAt: user.deletedAt,
          role: user.role,
        },

        accessToken: {
          token: jwtToken,
          expiresIn: ENV.JWT_EXPIRES_IN,
        },
      };
    } catch (e) {
      await session.abortTransaction();
      throw e;
    } finally {
      await session.endSession();
    }
  }
}
