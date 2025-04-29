import mongoose from "mongoose";

interface IAccountConfirmation {
  userId: string;
  token: string;
  expiresAt: Date;
  attempts: number;
}

export const accountSchema = new mongoose.Schema<IAccountConfirmation>({
  userId: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  attempts: { type: Number, required: true, default: 0 },
  token: { type: String, required: false, default: null },
});

export const AccountModel = mongoose.model<IAccountConfirmation>(
  "Account",
  accountSchema
);
