import z from "zod";

const ENVSchema = z.object({
  // JWT
  JWT_SECRET: z.string().nonempty(),
  JWT_EXPIRES_IN: z.string().nonempty(),

  // Mongo
  MONGO_URL_CONNECTION: z.string().nonempty(),
});

export const ENV = ENVSchema.parse(process.env);
