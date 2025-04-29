import { AuthService } from "../../domain/auth/auth.service";
import { WalletService } from "../../domain/wallet/wallet.service";

export const authService = new AuthService();
export const walletService = new WalletService();
