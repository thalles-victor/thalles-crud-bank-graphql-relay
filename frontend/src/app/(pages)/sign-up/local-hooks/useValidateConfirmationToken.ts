import request, { ClientError, gql } from "graphql-request";
import { useState } from "react";
import { z } from "zod";

const validateConfirmationTokenSchema = z.object({
  email: z.string().email().nonempty(),
  token: z.string().nonempty(),
});

export type ValidateConfirmationTokenSchemaType = z.infer<
  typeof validateConfirmationTokenSchema
>;

export interface ValidateConfirmationTokenResponse {
  validateConfirmationToken: {
    message: "fail";
  };
}

const VALIDATE_CONFIRMATION_TOKEN_QUERY = gql`
  mutation ($email: String!, $token: String!) {
    validateConfirmationToken(inputDto: { email: $email, token: $token }) {
      message
    }
  }
`;

export function useValidateConfirmationToken() {
  const [data, setData] = useState<"success" | "fail">();
  const [error, setError] = useState<string | null>(null);

  async function handleValidateToken(
    props: ValidateConfirmationTokenSchemaType
  ) {
    try {
      const result = await request<ValidateConfirmationTokenResponse>(
        "http://localhost:3333",
        VALIDATE_CONFIRMATION_TOKEN_QUERY,
        {
          email: props.email,
          token: props.token,
        }
      );

      setData(result.validateConfirmationToken.message);
    } catch (e) {
      if (e instanceof ClientError) {
        const message = e.response?.errors?.[0]?.message;
        console.log(message);
        if (message) {
          setError(message);
          return;
        }
      }
    }
  }

  return {
    data,
    handleValidateToken,
  };
}
