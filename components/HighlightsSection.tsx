"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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

      
      </div>
    </section>
  );
}
