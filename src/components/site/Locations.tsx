import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./Properties";
import yas from "@/assets/property-yas.jpg";
import saad from "@/assets/property-saadiyat.jpg";
import reem from "@/assets/property-reem.jpg";
import marina from "@/assets/property-marina.jpg";
import pinnacle from "@/assets/property-pinnacle.jpg";
import creek from "@/assets/property-creek.jpg";

const locations = [
  { img: yas, name: "Yas Island", count: 1240, price: "AED 1.8M", span: "lg:col-span-2 lg:row-span-2" },
  { img: saad, name: "Saadiyat Island", count: 890, price: "AED 4.2M" },
  { img: reem, name: "Al Reem Island", count: 1560, price: "AED 1.5M" },
  { img: pinnacle, name: "Al Maryah Island", count: 420, price: "AED 3.1M" },
  { img: marina, name: "The Marina", count: 680, price: "AED 2.4M" },
  { img: creek, name: "Khalifa City", count: 950, price: "AED 2.0M", span: "lg:col-span-2" },
];

export function Locations() {
  return (
    <section id="locations" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Top Locations" title="Abu Dhabi's most coveted addresses" />
        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {locations.map((l) => (
            <a
              key={l.name}
              href="#"
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${l.span ?? ""}`}
            >
              <img src={l.img} alt={l.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{l.name}</h3>
                    <p className="text-xs text-white/80">{l.count} properties · from {l.price}</p>
                  </div>
                  <span className="rounded-full bg-white/15 p-2 backdrop-blur transition group-hover:bg-gradient-gold group-hover:text-navy">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
