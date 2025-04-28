import { CustomErrorResponse, validateSchema } from "../../@shared/error";
import { UserModel } from "../../entities/user.entity";
import { signInDtoSchema, signUpDtoSchema } from "./dtos/dtos";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PayloadType } from "../../@shared/types";
import { ENV } from "../../@shared/env";
import { AccountModel } from "../../entities/account.entity";
import mongoose from "mongoose";

export class AuthService {
  async signUp(signUpDto: z.infer<typeof signUpDtoSchema>) {
    // Inicia uma sessão para a transação
    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      validateSchema(signUpDto, signUpDtoSchema);

      const userExist = await UserModel.findOne({
        email: signUpDto.email,
      }).exec();

      if (userExist) {
        throw new CustomErrorResponse({
          message: "user already exist",
          statusCode: 401,
        });
      }

      const salt = await bcrypt.genSalt(12);

      const hashedPassword = await bcrypt.hash(signUpDto.password, salt);

      const [userCreated] = await UserModel.create(
        [
          {
            name: signUpDto.name,
            email: signUpDto.email,
            password: hashedPassword,
          },
        ],
        {
          session,
        }
      );

      // create account

      await AccountModel.create(
        [
          {
            email: userCreated.email,
            balance: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            isDeleted: null,
            userId: userCreated._id.toString(),
          },
        ],
        {
          session,
        }
      );

      const response = {
        name: userCreated.name,
        email: userCreated.password,
      };

      const payload: PayloadType = {
        sub: userCreated._id.toString(),
      };

      const token = jwt.sign(payload, ENV.JWT_SECRET, {
        expiresIn: "24h",
      });

      await session.commitTransaction();

      return {
        user: response,
        accessToken: {
          token,
          expiresIn: "24h",
        },
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

    console.log(userExist);

    if (!userExist) {
      throw new CustomErrorResponse({
        message: "user not exist",
        statusCode: 404,
      });
    }

    if (await bcrypt.compare(signInDto.password, userExist.password)) {
      throw new CustomErrorResponse({
        message: "password invalid",
        statusCode: 401,
      });
    }

    const response = {
      name: userExist.name,
      email: userExist.password,
    };

    const payload: PayloadType = {
      sub: userExist._id.toString(),
    };

    const token = jwt.sign(payload, ENV.JWT_SECRET, {
      expiresIn: "24h",
    });

    return {
      user: response,
      accessToken: {
        token,
        expiresIn: "24h",
      },
    };
  }
}
