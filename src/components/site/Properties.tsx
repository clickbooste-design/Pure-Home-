import { Bath, Bed, Heart, MapPin, Maximize, MessageCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import yas from "@/assets/property-yas.jpg";
import saad from "@/assets/property-saadiyat.jpg";
import reem from "@/assets/property-reem.jpg";
import marina from "@/assets/property-marina.jpg";
import pinnacle from "@/assets/property-pinnacle.jpg";
import creek from "@/assets/property-creek.jpg";

const list = [
  { img: yas, tag: "Featured", title: "Yas Bay Sky Residence", loc: "Yas Island, Abu Dhabi", price: "AED 2,450,000", b: 2, ba: 2, sq: 1450 },
  { img: saad, tag: "New Launch", title: "Saadiyat Cultural Loft", loc: "Saadiyat Island", price: "AED 8,900,000", b: 4, ba: 5, sq: 4200 },
  { img: reem, tag: "Hot Deal", title: "Al Reem Sky Residence", loc: "Al Reem Island", price: "AED 3,150,000", b: 3, ba: 3, sq: 1980 },
  { img: marina, tag: "Waterfront", title: "Marina Twin Towers", loc: "The Marina, Abu Dhabi", price: "AED 4,200,000", b: 3, ba: 4, sq: 2300 },
  { img: pinnacle, tag: "Penthouse", title: "The Pinnacle Penthouse", loc: "Al Maryah Island", price: "AED 12,500,000", b: 5, ba: 6, sq: 5800 },
  { img: creek, tag: "Investment", title: "Creek Harbour Towers", loc: "Khalifa City", price: "AED 1,950,000", b: 2, ba: 3, sq: 1620 },
];

export function Properties() {
  return (
    <section id="properties" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Featured Listings"
          title="Handpicked Luxury Properties"
          sub="Curated apartments, lofts and villas across Abu Dhabi's most prestigious addresses."
        />

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-luxury"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-60 transition group-hover:opacity-90" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy shadow-gold">
                  <Star className="h-3 w-3 fill-navy" /> {p.tag}
                </span>
                <button className="absolute right-4 top-4 rounded-full bg-white/95 p-2 text-navy backdrop-blur transition hover:scale-110 hover:text-destructive">
                  <Heart className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-white/90">
                    <MapPin className="h-3.5 w-3.5 text-gold" /> {p.loc}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-2xl font-bold text-navy">{p.price}</div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">For Sale</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {p.loc}
                </p>
                <div className="mt-5 flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-gold" />{p.b} Beds</span>
                  <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold" />{p.ba} Baths</span>
                  <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-gold" />{p.sq} sqft</span>
                </div>
                <a
                  href="#"
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-navy py-3 text-sm font-semibold text-white transition hover:bg-gradient-gold hover:text-navy"
                >
                  <MessageCircle className="h-4 w-4" />
                  Inquire on WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-8 py-3.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white hover:shadow-luxury"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, sub, light }: { eyebrow: string; title: string; sub?: string; light?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
        <span className="h-px w-8 bg-gold" />
        {eyebrow}
        <span className="h-px w-8 bg-gold" />
      </span>
      <h2 className={`mt-4 font-display text-3xl font-bold lg:text-5xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {sub && <p className={`mt-4 ${light ? "text-white/70" : "text-muted-foreground"}`}>{sub}</p>}
    </motion.div>
  );
}
