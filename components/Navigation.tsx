"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  showNav: boolean;
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "Highlights", href: "#highlights" },
  { label: "Residencies", href: "#residencies" },
  { label: "Press", href: "#press" },
];

export function Navigation({ showNav }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      } ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-lg font-bold tracking-[0.3em] uppercase text-foreground"
        >
          NOVA
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 bg-background/95 px-6 pb-6 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
