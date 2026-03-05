import ContactInfo from "./Contact/ContactInfo";
import ContactForm from "./Contact/ContactForm";

export default function Contact() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="relative mb-14 text-center">
          {/* Background watermark */}
          <span
            className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-6xl font-extrabold uppercase text-zinc-800/10 sm:text-7xl md:text-9xl"
            aria-hidden="true"
          >
            Contact
          </span>

          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase text-foreground">
            Get In <span className="text-[#FFB400]">Touch</span>
          </h2>

          {/* Small dot accent */}
          <span
            className="mx-auto mt-3 block h-1.5 w-1.5 rounded-full bg-[#FFB400]"
            aria-hidden="true"
          />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left — Info (2/5) */}
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          {/* Right — Form (3/5) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
