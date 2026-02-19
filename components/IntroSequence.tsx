"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface IntroSequenceProps {
  onComplete: () => void;
  onBooking: () => void;
}

export function IntroSequence({ onComplete, onBooking }: IntroSequenceProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => {
        setPhase(4);
        onComplete();
      }, 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dj.jpg"
          alt="DJ performing at nightclub"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        {/* Name reveal */}
        <h1
          className={`font-mono text-6xl font-bold tracking-[0.3em] uppercase transition-all duration-1000 ease-out md:text-8xl lg:text-9xl ${
            phase >= 1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ color: "var(--foreground)" }}
        >
          NOVA
        </h1>

        {/* Tagline */}
        <p
          className={`font-sans text-sm tracking-[0.5em] uppercase transition-all duration-1000 delay-200 ease-out text-muted-foreground md:text-base ${
            phase >= 2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          DJ &middot; Producer &middot; Sonic Architect
        </p>

        {/* Divider */}
        <div
          className={`h-px bg-primary transition-all duration-1000 delay-300 ease-out ${
            phase >= 2 ? "w-32 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* CTA Buttons */}
        <div
          className={`flex flex-col gap-4 transition-all duration-1000 delay-500 ease-out sm:flex-row ${
            phase >= 3
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={onBooking}
            className="border border-primary bg-primary px-8 py-3 font-mono text-xs tracking-[0.3em] uppercase text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            Book Now
          </button>
          <a
            href="#gallery"
            className="border border-border bg-transparent px-8 py-3 font-mono text-xs tracking-[0.3em] uppercase text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Explore
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            phase >= 4 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Scroll
            </span>
            <div className="h-8 w-px animate-pulse bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
