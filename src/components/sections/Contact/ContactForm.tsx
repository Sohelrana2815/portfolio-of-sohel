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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      <button className="group relative inline-flex items-center gap-4 w-fit xl:pl-7 xl:pr-18 pl-7 pr-16 py-4 border xl:border-2 border-[#FFB400] rounded-full overflow-hidden transition-all duration-300 cursor-pointer mx-auto xl:mx-0 hover:border-transparent">
        {/* 1) The filling layer — scales from right -> left */}
        <span
          className="absolute inset-0 z-0 rounded-full origin-right transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300  ease-out"
          style={{ backgroundColor: "oklch(79.5% 0.184 86.047)" }} // bg-yellow-500
        />

        {/* 2) The label (above the filler) */}
        <span className="relative z-10 font-bold uppercase tracking-wide text-foreground group-hover:text-black transition-colors text-sm xl:text-base">
          Send Message
        </span>

        {/* 3) The circular arrow (on top) */}
        <span className="absolute right-0 top-1/2 z-20 -translate-y-1/2 w-14 h-14 rounded-full bg-[#FFB400] flex items-center justify-center transform transition-transform duration-300 font-bold">
          <Send className="text-white font-bold" />
        </span>
      </button>
    </form>
  );
}
