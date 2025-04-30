import mongoose from "mongoose";
import { z } from "zod";

import { PayloadType } from "../../@shared/types";
import { UserModel } from "../../entities/user.entity";
import { WalletModel } from "../../entities/wallet.entity";
import { CustomErrorResponse, validateSchema } from "../../@shared/error";
import { createTransactionSchema } from "./dtos";
import { TransactionModel } from "../../entities/transaction.entity";

export class WalletService {
  async getWallet(payload: PayloadType) {
    const session = await mongoose.startSession();

    try {
      session.startTransaction();
      const user = await UserModel.findOne().exec();

      if (!user) {
        throw new CustomErrorResponse({
          message: "unregistered user",
          statusCode: 404,
        });
      }

      if (user.deletedAt) {
        throw new CustomErrorResponse({
          message: "user deleted or banned",
          statusCode: 403,
        });
      }

      if (!user.activatedAt) {
        throw new CustomErrorResponse({
          message: "require activate the account",
          statusCode: 403,
        });
      }

      const wallet = await WalletModel.findOne({
        cpfCnpj: user.cpfCnpj,
      });

      if (!wallet) {
        throw new CustomErrorResponse({
          message: "wallet not created, please contact support",
          statusCode: 403,
        });
      }

      if (wallet.deletedAt) {
        throw new CustomErrorResponse({
          message: "the wallet has been blocked",
          statusCode: 403,
        });
      }

      return {
        wallet,
      };
    } catch (e) {
      await session.abortTransaction();
      throw e;
    } finally {
      await session.endSession();
    }
  }

  async createTransaction(
    payload: PayloadType,
    trzDto: z.infer<typeof createTransactionSchema>
  ) {
    validateSchema(trzDto, createTransactionSchema);

    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      const user = await UserModel.findOne({ _id: payload.sub })
        .session(session)
        .exec();

      if (!user) {
        throw new CustomErrorResponse({
          message: "unregistered user",
          statusCode: 401,
        });
      }

      if (!user.activatedAt) {
        throw new CustomErrorResponse({
          message: "user inactive",
          statusCode: 403,
        });
      }

      if (user.deletedAt) {
        throw new CustomErrorResponse({
          message: "user banned or deleted",
          statusCode: 403,
        });
      }

      const wallet = await WalletModel.findOne({
        userId: user._id.toHexString(),
      })
        .session(session)
        .exec();

      if (!wallet) {
        throw new CustomErrorResponse({
          message: "wallet not found, contact support",
          statusCode: 406,
        });
      }

      if (wallet.deletedAt) {
        throw new CustomErrorResponse({
          message: "account deleted or banned",
          statusCode: 406,
        });
      }

      if (wallet.balance < trzDto.value) {
        throw new CustomErrorResponse({
          message: "insufficient balance",
          statusCode: 406,
        });
      }

      // recipient check

      const recipient = await UserModel.findOne({
        cpfCnpj: trzDto.toCpfCnpj,
      })
        .session(session)
        .exec();

      if (!recipient || recipient.deletedAt || !recipient.activatedAt) {
        throw new CustomErrorResponse({
          message: "transaction could not be performed",
          statusCode: 406,
        });
      }

      const recipientWallet = await WalletModel.findOne({
        cpfCnpj: recipient.cpfCnpj,
      })
        .session(session)
        .exec();

      if (!recipientWallet || recipientWallet.deletedAt) {
        throw new CustomErrorResponse({
          message: "transaction could not be performed",
          statusCode: 406,
        });
      }

      const myWallet = await WalletModel.findOneAndUpdate(
        { _id: wallet._id },
        {
          $inc: { balance: -trzDto.value },
        },
        {
          new: true,
          session,
        }
      ).exec();

      await WalletModel.findOneAndUpdate(
        { _id: recipientWallet.id },
        {
          $inc: { balance: +trzDto.value },
        },
        {
          new: true,
          session,
        }
      ).exec();

      const [transaction] = await TransactionModel.create(
        [
          {
            createdAt: new Date(),
            fromCpfCnpj: wallet.cpfCnpj,
            toCpfCnpj: recipient.cpfCnpj,
            value: trzDto.value,
          },
        ],
        {
          session,
        }
      );

      await session.commitTransaction();

      return {
        transaction,
        wallet: myWallet,
      };
    } catch (e) {
      await session.abortTransaction();
      throw e;
    } finally {
      await session.endSession();
    }
  }
}
