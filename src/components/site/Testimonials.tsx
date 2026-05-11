import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./Properties";

const reviews = [
  { name: "Ahmed Al Mansouri", role: "Investor, Abu Dhabi", text: "Pure Home made my Saadiyat purchase effortless. Their team negotiated brilliantly and the after-sales service was world-class.", initials: "AM" },
  { name: "Sarah Mitchell", role: "Family Buyer, UK", text: "Relocating from London was daunting until we met Pure Home. They understood exactly what our family needed in Yas Island.", initials: "SM" },
  { name: "Rajiv Khanna", role: "Portfolio Investor, India", text: "I've worked with many UAE agencies. None match Pure Home's market intelligence and transparency. Highly recommended.", initials: "RK" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeader eyebrow="Testimonials" title="What our clients say" />

        <div className="relative mt-12 rounded-3xl bg-gradient-navy p-10 text-white shadow-luxury lg:p-16">
          <div className="flex justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, n) => <Star key={n} className="h-5 w-5 fill-current" />)}
          </div>
          <p className="mt-8 text-center font-display text-xl leading-relaxed lg:text-2xl">
            "{r.text}"
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold font-display font-bold text-navy">
              {r.initials}
            </span>
            <div className="text-center">
              <div className="font-semibold">{r.name}</div>
              <div className="text-xs text-white/70">{r.role}</div>
            </div>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              <span className="font-bold text-gold">G</span> Verified Google Review
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-3">
            <button onClick={() => setI((i - 1 + reviews.length) % reviews.length)} className="rounded-full border border-white/20 p-3 hover:bg-white/10">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => setI((i + 1) % reviews.length)} className="rounded-full border border-white/20 p-3 hover:bg-white/10">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
