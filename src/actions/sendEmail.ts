"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API)

export async function sendEmail(FormData: FormData) {
  const senderEmail = FormData.get("senderEmail")
  const message = FormData.get("message")

  if (!senderEmail || !message) {
    throw new Error("Email and message are required")
  }

  try {
    const result = await resend.emails.send({
      from: "Contact Me <onboarding@resend.dev>",
      to: "martin.k.villadsen@gmail.com",
      subject: "Email TEST",
      replyTo: senderEmail as string,
      text: message as string,
    })

    console.log("Email sent successfully:", result)
    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    throw error
  }
}
