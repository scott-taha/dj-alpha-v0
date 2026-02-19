"use client";

import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/images/alpha-logo.png"
            alt="ALPHA Eye of Horus logo"
            width={280}
            height={280}
            className="w-48 h-48 md:w-72 md:h-72 object-contain"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-mono text-sm md:text-base uppercase tracking-[0.3em] text-[#888888]"
        >
          DJ / Producer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex gap-6"
        >
          <a
            href="#about"
            className="px-8 py-3 border border-[#ffffff] text-[#ffffff] font-mono text-sm uppercase tracking-[0.15em] hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-300"
          >
            Explore
          </a>
          <a
            href="#press"
            className="px-8 py-3 bg-[#ff0000] text-[#ffffff] font-mono text-sm uppercase tracking-[0.15em] hover:bg-[#cc0000] transition-all duration-300 pulse-red"
          >
            Press Kit
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
