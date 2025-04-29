import { useState, useEffect } from "react";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
});

export type RegisterType = z.infer<typeof registerSchema>;

export function useRegister(data: RegisterType) {
  const [registerResult, setRegisterResult] = useState();

  // call api

  return {
    registerResult,
    setRegisterResult,
  };
}
