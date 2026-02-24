"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent hydration mismatch

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      onClick={toggleTheme}
      className="h-12 w-12 rounded-full flex items-center justify-center cursor-pointer bg-[#4B4B4B]"
    >
      {theme === "dark" ? (
        <Sun className="h-6! w-6!" />
      ) : (
        <Moon className="h-6! w-6! text-white" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
