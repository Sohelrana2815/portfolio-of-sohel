"use client";

import { Home, User, FolderKanban, Rss } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "portfolio", icon: FolderKanban, label: "Portfolio" },
  { id: "blog", icon: Rss, label: "Blog" },
  { id: "contact", icon: User, label: "Contact" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("home");
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // If we are currently executing a smooth scroll from a click, ignore observer updates
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        // threshold: 0.5 means when 50% of the section is visible
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null, // Use the viewport
      rootMargin: "0px",
      threshold: 0.6, // Adjust this: 0.6 means 60% of the section must be visible
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Set ref to true to temporarily disable observer while jumping to section
    isScrollingRef.current = true;
    setActiveSection(sectionId);

    element.scrollIntoView({ behavior: "smooth" });

    // Reset the ref after the scroll animation roughly finishes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <>
      {/* Desktop Side Navigation - XL and above */}
      <nav className="fixed top-1/2 right-2 z-50 -translate-y-1/2 flex-col gap-4 hidden xl:flex">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative border p-3 rounded-full transition-all duration-300 bg-[#444444] cursor-pointer ${
                isActive ? "bg-yellow-500 text-black scale-110" : "text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </nav>

      {/* Mobile Bottom Navigation - Below XL */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-800 xl:hidden">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex flex-col items-center gap-1 p-2 transition-all duration-300 ease-out border rounded-full bg-[#444444] cursor-pointer font-bold ${
                  isActive
                    ? "text-[#FFFFFF] bg-[#FFB400] scale-110"
                    : "hover:text-yellow-500"
                }`}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
