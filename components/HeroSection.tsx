"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-crouch.jpg"
          alt="ALPHA crouching portrait"
          fill
          className="object-cover object-top grayscale"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold uppercase tracking-tight text-[#ffffff]"
        >
          ALPHA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-6"
        >
          <a
            href="#about"
            className="px-8 py-3 border border-[#ffffff] text-[#ffffff] font-mono text-sm uppercase tracking-[0.15em] hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-300"
          >
            Explore
          </a>
          <a
            href="#book"
            className="px-8 py-3 bg-[#ff0000] text-[#ffffff] font-mono text-sm uppercase tracking-[0.15em] hover:bg-[#cc0000] transition-all duration-300 pulse-red"
          >
            Book
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-[#888888] flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-[#888888]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
