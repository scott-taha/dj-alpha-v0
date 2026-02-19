"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Music, Award, Disc3 } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Play,
    title: "Tomorrowland 2025",
    subtitle: "Mainstage Headline",
    description:
      "Closed out the legendary Mainstage to a crowd of 80,000 with a 2-hour set that trended worldwide.",
  },
  {
    icon: Music,
    title: "Echoes LP",
    subtitle: "Debut Album Release",
    description:
      "12-track album blending deep house and Afrobeat, featuring collaborations with Grammy-winning vocalists.",
  },
  {
    icon: Award,
    title: "DJ Mag Top 20",
    subtitle: "2024 Rankings",
    description:
      "Ranked #17 in the annual DJ Mag Top 100 poll, rising 40 spots from the previous year.",
  },
  {
    icon: Disc3,
    title: "Boiler Room Berlin",
    subtitle: "Live Set",
    description:
      "A 90-minute vinyl-only set that amassed over 5 million views and became one of the platform's top streams.",
  },
];

export function HighlightsSection() {
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
    <section ref={ref} id="highlights" className="py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-16 flex flex-col gap-4 text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">
            Career Highlights
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Defining Moments
          </h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid gap-px bg-border md:grid-cols-2">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group flex flex-col gap-4 bg-background p-8 transition-all duration-700 hover:bg-secondary/80 md:p-12 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center border border-primary text-primary">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-mono text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <span className="font-sans text-xs tracking-wider uppercase text-primary">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
