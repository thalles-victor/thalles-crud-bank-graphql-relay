import { authService } from "../@shared/singletons";

export const resolvers = {
  Query: {
    hello: () => "world",
  },

  Mutation: {
    signUp: async (_: any, args: any, contextValue: any, info: any) => {
      const authDto = args.authDto;

      const authResult = await authService.signUp(authDto);

      return {
        user: authResult,
        message: "success",
      };
    },

    generateConfirmationToken: async (
      _: any,
      args: any,
      contextValue: any,
      info: any
    ) => {
      const email = args.inputDto.email;

      const result = await authService.generateConfirmationToken(email);

      return result;
    },

    validateConfirmationToken: async (
      _: any,
      args: any,
      contextValue: any,
      info: any
    ) => {
      const inputDto = args.inputDto;

      const result = await authService.validateConfToken(
        inputDto.email,
        inputDto.token
      );

      return result;
    },

    createPassword: async (_: any, args: any, contextValue: any, info: any) => {
      const inputDto = args.inputDto;

      const result = await authService.createPassword(
        inputDto.email,
        inputDto.password
      );

      return result;
    },
  },
};
