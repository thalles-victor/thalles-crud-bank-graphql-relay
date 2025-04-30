import mongoose from "mongoose";
import { z } from "zod";

import { PayloadType } from "../../@shared/types";
import { UserModel } from "../../entities/user.entity";
import { WalletModel } from "../../entities/wallet.entity";
import { CustomErrorResponse, validateSchema } from "../../@shared/error";
import { createTransactionSchema } from "./dtos";
import {
  TransactionFilter,
  TransactionModel,
} from "../../entities/transaction.entity";

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

  async searchFromBearerAuth(
    payload: PayloadType,
    filters: TransactionFilter = {}
  ) {
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

      if (user.deletedAt) {
        throw new CustomErrorResponse({
          message: "user banned or deleted",
          statusCode: 403,
        });
      }

      if (user.activatedAt) {
        throw new CustomErrorResponse({
          message: "user has not activated the account",
          statusCode: 406,
        });
      }

      const result = await this.search(filters, user.cpfCnpj);

      await session.commitTransaction();

      return result;
    } catch (e) {
      await session.abortTransaction();
      throw e;
    } finally {
      await session.endSession();
    }
  }

  async searchAsSuper(filters: TransactionFilter = {}) {
    const result = await this.search(filters);

    return result;
  }

  private async search(filters: TransactionFilter = {}, cpfCnpj?: string) {
    const {
      fromCpfCnpj,
      toCpfCnpj,
      minValue,
      maxValue,
      startDate,
      endDate,
      page = 1,
      limit = 10,
    } = filters;

    const query: any = {};

    if (cpfCnpj) {
      query.$or = [{ fromCpfCnpj: cpfCnpj }, { toCpfCnpj: cpfCnpj }];
    }

    if (fromCpfCnpj) {
      query.fromCpfCnpj = { $regex: fromCpfCnpj, $options: "i" };
    }

    if (toCpfCnpj) {
      query.toCpfCnpj = { $regex: toCpfCnpj, $options: "i" };
    }

    if (minValue !== undefined || maxValue !== undefined) {
      query.value = {};
      if (minValue !== undefined) query.value.$gte = minValue;
      if (maxValue !== undefined) query.value.$lte = maxValue;
    }

    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
    }

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      TransactionModel.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      TransactionModel.countDocuments(query),
    ]);

    const totalPages = Math.ceil(total / limit);
    const remainingPages = totalPages - page;

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages,
        remainingPages,
      },
    };
  }
}
