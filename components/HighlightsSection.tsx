"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const VENUES = [
  {
    name: "BCKSTG",
    subtitle: "Minimalist & intimate, it's all about electronic music",
    label: "& As Residence",
  },
  {
    name: "SUNSET RITUAL",
    subtitle: "by Le Comptoir Electronik",
    label: null,
  },
  {
    name: "LOTUS CLUB",
    subtitle: "Restaurant - Live Show - Club",
    label: "& As Residence",
  },
  {
    name: "THE CLUB AGADIR",
    subtitle: "Club Prive",
    label: "Actual Residency",
    highlight: true,
  },
];

export default function HighlightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="highlights"
      className="py-24 md:py-32 bg-[#0a0a0a]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff0000]">
            003
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight text-[#ffffff] mt-2">
            Residencies & Highlights
          </h2>
          <div className="w-16 h-0.5 bg-[#ff0000] mt-4" />
        </motion.div>

        {/* Venue logos image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative w-full overflow-hidden border border-[#222222] bg-[#ffffff]"
        >
          <Image
            src="/images/venue-logos.png"
            alt="Performed at: BCKSTG, Sunset Ritual, Lotus Club, The Club Agadir, and many more"
            width={1600}
            height={400}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Venue cards grid */}
        <div className="grid gap-px bg-[#222222] md:grid-cols-2 lg:grid-cols-4">
          {VENUES.map((venue, i) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className={`flex flex-col gap-3 p-8 ${
                venue.highlight ? "bg-[#ff0000]/10" : "bg-[#0a0a0a]"
              } hover:bg-[#111111] transition-colors duration-300`}
            >
              <h3 className="font-sans text-lg font-bold uppercase tracking-wide text-[#ffffff]">
                {venue.name}
              </h3>
              <p className="font-mono text-xs text-[#888888]">
                {venue.subtitle}
              </p>
              {venue.label && (
                <span
                  className={`inline-block self-start px-3 py-1 text-xs font-mono uppercase tracking-[0.15em] ${
                    venue.highlight
                      ? "bg-[#ff0000] text-[#ffffff]"
                      : "border border-[#444444] text-[#888888]"
                  }`}
                >
                  {venue.label}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* "And many more" */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8 font-mono text-sm uppercase tracking-[0.3em] text-[#888888]"
        >
          And many more
        </motion.p>
      </div>
    </section>
  );
}
