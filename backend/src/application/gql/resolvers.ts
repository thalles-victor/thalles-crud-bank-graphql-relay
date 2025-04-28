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
        user: authResult.user,
        accessToken: authResult.accessToken,
      };
    },
  },
};
