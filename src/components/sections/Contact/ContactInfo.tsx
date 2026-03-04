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
    value: "123 Street New York City, United States Of America 750065.",
  },
  {
    icon: Mail,
    label: "MAIL ME",
    value: "steve@mail.com",
    href: "mailto:steve@mail.com",
  },
  {
    icon: Phone,
    label: "CALL ME",
    value: "+216 21 184 010",
    href: "tel:+21621184010",
  },
];

const socials = [
  { label: "Facebook", href: "#", icon: "f" },
  { label: "Twitter", href: "#", icon: "𝕏" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "Instagram", href: "#", icon: "◎" },
] as const;

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Sub-heading */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold uppercase tracking-wide text-white">
          Don&apos;t Be Shy !
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-5">
        {contactDetails.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            {/* Icon circle */}
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFB400] text-black">
              <item.icon size={18} />
            </span>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-medium text-white transition-colors hover:text-[#FFB400]"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium text-white">{item.value}</p>
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
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-zinc-400 transition-all duration-200 hover:bg-[#FFB400] hover:text-black"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
