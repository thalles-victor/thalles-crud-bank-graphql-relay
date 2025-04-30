import mongoose, { Schema } from "mongoose";

export interface ITransaction {
  fromCpfCnpj: string;
  toCpfCnpj: string;
  value: number;
  createdAt: Date;
}

export const transactionSchema = new mongoose.Schema<ITransaction>({
  fromCpfCnpj: { type: String, required: true },
  toCpfCnpj: { type: String, required: true },
  value: { type: Schema.Types.Number, required: true },
  createdAt: { type: Date, required: true },
});

export const TransactionModel = mongoose.model<ITransaction>(
  "Transactions",
  transactionSchema
);

export interface TransactionFilter {
  fromCpfCnpj?: string;
  toCpfCnpj?: string;
  minValue?: number;
  maxValue?: number;
  startDate?: Date;
  endDate?: Date;
  page?: number;
  limit?: number;
}
