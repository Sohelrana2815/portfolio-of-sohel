"use client";

import { Home, User, FolderKanban, Rss } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "portfolio", icon: FolderKanban, label: "Portfolio" },
  { id: "skills", icon: User, label: "Skills" },
  { id: "blog", icon: Rss, label: "Blog" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-1/2 right-2 z-50 -translate-y-1/2 flex flex-col gap-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              relative border p-3 rounded-full  transition-all duration-300 ease-out cursor-pointer
              ${
                isActive
                  ? "bg-yellow-500 text-black scale-110"
                  : "bg-[#2B2A2A] text-white hover:bg-yellow-500 hover:text-black hover:-translate-x-1"
              }
            `}
            title={item.label}
          >
            <Icon className="w-5 h-5" />
            <span className="sr-only">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
