"use client";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "SoundCloud", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "Resident Advisor", href: "#" },
  { label: "YouTube", href: "#" },
];

const FOOTER_NAV = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "Highlights", href: "#highlights" },
  { label: "Residencies", href: "#residencies" },
  { label: "Press", href: "#press" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-2xl font-bold tracking-[0.3em] uppercase text-foreground">
              NOVA
            </span>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              International DJ and Producer. Crafting immersive sonic
              experiences across the globe.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">
              Navigation
            </span>
            <ul className="flex flex-col gap-2">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">
              Connect
            </span>
            <ul className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <span className="font-sans text-xs text-muted-foreground">
            &copy; 2026 NOVA. All rights reserved.
          </span>
          <span className="font-sans text-xs text-muted-foreground">
            Management: Nova Music Group Ltd.
          </span>
        </div>
      </div>
    </footer>
  );
}
