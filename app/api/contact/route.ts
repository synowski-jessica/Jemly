import generateContactEmailHtml from "@/app/components/templateMail/mailContact";
import { creationOfTransporter } from "@/lib/send-mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const transporter = await creationOfTransporter();

    const formData = await req.formData();
    const token = formData.get("recaptchaToken") as string;
 
    const data = Object.fromEntries(formData) as {
      name: string;
      email: string;
      project:string;
      message: string;
    };

     // Vérification du token reCAPTCHA
    const verify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const { success, score } = await verify.json();

    if (!success || score < 0.5) {
        return Response.json({ error: "reCAPTCHA échoué" }, { status: 400 });
    }

    const mailBodyHtml = generateContactEmailHtml(data);

    const mailData = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `Formulaire de contact: vous avez reçu un message de la part de ${data.name}`,
      html: mailBodyHtml,
    };

    await transporter.sendMail(mailData);

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
