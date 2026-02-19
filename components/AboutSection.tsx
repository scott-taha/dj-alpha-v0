"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const STATS = [
  { value: "200+", label: "Shows Worldwide" },
  { value: "15", label: "Countries" },
  { value: "50M+", label: "Streams" },
  { value: "8", label: "Residencies" },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image Column */}
          <div
            className={`relative aspect-[3/4] overflow-hidden transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <Image
              src="/images/press-photo.jpg"
              alt="NOVA portrait"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Text Column */}
          <div
            className={`flex flex-col gap-8 transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex flex-col gap-4">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">
                About the Artist
              </span>
              <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
                Redefining the Nightlife Experience
              </h2>
            </div>

            <p className="font-sans leading-relaxed text-muted-foreground">
              NOVA has been at the forefront of electronic music for over a
              decade, blending deep house, techno, and afrobeat into
              transcendent live experiences. From Berlin&#39;s underground scene to
              the mega-stages of Tomorrowland, every set is a journey.
            </p>

            <p className="font-sans leading-relaxed text-muted-foreground">
              With residencies across three continents and collaborations with
              the industry&#39;s finest, NOVA continues to push the boundaries of
              what a DJ set can become &mdash; a full sensory immersion.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-mono text-2xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
