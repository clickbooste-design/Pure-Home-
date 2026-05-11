import { motion } from "framer-motion";
import { Building2, MapPin, Search, Wallet } from "lucide-react";
import hero from "@/assets/hero-skyline.jpg";

const tabs = ["Buy", "Rent", "Offplan"] as const;

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Abu Dhabi luxury skyline at sunset"
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/55 to-navy/90" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl animate-float" />

      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Abu Dhabi · Since 2011
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Find Your Dream Property in <span className="text-gradient-gold">Abu Dhabi</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
            Explore luxury apartments, villas, and investment opportunities across the UAE — curated by award-winning advisors.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#properties"
              className="rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold transition-transform hover:scale-105"
            >
              View Properties
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Contact an Agent
            </a>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass mt-12 rounded-3xl p-3 shadow-luxury"
        >
          <div className="flex flex-wrap gap-2 px-3 pt-2">
            {tabs.map((t, i) => (
              <button
                key={t}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  i === 0 ? "bg-navy text-white" : "text-navy hover:bg-secondary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2 rounded-2xl bg-white p-3 md:grid-cols-[1.2fr_1.2fr_1fr_auto]">
            <Field icon={<Building2 className="h-4 w-4" />} label="Property Type" placeholder="Apartment, Villa..." />
            <Field icon={<MapPin className="h-4 w-4" />} label="Location" placeholder="Yas Island, Saadiyat..." />
            <Field icon={<Wallet className="h-4 w-4" />} label="Budget" placeholder="AED 1M – 10M" />
            <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-semibold text-navy shadow-gold transition-transform hover:scale-[1.02]">
              <Search className="h-4 w-4" />
              Search
            </button>
          </div>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { v: "50,000+", l: "Properties" },
            { v: "15+", l: "Years Experience" },
            { v: "5,000+", l: "Happy Clients" },
          ].map((s) => (
            <div key={s.l} className="glass-dark rounded-2xl px-6 py-5">
              <div className="font-display text-3xl font-bold text-white">{s.v}</div>
              <div className="text-sm uppercase tracking-wider text-white/70">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ icon, label, placeholder }: { icon: React.ReactNode; label: string; placeholder: string }) {
  return (
    <label className="flex flex-col gap-1 rounded-xl px-4 py-2 hover:bg-secondary/60">
      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className="flex items-center gap-2 text-navy">
        {icon}
        <input
          placeholder={placeholder}
          className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground"
        />
      </span>
    </label>
  );
}
