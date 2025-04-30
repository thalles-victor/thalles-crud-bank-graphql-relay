import { authMutationResolver } from "./auth.resolver";
import { walletMutationResolver, walletQueryResolver } from "./wallet.resolver";

export const resolvers = {
  Query: {
    hello: () => "world",
    ...walletQueryResolver,
  },

  Mutation: {
    ...authMutationResolver,
    ...walletMutationResolver,
  },
};
