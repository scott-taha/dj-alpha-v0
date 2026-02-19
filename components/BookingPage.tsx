"use client";

import { useState } from "react";
import { ArrowLeft, Send, Mail, Phone, MapPin } from "lucide-react";

interface BookingPageProps {
  onBack: () => void;
}

export function BookingPage({ onBack }: BookingPageProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <span className="font-mono text-lg font-bold tracking-[0.3em] uppercase text-foreground">
            NOVA
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left: Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">
                Booking Inquiry
              </span>
              <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
                Let&#39;s Create Something Unforgettable
              </h1>
              <p className="font-sans leading-relaxed text-muted-foreground">
                For booking inquiries, festival appearances, private events, and
                brand collaborations, reach out through the form or contact
                details below.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-border pt-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span className="font-sans text-sm">booking@dj-nova.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span className="font-sans text-sm">+1 (555) 234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span className="font-sans text-sm">
                  Management: London, UK
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-border pt-8">
              <span className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                Typical Fee Range
              </span>
              <span className="font-mono text-2xl font-bold text-primary">
                $15,000 &mdash; $75,000
              </span>
              <span className="font-sans text-xs text-muted-foreground">
                Varies by event type, location, and duration.
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="border border-border bg-card p-8 md:p-12">
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center border border-primary text-primary">
                  <Send size={24} />
                </div>
                <h3 className="font-mono text-xl font-bold text-foreground">
                  Inquiry Sent
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  We&#39;ll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                      Event Date
                    </label>
                    <input
                      type="date"
                      className="border border-border bg-background px-4 py-3 font-sans text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                      Event Type
                    </label>
                    <select className="border border-border bg-background px-4 py-3 font-sans text-sm text-foreground focus:border-primary focus:outline-none">
                      <option value="">Select...</option>
                      <option value="festival">Festival</option>
                      <option value="club">Club Night</option>
                      <option value="private">Private Event</option>
                      <option value="brand">Brand Event</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="resize-none border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="Tell us about your event..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 border border-primary bg-primary px-8 py-3 font-mono text-xs tracking-[0.3em] uppercase text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
                >
                  <Send size={14} />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
