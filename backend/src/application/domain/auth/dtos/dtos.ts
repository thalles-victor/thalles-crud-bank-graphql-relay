import { z } from "zod";

export const signUpDtoSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty(),
  cpfCnpj: z.string().nonempty(),
  phone: z.string().nonempty(),
});

export const signInDtoSchema = z.object({
  email: z.string().nonempty(),
  password: z.string().nonempty(),
});
