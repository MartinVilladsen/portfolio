"use client"
import { sendEmail } from "@/actions/sendEmail";
import { Plane } from "lucide-react";
import { useFormStatus } from "react-dom";

export function Contact() {
    const { pending } = useFormStatus();
    
    return (
        <section id="contact" className="flex flex-col items-center w-full pt-20 justify-center">
            <h1 className='text-4xl text-white font-bold pb-2'>Contact Me</h1>
            <h2 className="text-white pb-10">If you want to get in touch, please contact me directly at martin.k.villadsen@gmail.com or through this form.😀</h2>
            <div className="w-full max-w-[500px]">
                <div className="bg-slate-900 border border-slate-800 shadow-lg rounded-lg p-4">
                    <form 
                        action={async (FormData) => {
                            await sendEmail(FormData)
                        }} 
                        className="flex flex-col gap-4"
                    >
                        <input 
                            className="h-14 px-4 rounded-lg border border-slate-800 bg-slate-800/50 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-700" 
                            name="senderEmail" 
                            type="email" 
                            required 
                            maxLength={100} 
                            placeholder="Your email" 
                        />
                        <textarea 
                            className="h-52 px-4 py-3 rounded-lg border border-slate-800 bg-slate-800/50 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-700" 
                            name="message" 
                            placeholder="Your message" 
                            required 
                            maxLength={5000}
                        ></textarea>
                        <div className="flex justify-end mt-2">
                            <button
                                type="submit"
                                className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-slate-800 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-slate-700 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 font-semibold"
                                disabled={pending}
                            >
                                {pending ? (
                                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                                ) : (
                                    <>
                                        Submit{" "}
                                        <Plane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
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