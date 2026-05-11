import { motion } from "framer-motion";
import { SectionHeader } from "./Properties";
import craft from "@/assets/feature-craftsmanship.jpg";
import quality from "@/assets/feature-quality.jpg";
import design from "@/assets/feature-design.jpg";
import { Award, ShieldCheck, TrendingUp } from "lucide-react";

const items = [
  { img: design, icon: Award, title: "Architectural Design", text: "Bespoke residences crafted with global architects and timeless detailing." },
  { img: quality, icon: ShieldCheck, title: "Signature Quality", text: "Hand-selected materials and finishes that set a new benchmark in luxury." },
  { img: craft, icon: TrendingUp, title: "Investment Craftsmanship", text: "Properties engineered to appreciate — built for legacy, designed for ROI." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Why Pure Home" title="Crafted with conviction" sub="Three pillars that define every property we represent." />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {items.map(({ img, icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl shadow-soft transition hover:-translate-y-2 hover:shadow-luxury"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-gold text-navy shadow-gold">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <h3 className="font-display text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-white/80">{text}</p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-gold opacity-0 transition group-hover:opacity-100">
                  Discover →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
