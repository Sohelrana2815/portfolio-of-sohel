"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";

interface NavContextType {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("home");
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0.6,
    });

    // Observe all sections defined in your nav
    const sectionIds = ["home", "about", "portfolio", "blog", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    isScrollingRef.current = true;
    setActiveSection(sectionId);

    element.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };
  return (
    <NavContext.Provider value={{ activeSection, scrollToSection }}>
      {children}
    </NavContext.Provider>
  );
}
export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) throw new Error("useNav must be used within a NavProvider");
  return context;
};
