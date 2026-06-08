import generateContactEmailHtml from "@/app/components/templateMail/mailContact";
import { creationOfTransporter } from "@/lib/send-mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const transporter = creationOfTransporter();
    const formData = await req.formData();
 
    const data = Object.fromEntries(formData) as {
      name: string;
      email: string;
      project:string;
      message: string;
    };

    const mailBodyHtml = generateContactEmailHtml(data);

    const mailData = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `Formulaire de contact: vous avez reçu un message de la part de ${data.name}`,
      html: mailBodyHtml,
    };

    (await transporter).sendMail(mailData);

    return NextResponse.json({
      success: true,
      message: "Email send with success",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Error sending" },
      { status: 500 },
    );
  }
}
