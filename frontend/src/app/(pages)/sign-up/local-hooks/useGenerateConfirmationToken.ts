import { ClientError, gql, request } from "graphql-request";
import { useState } from "react";
import { z } from "zod";

const generateConfirmationTokenSchema = z.object({
  email: z.string().nonempty(),
});

export type SendVerificationTokenSchemaType = z.infer<
  typeof generateConfirmationTokenSchema
>;

const GENERATE_CONFIRMATION_TOKEN_MUTATION = gql`
  mutation ($email: String!) {
    generateConfirmationToken(inputDto: { email: $email }) {
      message
    }
  }
`;

export interface GenerateConfirmationTokenResponse {
  generateConfirmationToken: {
    message: "token was send to email";
  };
}

export function useGenerateConfirmationToken() {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerateConfirmationToken(
    props: SendVerificationTokenSchemaType
  ) {
    try {
      const result = await request<GenerateConfirmationTokenResponse>(
        "http://localhost:3333",
        GENERATE_CONFIRMATION_TOKEN_MUTATION,
        { email: props.email }
      );

      setData(result.generateConfirmationToken.message);
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
  return {
    data,
    setData,
    handleGenerateConfirmationToken,
  };
}
