import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",

  port: 2525,

  auth: {
    user: "30371970261976",
    pass: "58d7dd1a31207a",
  },
});
