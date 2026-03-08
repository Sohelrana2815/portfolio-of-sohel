import { MapPin, Mail, Phone, type LucideIcon } from "lucide-react";

interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const contactDetails: ContactDetail[] = [
  {
    icon: MapPin,
    label: "ADDRESS POINT",
    value: "Nabinagar, Savar 1340, Dhaka, Bangladesh",
  },
  {
    icon: Mail,
    label: "MAIL ME",
    value: "sohelrana31006@mail.com",
    href: "mailto:steve@mail.com",
  },
  {
    icon: Phone,
    label: "CALL ME",
    value: "+8801998838992",
    href: "tel:+8801998838992",
  },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/sohel.pro.dev",
    icon: "f",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sohel-rana-93423a2ba/",
    icon: "in",
  },
  { label: "Twitter", href: "https://x.com/SOHELRANA821823", icon: "𝕏" },
] as const;

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Sub-heading */}
      <div className="space-y-4">
        <h3 className="text-lg lg:text-xl text-foreground font-bold uppercase tracking-wide">
          Don&apos;t Be Shy !
        </h3>
        <p className="max-w-sm text-sm lg:text-base leading-relaxed text-muted-foreground">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-5">
        {contactDetails.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            {/* Icon circle */}
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFB400] text-black ">
              <item.icon size={20} />
            </span>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-[#FFB400]"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium text-foreground">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-3 pt-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            rel="noreferrer"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEEEEE] dark:bg-zinc-800 text-center font-bold text-zinc-400 transition-all duration-200 hover:bg-[#FFB400] hover:text-foreground text-sm xl:text-sm"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
