import nodemailer from "nodemailer";
import { ENV } from "../../@shared/env";

export const transport = nodemailer.createTransport({
  host: ENV.MAILTRAP_HOST,
  port: ENV.MAILTRAP_PORT,
  secure: false,
  auth: {
    user: ENV.MAILTRAP_USER,
    pass: ENV.MAILTRAP_PASSWORD,
  },
});
