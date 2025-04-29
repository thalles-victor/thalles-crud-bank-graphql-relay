import mongoose from "mongoose";

import { PayloadType } from "../../@shared/types";
import { UserModel } from "../../entities/user.entity";
import { WalletModel } from "../../entities/wallet.entity";
import { CustomErrorResponse } from "../../@shared/error";

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
}
