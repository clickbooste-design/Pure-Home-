import { CalendarCheck, MessageCircle } from "lucide-react";
import hero from "@/assets/hero-skyline.jpg";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <img src={hero} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/70" />
      <div className="relative mx-auto max-w-5xl px-6 text-center text-white lg:px-10">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Ready to begin?</span>
        <h2 className="mt-4 font-display text-4xl font-bold lg:text-6xl">Looking for your dream home?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/80">
          Book a private consultation with one of our senior advisors and discover Abu Dhabi's finest opportunities.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold transition-transform hover:scale-105">
            <CalendarCheck className="h-4 w-4" /> Schedule Consultation
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
            <MessageCircle className="h-4 w-4" /> WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
