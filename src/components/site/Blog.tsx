import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Properties";
import yas from "@/assets/property-yas.jpg";
import saad from "@/assets/property-saadiyat.jpg";
import reem from "@/assets/property-reem.jpg";

const posts = [
  { img: yas, tag: "Investment", title: "Why Abu Dhabi is the smart property bet for 2026", date: "May 2, 2026" },
  { img: saad, tag: "Market Trends", title: "Saadiyat Island: the new gold standard of UAE luxury", date: "Apr 21, 2026" },
  { img: reem, tag: "Buying Guide", title: "A complete guide to buying property in the UAE", date: "Apr 8, 2026" },
];

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="From the Journal" title="Insights & market intelligence" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <a key={p.title} href="#" className="group block overflow-hidden rounded-3xl border bg-white transition hover:shadow-luxury">
              <div className="relative h-56 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-navy">{p.tag}</span>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.date}</div>
                <h3 className="mt-2 font-display text-xl font-bold text-navy group-hover:text-gold">{p.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  Read article <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
