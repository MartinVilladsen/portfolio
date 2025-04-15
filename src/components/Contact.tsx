"use client"

import { sendEmail } from "@/actions/sendEmail"
import { Plane } from "lucide-react"
import { useFormStatus } from "react-dom"

export function Contact() {
  const { pending } = useFormStatus()

  return (
    <section id="contact" className="flex flex-col items-center w-full pt-20 pb-20 justify-center px-4">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Contact Me
        </h1>
        <p className="text-blue-100/90 text-lg">
          If you want to get in touch, please contact me directly at{" "}
          <a
            href="mailto:martin.k.villadsen@gmail.com"
            className="text-white underline underline-offset-4 transition-colors"
          >
            martin.k.villadsen@gmail.com
          </a>{" "}
          or through this form. 😀
        </p>
      </div>

      <div className="w-full max-w-[550px]">
        <div className="bg-gradient-to-br from-[#193366]/90 to-[#0a1a42]/90 backdrop-blur-sm border border-[#266ac2]/30 shadow-lg rounded-xl p-6 md:p-8">
          <form
            action={async (FormData) => {
              await sendEmail(FormData)
            }}
            className="flex flex-col gap-5"
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-blue-100 ml-1">
                Your Email
              </label>
              <input
                id="email"
                className="h-14 w-full px-4 rounded-lg border border-[#266ac2]/40 bg-[#0a1a42]/50 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-[#33a1c5]/50 transition-all duration-200"
                name="senderEmail"
                type="email"
                required
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-blue-100 ml-1">
                Your Message
              </label>
              <textarea
                id="message"
                className="h-52 w-full px-4 py-3 rounded-lg border border-[#266ac2]/40 bg-[#0a1a42]/50 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-[#33a1c5]/50 resize-none transition-all duration-200"
                name="message"
                required
                maxLength={5000}
              ></textarea>
            </div>

            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 h-[3.25rem] w-[9rem] bg-gradient-to-r from-[#266ac2] to-[#33a1c5] text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 hover:shadow-lg hover:shadow-[#33a1c5]/20 active:scale-100 disabled:opacity-70 disabled:hover:scale-100 font-medium"
                disabled={pending}
              >
                {pending ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                ) : (
                  <>
                    Send Message{" "}
                    <Plane className="text-xs opacity-90 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
