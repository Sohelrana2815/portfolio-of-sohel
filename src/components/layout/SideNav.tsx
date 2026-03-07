"use client";

import { useNav } from "@/context/NavContext";
import { Home, User, FolderKanban, Rss } from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "portfolio", icon: FolderKanban, label: "Portfolio" },
  { id: "blog", icon: Rss, label: "Blog" },
  { id: "contact", icon: User, label: "Contact" },
];

export default function SideNav() {
  const { activeSection, scrollToSection } = useNav(); // Same context!

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
              className={`relative border p-3 rounded-full transition-all duration-300   cursor-pointer text-foreground ${
                isActive
                  ? "bg-yellow-500 scale-110"
                  : "bg-[#EEEEEE] dark:bg-[#444444]"
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
