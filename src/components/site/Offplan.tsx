import { Calendar, CreditCard, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Properties";
import yas from "@/assets/property-yas.jpg";
import saad from "@/assets/property-saadiyat.jpg";
import reem from "@/assets/property-reem.jpg";

const projects = [
  { img: yas, dev: "Aldar", name: "Yas Riva", price: "AED 1.6M", plan: "60/40", date: "Q4 2027" },
  { img: saad, dev: "Emaar", name: "Saadiyat Grove", price: "AED 3.2M", plan: "50/50", date: "Q2 2028" },
  { img: reem, dev: "Bloom", name: "Bloom Living", price: "AED 1.9M", plan: "70/30", date: "Q1 2027" },
];

export function Offplan() {
  return (
    <section id="offplan" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Offplan Projects" title="Tomorrow's most desirable addresses" sub="Exclusive launches with the UAE's leading developers." />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-luxury">
              <div className="relative h-64 overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">
                  {p.dev}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-navy">{p.name}</h3>
                <div className="mt-1 text-sm text-muted-foreground">Starting from <span className="font-semibold text-gold">{p.price}</span></div>

                <div className="mt-5 grid grid-cols-2 gap-3 border-y py-4 text-sm">
                  <div className="flex items-center gap-2 text-navy"><CreditCard className="h-4 w-4 text-gold" />{p.plan} plan</div>
                  <div className="flex items-center gap-2 text-navy"><Calendar className="h-4 w-4 text-gold" />{p.date}</div>
                </div>

                <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold">
                  Explore Project <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
