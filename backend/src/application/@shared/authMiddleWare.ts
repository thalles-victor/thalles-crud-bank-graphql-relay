import JWT from "jsonwebtoken";
import { CustomErrorResponse } from "./error";
import { ENV } from "./env";
import { PayloadType } from "./types";

export enum ROLE {
  ROOT = "ROOT",
  ADMIN = "ADMIN",
  USER = "USER",
}

export async function authMiddleware(
  accessToken: string,
  allowRoles: (keyof typeof ROLE)[]
) {
  const [Bearer, token] = accessToken.split(" ");

  if (!Bearer || Bearer !== "Bearer") {
    throw new CustomErrorResponse({
      message: "require Bearer prefix",
      statusCode: 400,
    });
  }

  if (!token) {
    throw new CustomErrorResponse({
      message: "require content token",
      statusCode: 400,
    });
  }

  let payload;

  try {
    payload = JWT.verify(token, ENV.JWT_SECRET, {
      ignoreExpiration: false,
    }) as PayloadType;
  } catch (e) {
    throw new CustomErrorResponse({
      message: "token invalid",
      statusCode: 401,
    });
  }

  if (allowRoles.length != 0)
    if (!allowRoles.includes(payload.role)) {
      throw new CustomErrorResponse({
        message: "access denied",
        statusCode: 403,
      });
    }

  return payload;
}
