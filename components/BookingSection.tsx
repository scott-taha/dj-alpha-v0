"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="book" className="py-24 md:py-32 bg-[#000000]" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff0000]">
            006
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight text-[#ffffff] mt-2">
            Book ALPHA
          </h2>
          <div className="w-16 h-0.5 bg-[#ff0000] mt-4" />
        </motion.div>

        {/* Centered logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="w-24 h-[5.4rem] md:w-28 md:h-[6.3rem] overflow-hidden">
            <Image
              src="/images/alpha-logo.png"
              alt="ALPHA Eye of Horus logo"
              width={120}
              height={120}
              className="w-24 h-24 md:w-28 md:h-28 object-contain object-top"
            />
          </div>
        </motion.div>

        {/* Booking form via formsubmit.co */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          action="https://formsubmit.co/Alphadj210@gmail.com"
          method="POST"
          className="flex flex-col gap-6"
        >
          {/* formsubmit.co config */}
          <input type="hidden" name="_subject" value="New Booking Inquiry - ALPHA DJ" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-[#0a0a0a] border border-[#222222] px-4 py-3 text-sm text-[#ffffff] font-mono placeholder:text-[#444444] focus:outline-none focus:border-[#ff0000] transition-colors duration-300"
              placeholder="Your full name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-[#0a0a0a] border border-[#222222] px-4 py-3 text-sm text-[#ffffff] font-mono placeholder:text-[#444444] focus:outline-none focus:border-[#ff0000] transition-colors duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            <div className="flex flex-col gap-2 flex-1">
              <label
                htmlFor="event-date"
                className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]"
              >
                Event Date
              </label>
              <input
                type="date"
                id="event-date"
                name="event_date"
                required
                className="w-full bg-[#0a0a0a] border border-[#222222] px-4 py-3 text-sm text-[#ffffff] font-mono focus:outline-none focus:border-[#ff0000] transition-colors duration-300 [color-scheme:dark]"
              />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label
                htmlFor="location"
                className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                className="w-full bg-[#0a0a0a] border border-[#222222] px-4 py-3 text-sm text-[#ffffff] font-mono placeholder:text-[#444444] focus:outline-none focus:border-[#ff0000] transition-colors duration-300"
                placeholder="City, Venue"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full bg-[#0a0a0a] border border-[#222222] px-4 py-3 text-sm text-[#ffffff] font-mono placeholder:text-[#444444] focus:outline-none focus:border-[#ff0000] transition-colors duration-300 resize-none"
              placeholder="Tell us about your event..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-[#ff0000] text-[#ffffff] font-mono text-sm uppercase tracking-[0.2em] hover:bg-[#cc0000] transition-all duration-300 pulse-red mt-2"
          >
            Send Booking Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}
