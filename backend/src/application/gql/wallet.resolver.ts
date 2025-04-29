import { authMiddleware } from "../@shared/authMiddleWare";
import { walletService } from "../@shared/singletons";

export const walletQueryResolver = {
  getWallet: async (_: any, args: any, ctx: any, info: any) => {
    const authorization = ctx.req.headers.authorization;
    const payload = await authMiddleware(authorization, []);

    const result = await walletService.getWallet(payload);

    return result;
  },
};
