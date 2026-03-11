import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}
interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

export default function TestimonialCard({
  testimonial,
  isActive,
}: TestimonialCardProps) {
  return (
    <motion.div
      className={`relative w-full max-w-85 md:max-w-100 rounded-4xl bg-[#181818] p-6 md:p-8 text-left transition-all duration-500 ${isActive ? "border border-[#ffb400]/50 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : "border border-[#2a2a2a] shadow-lg"}`}
      style={{
        background: "linear-gradient(145deg, #1a1a1a 0%, #121212 100%)",
      }}
      whileHover={
        isActive
          ? {
              scale: 1.03,
            }
          : {}
      }
    >
      {/* Decorative Accent Tab */}
      <div className="absolute top-0 right-8 w-8 h-1 bg-[#ffb400] rounded-b-md opacity-80" />
      <div className="absolute top-0 left-0 w-1 h-16 bg-[#ffb400] rounded-r-md opacity-50" />

      {/* Large Background Quote */}
      <Quote
        className="absolute top-6 right-6 w-24 h-24 text-[#ffb400] opacity-5 rotate-12 pointer-events-none"
        fill="currentColor"
      />

      {/* Avatar (Overlapping Top Edge) */}
      <div className="absolute -top-10 left-8">
        <div
          className={`relative rounded-full p-0.5 transition-colors duration-500 ${isActive ? "bg-[#ffb400]" : "bg-[#2a2a2a]"}`}
        >
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={200}
            height={200}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-[#181818]"
          />
          {isActive && (
            <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(255,180,0,0.4)] pointer-events-none" />
          )}
        </div>
      </div>

      <div className="mt-10 md:mt-12">
        {/* Header: Name & Role */}
        <div className="mb-4">
          <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wide">
            {testimonial.name}
          </h3>
          <p className="text-[#888888] text-xs md:text-sm font-medium mt-1 uppercase tracking-wider">
            {testimonial.role}
          </p>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                color: i < testimonial.rating ? "#ffb400" : "transparent",
                fill: i < testimonial.rating ? "#ffb400" : "transparent",
              }}
              transition={{
                delay: isActive ? i * 0.1 : 0,
                duration: 0.3,
              }}
            >
              <Star
                className={`w-4 h-4 md:w-5 md:h-5 ${i < testimonial.rating ? "text-[#ffb400]" : "text-[#2a2a2a]"}`}
                strokeWidth={i < testimonial.rating ? 0 : 1.5}
              />
            </motion.div>
          ))}
        </div>

        {/* Review Text */}
        <p className="text-[#bdbdbd] italic text-sm md:text-base leading-relaxed font-medium relative z-10">
          &quot;{testimonial.text}&quot;
        </p>
      </div>
    </motion.div>
  );
}
