"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Highlights", href: "#highlights" },
    { label: "Rider", href: "#rider" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#000000]/90 backdrop-blur-sm border-b border-[#222222]"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/images/alpha-logo.png"
            alt="ALPHA logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-mono uppercase tracking-[0.2em] text-[#888888] hover:text-[#ffffff] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#press"
            className="px-6 py-2 bg-[#ff0000] text-[#ffffff] text-sm font-mono uppercase tracking-[0.2em] hover:bg-[#cc0000] transition-colors duration-300 pulse-red"
          >
            Download EPK
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#ffffff] transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#ffffff] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#ffffff] transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#000000]/95 backdrop-blur-sm border-b border-[#222222]"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-mono uppercase tracking-[0.2em] text-[#888888] hover:text-[#ffffff] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#press"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-2 bg-[#ff0000] text-[#ffffff] text-sm font-mono uppercase tracking-[0.2em] hover:bg-[#cc0000] transition-colors duration-300 pulse-red"
              >
                Download EPK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
