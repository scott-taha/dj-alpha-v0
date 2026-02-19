"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Monitor } from "lucide-react";

const EQUIPMENT = [
  "2x Pioneer CDJ-3000",
  "1x Pioneer DJM-V10",
  "1x Pioneer DJM-A9",
  "1x Pioneer DJM-900NXS2",
  "Professional Monitor System",
  "Booth Monitor (min. 2x JBL PRX or equivalent)",
];

export default function TechnicalRider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rider" className="py-24 md:py-32 bg-[#000000]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff0000]">
            004
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight text-[#ffffff] mt-2">
            Technical Rider
          </h2>
          <div className="w-16 h-0.5 bg-[#ff0000] mt-4" />
        </motion.div>

        <div className="max-w-xl">
          {/* Equipment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-[#222222] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#ff0000] flex items-center justify-center">
                <Monitor size={18} className="text-[#ff0000]" />
              </div>
              <h3 className="font-sans text-lg font-bold uppercase text-[#ffffff]">
                Equipment
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {EQUIPMENT.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#e0e0e0]"
                >
                  <span className="w-1.5 h-1.5 bg-[#ff0000] mt-1.5 shrink-0" />
                  <span className="font-mono">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
