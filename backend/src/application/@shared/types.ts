import { ROLE } from "./authMiddleWare";

export type PayloadType = {
  sub: string;
  role: keyof typeof ROLE;
};

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
