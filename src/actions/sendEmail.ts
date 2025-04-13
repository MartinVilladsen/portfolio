"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function sendEmail(FormData: FormData) {
    const senderEmail = FormData.get('senderEmail');
    const message = FormData.get('message');

    await resend.emails.send({
        from: "Contact Me <onboarding@resend.dev>",
        to: 'martin.k.villadsen@gmail.com',
        subject: 'Email TEST',
        reply_to: senderEmail as string,
        text: message as string
    });
}