"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function Biography() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#000000]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff0000]">
            001
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight text-[#ffffff] mt-2">
            Biography
          </h2>
          <div className="w-16 h-0.5 bg-[#ff0000] mt-4" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex flex-col gap-6"
          >
            <Image
              src="/images/alpha-logo.png"
              alt="ALPHA Eye of Horus logo"
              width={80}
              height={80}
              className="w-20 h-20 object-contain mb-2"
            />
            <p className="text-lg md:text-xl leading-relaxed text-[#e0e0e0]">
              ALPHA discovered his passion for music at the age of 18, driven by an
              instinctive pull toward rhythm and sound. What started as bedroom
              beat-making quickly evolved into a deep obsession with the art of
              DJing -- entirely self-taught, fueled by curiosity and an
              uncompromising ear.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#e0e0e0]">
              Drawing inspiration from old-school sounds and underground electronic
              culture, ALPHA developed a signature style that bridges raw energy
              with refined taste. His sets are known for their hypnotic builds,
              unexpected transitions, and a relentless commitment to moving the
              crowd.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#e0e0e0]">
              From intimate underground sessions to headline residencies, ALPHA has
              carved out a reputation as one of the most exciting emerging names in
              the electronic scene. Every performance is a statement -- bold,
              unfiltered, and unapologetically ALPHA.
            </p>

            {/* Stats */}
            <div className="flex gap-12 mt-6 pt-6 border-t border-[#222222]">
              <div>
                <span className="text-3xl font-bold text-[#ff0000] font-mono">18</span>
                <p className="text-xs uppercase tracking-[0.2em] text-[#888888] mt-1">Started At</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-[#ff0000] font-mono">4+</span>
                <p className="text-xs uppercase tracking-[0.2em] text-[#888888] mt-1">Residencies</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-[#ff0000] font-mono">100+</span>
                <p className="text-xs uppercase tracking-[0.2em] text-[#888888] mt-1">Shows</p>
              </div>
            </div>
          </motion.div>

          {/* Image side with red tint */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/red-portrait.jpg"
                alt="ALPHA with headphones in red lighting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#ff0000]/10 mix-blend-multiply" />
            </div>
            {/* Offset border accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#ff0000]/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
