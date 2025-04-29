import "dotenv/config";

import z from "zod";

const ENVSchema = z.object({
  // Self Backend
  SELF_BACKEND_PROTOCOL: z.string().nonempty(),
  SELF_BACKEND_DOMAIN: z.string().nonempty(),
  SELF_BACKEND_PORT: z.string().nonempty(),

  // JWT
  JWT_SECRET: z.string().nonempty(),
  JWT_EXPIRES_IN: z.string().nonempty(),

  // Mongo
  MONGO_URL_CONNECTION: z.string().nonempty(),

  // Mailtrap
  MAILTRAP_HOST: z.string().nonempty(),
  MAILTRAP_USER: z.string().nonempty(),
  MAILTRAP_PORT: z
    .string()
    .nonempty()
    .refine((val) => !isNaN(parseInt(val, 10)), {
      message: "POSTGRES_PORT must be a valid number",
    })
    .transform((val) => parseInt(val, 10)),
  MAILTRAP_PASSWORD: z.string().nonempty(),
});

export const ENV = ENVSchema.parse(process.env);
