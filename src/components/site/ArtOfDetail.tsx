import { motion } from "framer-motion";
import detail from "@/assets/art-of-detail.jpg";

export function ArtOfDetail() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 pb-16 pt-0 sm:pb-24">
      {/* Arched white panel overlapping previous section */}
      <div className="relative -mt-10 overflow-hidden rounded-t-[40%_50px] bg-white pt-10 sm:-mt-20 sm:rounded-t-[50%_120px] sm:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 md:grid-cols-2 lg:gap-12 lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="h-1 w-1 rounded-full bg-gold" /> Pure Home
            </span>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-navy sm:text-4xl lg:text-6xl">
              The Art <em className="italic text-gold">of Detail</em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground sm:text-base md:mx-0">
              At Pure Home, we understand that true excellence lies in the meticulous attention to every detail and the artistry of craftsmanship. We believe a home is not just a structure — it's a sanctuary where every nuance is thoughtfully considered.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="#properties"
                className="inline-flex items-center justify-center rounded-full border border-navy px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy transition hover:bg-navy hover:text-white sm:text-xs"
              >
                Discover More
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-gold transition hover:scale-105 sm:text-xs"
              >
                Enquire Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md md:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[120px] shadow-luxury sm:rounded-t-[200px]">
              <img
                src={detail}
                alt="Luxury Pure Home interior detail in Abu Dhabi"
                className="h-full w-full object-cover"
                width={1024}
                height={1280}
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-full border border-gold/40 md:block lg:-bottom-6 lg:-left-6 lg:h-32 lg:w-32" />
            <div className="pointer-events-none absolute -top-4 -right-4 hidden h-20 w-20 rounded-full bg-gold/20 blur-2xl md:block lg:-top-6 lg:-right-6 lg:h-24 lg:w-24" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
