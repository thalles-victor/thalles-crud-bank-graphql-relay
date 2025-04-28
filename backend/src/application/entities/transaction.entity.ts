import mongoose from "mongoose";

interface ITransaction {}

export const transactionSchema = new mongoose.Schema<ITransaction>({});

export const TransactionModel = mongoose.model<ITransaction>(
  "Transactions",
  transactionSchema
);
