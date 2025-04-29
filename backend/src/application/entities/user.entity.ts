import mongoose from "mongoose";

interface IUser {
  name: string;
  email: string;
  cpfCnpj: string;
  activatedAt: Date | null;
  deletedAt: Date | null;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cpfCnpj: { type: String, required: true },
  password: { type: String, required: false, default: null },
  activatedAt: { type: Date, required: false, default: null },
  deletedAt: { type: Date, required: false, default: null },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export const UserModel = mongoose.model<IUser>("User", userSchema);
