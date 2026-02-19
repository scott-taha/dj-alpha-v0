"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

const VENUES = [
  {
    name: "Berghain",
    city: "Berlin, Germany",
    period: "2021 - Present",
    image: "/images/venue-1.jpg",
    description: "Weekly residency every Saturday, playing the iconic Panorama Bar.",
  },
  {
    name: "Tomorrowland Mainstage",
    city: "Boom, Belgium",
    period: "2022 - Present",
    image: "/images/venue-2.jpg",
    description: "Annual headline slot at the world's largest electronic music festival.",
  },
  {
    name: "Skybar",
    city: "Dubai, UAE",
    period: "2023 - Present",
    image: "/images/venue-3.jpg",
    description: "Monthly residency at the most exclusive rooftop venue in the Middle East.",
  },
];

export function VenueGallery() {
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
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div
          className={`mb-16 flex flex-col gap-4 text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">
            Residencies & Legacy
          </span>
          <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Where the Sound Lives
          </h2>
          <p className="mx-auto max-w-2xl font-sans leading-relaxed text-muted-foreground">
            From legendary clubs to world-class festivals, these are the stages
            that have shaped the NOVA sound.
          </p>
        </div>

        {/* Venue Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {VENUES.map((venue, i) => (
            <div
              key={venue.name}
              className={`group relative overflow-hidden border border-border bg-card transition-all duration-700 hover:border-primary ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={venue.image}
                  alt={`${venue.name} venue`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3 p-6">
                <h3 className="font-mono text-lg font-bold text-foreground">
                  {venue.name}
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={14} className="text-primary" />
                    <span className="font-sans text-sm">{venue.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} className="text-primary" />
                    <span className="font-sans text-sm">{venue.period}</span>
                  </div>
                </div>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {venue.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
