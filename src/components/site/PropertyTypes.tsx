import { Building, Home, Store, Briefcase, Castle, Hotel } from "lucide-react";
import { SectionHeader } from "./Properties";

const types = [
  { icon: Building, label: "Apartments", count: "12,400+" },
  { icon: Home, label: "Villas", count: "3,800+" },
  { icon: Castle, label: "Townhouses", count: "1,950+" },
  { icon: Briefcase, label: "Offices", count: "820+" },
  { icon: Store, label: "Commercial", count: "640+" },
  { icon: Hotel, label: "Penthouses", count: "210+" },
];

export function PropertyTypes() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Browse by Type" title="Find your perfect property" />
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {types.map(({ icon: Icon, label, count }) => (
            <a
              key={label}
              href="#"
              className="group flex flex-col items-center gap-3 rounded-3xl border bg-white p-6 text-center transition hover:-translate-y-1 hover:border-gold hover:shadow-gold"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-navy transition group-hover:bg-gradient-gold">
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <div className="font-semibold text-navy">{label}</div>
                <div className="text-xs text-muted-foreground">{count} listings</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
