import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "df02bfab8b0923",
    pass: "1fe91f25d48a27",
  },
});

export class NodemailerMaiAdapter implements MailAdapter {
  async sendEmail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Diego Bonagurio <diego.bonagurio@gmail.com>",
      subject,
      html: body,
    });
  }
}
