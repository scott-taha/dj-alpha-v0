"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/images/bw-crowd.jpg",
    alt: "ALPHA performing with fists raised facing the crowd",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/dj-booth-warm.jpg",
    alt: "ALPHA mixing at the decks in warm club lighting",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/dj-crowd-red.jpg",
    alt: "ALPHA performing to a packed crowd under red lights",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/images/club-candid.jpg",
    alt: "ALPHA candid shot at a nightclub",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/spotlight-portrait.jpg",
    alt: "ALPHA portrait with spotlight",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/red-portrait.jpg",
    alt: "ALPHA close-up with headphones in red light",
    aspect: "aspect-[3/4]",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#000000]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff0000]">
            002
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight text-[#ffffff] mt-2">
            Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#ff0000] mt-4" />
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {GALLERY_IMAGES.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className={`relative ${image.aspect} overflow-hidden`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#ff0000]/0 group-hover:bg-[#ff0000]/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
