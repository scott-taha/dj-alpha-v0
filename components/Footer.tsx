"use client";

import Image from "next/image";

const SOCIAL_LINKS = [

  {

    label: "Instagram",

    href: "https://www.instagram.com/alphaaadj?igsh=M2Y4ZDV5dW1iNHc=",

  },

  {

    label: "SoundCloud",

    href: "https://soundcloud.com/ilyas-lamkouki",

  },

  {

    label: "Email",

    href: "mailto:alphadj210@gmail.com",

  },

];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Highlights", href: "#highlights" },
  { label: "Book", href: "#book" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="w-14 h-[3.15rem] overflow-hidden">
              <Image
                src="/images/alpha-logo.png"
                alt="ALPHA logo"
                width={60}
                height={60}
                className="w-14 h-14 object-contain object-top"
              />
            </div>
            <p className="text-sm leading-relaxed text-[#888888]">
              DJ & Producer. Crafting immersive sonic experiences from Morocco
              to the world.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#ff0000]">
              Navigation
            </span>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#888888] hover:text-[#ffffff] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#ff0000]">
              Connect
            </span>
            <ul className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="text-sm text-[#888888] hover:text-[#ffffff] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#222222] pt-8 md:flex-row">
          <span className="text-xs text-[#888888]">
            &copy; 2026 ALPHA. All rights reserved.
          </span>
          <span className="text-xs text-[#888888]">
            DJ &amp; Producer
          </span>
        </div>
      </div>
    </footer>
  );
}
