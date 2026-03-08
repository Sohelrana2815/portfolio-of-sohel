"use client";
import { useEffect, useState } from "react";
import Form from "next/form";
import { useActionState } from "react";
import { Send } from "lucide-react";
import { sendToDiscord } from "@/app/actions/contact";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendToDiscord, {
    success: false,
    message: "",
  });
  const [visibleMessage, setVisibleMessage] = useState("");
  const inputClasses =
    "w-full rounded-lg bg-zinc-800/80 px-5 py-3.5 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors duration-200 focus:bg-zinc-800 focus:ring-1 focus:ring-[#FFB400]/50";
  useEffect(() => {
    if (state.message) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisibleMessage(state.message);

      const timer = setTimeout(() => {
        setVisibleMessage("");
      }, 3000); // hide after 4 seconds

      return () => clearTimeout(timer);
    }
  }, [state.message]);
  return (
    <Form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="YOUR NAME"
          required
          disabled={isPending}
          className={inputClasses}
        />
        <input
          type="email"
          name="email"
          placeholder="YOUR EMAIL"
          required
          disabled={isPending}
          className={inputClasses}
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="YOUR SUBJECT"
        required
        disabled={isPending}
        className={inputClasses}
      />
      <textarea
        name="message"
        placeholder="YOUR MESSAGE"
        required
        rows={6}
        disabled={isPending}
        className={`${inputClasses} resize-none`}
      />

      {visibleMessage && (
        <div
          className={`p-4 rounded-lg text-sm font-medium ${
            state.success
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-red-500/20 text-red-400 border border-red-500/30"
          }`}
        >
          {visibleMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="group relative cursor-pointer inline-flex items-center gap-4 w-fit pl-7 pr-16 py-4 border-2 border-[#FFB400] rounded-full overflow-hidden transition-all duration-300 disabled:opacity-50 hover:border-transparent"
      >
        <span className="absolute inset-0 z-0 rounded-full origin-right transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-[#FFB400]" />
        <span className="relative z-10 font-bold uppercase tracking-wide group-hover:text-black transition-colors">
          {isPending ? "SENDING..." : "SEND MESSAGE"}
        </span>
        <span className="absolute right-0 top-1/2 z-20 -translate-y-1/2 w-14 h-14 rounded-full bg-[#FFB400] flex items-center justify-center">
          <Send className="text-white" />
        </span>
      </button>
    </Form>
  );
}
