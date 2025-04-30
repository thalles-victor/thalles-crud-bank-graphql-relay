import { useState } from "react";
import { z } from "zod";
import { ClientError, gql, request } from "graphql-request";
import { User } from "../page";

const registerSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  cpfCnpj: z.string().nonempty(),
});

export type RegisterType = z.infer<typeof registerSchema>;

const SIGN_UP_MUTATION = gql`
  mutation ($name: String!, $email: String!, $cpfCnpj: String!) {
    signUp(authDto: { name: $name, email: $email, cpfCnpj: $cpfCnpj }) {
      user {
        name
        email
      }
      message
    }
  }
`;

export interface RegisterOkResponse {
  signUp: {
    user: {
      name: string;
      email: string;
    };
    message: string;
  };
}

export function useRegisterUser() {
  const [data, setData] = useState<User>();
  const [error, setError] = useState<string | null>(null);

  async function createAccount(props: RegisterType) {
    try {
      const result = await request<RegisterOkResponse>(
        "http://localhost:3333",
        SIGN_UP_MUTATION,
        {
          name: props.name,
          email: props.email,
          cpfCnpj: props.cpfCnpj,
        }
      );

      console.log("result is: ", result.signUp.user);

      setData(result.signUp.user);
    } catch (e) {
      if (e instanceof ClientError) {
        const message = e.response?.errors?.[0]?.message;
        console.log(message);
        if (message) {
          setError(message);
          return;
        }
      }
      console.error(e);
    }
  }

  return { data, error, createAccount };
}
