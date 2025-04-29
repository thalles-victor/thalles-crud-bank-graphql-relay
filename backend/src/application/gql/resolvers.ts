import { authResolver } from "./auth.resolver";

export const resolvers = {
  Query: {
    hello: () => "world",
  },

  Mutation: {
    ...authResolver,
  },
};
