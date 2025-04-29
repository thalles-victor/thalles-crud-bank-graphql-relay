import { ROLE } from "./authMiddleWare";

export type PayloadType = {
  sub: string;
  role: keyof typeof ROLE;
};
