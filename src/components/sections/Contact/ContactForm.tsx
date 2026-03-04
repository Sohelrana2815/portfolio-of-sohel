"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const initialState: FormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function ContactForm() {
    const [form, setForm] = useState<FormData>(initialState);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // TODO: integrate with your email service / API route
        console.log("Form submitted:", form);
        setForm(initialState);
    }

    const inputClasses =
        "w-full rounded-lg bg-zinc-800/80 px-5 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors duration-200 focus:bg-zinc-800 focus:ring-1 focus:ring-[#FFB400]/50";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    required
                    aria-label="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClasses}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                    required
                    aria-label="Your email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClasses}
                />
            </div>

            {/* Subject */}
            <input
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                required
                aria-label="Subject"
                value={form.subject}
                onChange={handleChange}
                className={inputClasses}
            />

            {/* Message */}
            <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                required
                aria-label="Your message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
            />

            {/* Submit Button */}
            <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-[#FFB400] px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#FFB400] hover:text-black"
            >
                Send Message
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFB400] text-black transition-colors duration-300 group-hover:bg-black group-hover:text-[#FFB400]">
                    <Send size={16} />
                </span>
            </button>
        </form>
    );
}
