import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard, { Testimonial } from "./TestimonialCard";
const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Product Manager • Acme Co.",
    rating: 5,
    text: "Sohel helped us solve several issues with our website and improved the overall user experience. His work made our online presence more professional and helped us connect with more customers.",
    avatar: "/user/CEO.webp",
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "Founder • TechFlow",
    rating: 5,
    text: "Working with Sohel was a great experience. He understood our business needs and delivered solutions that improved our website performance and helped us reach more potential clients.",
    avatar: "/user/Jack-ping.webp",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Marketing Director • Elevate",
    rating: 4,
    text: "Sohel is professional, communicative, and very reliable. He delivered a website that solved our marketing challenges and made it easier for customers to find and trust our business.",
    avatar: "/user/Jens-Knab.webp",
  },
];
export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };
  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    const length = TESTIMONIALS.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(length - 1)) return "right";
    if (diff === -1 || diff === length - 1) return "left";
    // Determine if it should be hidden left or right based on shortest path
    let shortestDistance = diff;
    if (Math.abs(diff) > length / 2) {
      shortestDistance = diff > 0 ? diff - length : diff + length;
    }
    return shortestDistance > 0 ? "hiddenRight" : "hiddenLeft";
  };
  const variants = {
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      zIndex: 10,
      filter: "brightness(1)",
    },
    left: {
      x: isMobile ? "-120%" : "-105%",
      scale: isMobile ? 0.9 : 0.85,
      opacity: isMobile ? 0 : 0.4,
      zIndex: 5,
      filter: "brightness(0.5)",
    },
    right: {
      x: isMobile ? "120%" : "105%",
      scale: isMobile ? 0.9 : 0.85,
      opacity: isMobile ? 0 : 0.4,
      zIndex: 5,
      filter: "brightness(0.5)",
    },
    hiddenLeft: {
      x: "-200%",
      scale: 0.5,
      opacity: 0,
      zIndex: 0,
    },
    hiddenRight: {
      x: "200%",
      scale: 0.5,
      opacity: 0,
      zIndex: 0,
    },
  };
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#0f0f10] flex flex-col items-center justify-center min-h-screen">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-20 w-64 h-96 bg-[#ffb400] opacity-[0.03] rotate-45 blur-3xl" />
        <div className="absolute right-10 bottom-20 w-1 h-32 bg-[#ffb400] opacity-20 rotate-12" />
        <div className="absolute right-14 bottom-24 w-1 h-16 bg-[#ffb400] opacity-10 rotate-12" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
            Client <span className="text-[#ffb400]">Feedback</span>
          </h2>
          <p className="text-[#bdbdbd] max-w-xl mx-auto text-sm md:text-base">
            Don’t just take our word for it. See how our solutions help
            businesses solve problems and achieve real results.
          </p>
        </div>

        <div className="relative flex items-center justify-center h-112.5 md:h-100">
          {/* Carousel Track */}
          <div className="relative w-full max-w-85 md:max-w-100 h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              {TESTIMONIALS.map((testimonial, index) => {
                const position = getCardPosition(index);
                return (
                  <motion.div
                    key={testimonial.id}
                    className="absolute top-10 md:top-0"
                    variants={variants}
                    initial={position}
                    animate={position}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 25,
                      mass: 0.8,
                    }}
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      isActive={position === "center"}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Vertical Pagination (Right Side) */}
          <div className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative flex items-center justify-center w-6 h-6"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`w-2 h-2 cursor-pointer rounded-full transition-all duration-300 ${currentIndex === index ? "bg-[#ffb400] scale-150 shadow-[0_0_10px_rgba(255,180,0,0.6)]" : "bg-[#2a2a2a] group-hover:bg-[#4a4a4a]"}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 cursor-pointer rounded-full border border-[#ffb400] flex items-center justify-center text-[#ffb400] hover:bg-[#ffb400] hover:text-[#0f0f10] transition-all duration-300 bg-[#0f0f10]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 cursor-pointer rounded-full border border-[#ffb400] flex items-center justify-center text-[#ffb400] hover:bg-[#ffb400] hover:text-[#0f0f10] transition-all duration-300 bg-[#0f0f10]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* CTA Button */}
        {/* <div className="mt-16 md:mt-24 flex justify-center">
          <button className="group flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#ffb400] text-[#ffb400] font-bold uppercase tracking-wider text-sm hover:bg-[#ffb400] hover:text-[#0f0f10] transition-all duration-300">
            More Reviews
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div> */}
      </div>
    </section>
  );
}
