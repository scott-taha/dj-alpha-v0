"use client";

import { useEffect, useRef, useState } from "react";
import { Download, FileText, Image as ImageIcon, Music } from "lucide-react";

const PRESS_ITEMS = [
  {
    icon: FileText,
    title: "Artist Bio",
    description: "Full biography, career timeline, and artist statement.",
    format: "PDF",
  },
  {
    icon: ImageIcon,
    title: "Press Photos",
    description: "High-resolution promotional and live performance photos.",
    format: "ZIP",
  },
  {
    icon: Music,
    title: "Tech Rider",
    description: "Full technical requirements and stage specifications.",
    format: "PDF",
  },
];

const PRESS_QUOTES = [
  {
    quote: "NOVA doesn't just play music. NOVA builds worlds.",
    source: "Resident Advisor",
  },
  {
    quote: "The most electrifying set we've witnessed this decade.",
    source: "Mixmag",
  },
  {
    quote: "A masterclass in reading the room and elevating it.",
    source: "DJ Mag",
  },
];

export function PressKitSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="press" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-16 flex flex-col gap-4 text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">
            For Media & Promoters
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Press Kit
          </h2>
        </div>

        {/* Press Quotes */}
        <div
          className={`mb-16 grid gap-6 md:grid-cols-3 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {PRESS_QUOTES.map((item) => (
            <blockquote
              key={item.source}
              className="flex flex-col gap-4 border-l-2 border-primary pl-6"
            >
              <p className="font-sans text-base italic leading-relaxed text-foreground">
                &ldquo;{item.quote}&rdquo;
              </p>
              <cite className="font-sans text-xs tracking-wider uppercase text-primary not-italic">
                &mdash; {item.source}
              </cite>
            </blockquote>
          ))}
        </div>

        {/* Download Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {PRESS_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group flex flex-col gap-4 border border-border bg-card p-8 transition-all duration-700 hover:border-primary ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                <div className="flex items-center justify-between">
                  <Icon size={24} className="text-primary" />
                  <span className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground">
                    {item.format}
                  </span>
                </div>
                <h3 className="font-mono text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <button className="mt-auto flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-primary transition-colors hover:text-foreground">
                  <Download size={14} />
                  Download
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
