import mongoose from "mongoose";

interface IAccount {
  email: string;
  balance: number;
  isDeleted: Date | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export const accountSchema = new mongoose.Schema<IAccount>({
  balance: { type: Number, required: true },
  email: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export const AccountModel = mongoose.model<IAccount>("Account", accountSchema);
