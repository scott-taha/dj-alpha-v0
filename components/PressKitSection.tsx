"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Download } from "lucide-react";
import Image from "next/image";

export default function PressKitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="press" className="py-24 md:py-32 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff0000]">
            005
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight text-[#ffffff] mt-2">
            Press Kit
          </h2>
          <div className="w-16 h-0.5 bg-[#ff0000] mt-4" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Press photo + download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex flex-col gap-8"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/press-portrait.png"
                alt="ALPHA profile portrait with red atmospheric lighting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Big Download EPK button */}
            <a
              href="https://www.dropbox.com/scl/fo/40o36ouc4f0gi6v9rbjf6/AFMG9g0kvTI6AhA0cADjpus/ALPHA_PRESS%20KIT%20.pdf?rlkey=j10d7108b90nrohanir3swt8y&st=wpmhm9fw&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-[#ff0000] text-[#ffffff] font-mono text-base uppercase tracking-[0.2em] hover:bg-[#cc0000] transition-all duration-300 pulse-red"
            >
              <Download size={20} />
              Download Full EPK
            </a>
          </motion.div>

          {/* Right: Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 flex flex-col gap-6"
          >
            {/* Quick bio */}
            <div className="border border-[#222222] p-8">
              <h3 className="font-sans text-lg font-bold uppercase text-[#ffffff] mb-4">
                Quick Facts
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between border-b border-[#222222] pb-3">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#888888]">
                    Artist Name
                  </span>
                  <span className="font-mono text-sm text-[#ffffff]">ALPHA</span>
                </div>
                <div className="flex justify-between border-b border-[#222222] pb-3">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#888888]">
                    Genre
                  </span>
                  <span className="font-mono text-sm text-[#ffffff]">
                    Electronic / DJ
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#222222] pb-3">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#888888]">
                    Current Residency
                  </span>
                  <span className="font-mono text-sm text-[#ff0000]">
                    The Club Agadir
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#222222] pb-3">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#888888]">
                    Booking
                  </span>
                  <span className="font-mono text-sm text-[#ffffff]">
                    Available
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#888888]">
                    Based In
                  </span>
                  <span className="font-mono text-sm text-[#ffffff]">
                    Morocco
                  </span>
                </div>
              </div>
            </div>

            {/* Available downloads */}
            <div className="border border-[#222222] p-8">
              <h3 className="font-sans text-lg font-bold uppercase text-[#ffffff] mb-4">
                Available Downloads
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  "Artist Biography (PDF)",
                  "High-Res Press Photos (ZIP)",
                  "Technical Rider (PDF)",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex items-center justify-between py-3 border-b border-[#222222] group"
                  >
                    <span className="font-mono text-sm text-[#e0e0e0] group-hover:text-[#ffffff] transition-colors">
                      {item}
                    </span>
                    <Download
                      size={14}
                      className="text-[#888888] group-hover:text-[#ff0000] transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
