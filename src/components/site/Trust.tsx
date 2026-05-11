import { ShieldCheck, BadgeCheck, Award } from "lucide-react";

const developers = ["ALDAR", "EMAAR", "DAMAC", "BLOOM", "REPORTAGE", "IMKAN"];

export function Trust() {
  return (
    <section className="border-y bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">About Us</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy lg:text-4xl">
              Premium property solutions in Abu Dhabi since 2011.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pure Home Real Estate has helped thousands of investors and families find their place in the UAE — backed by certified expertise and an end-to-end advisory experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge icon={<ShieldCheck className="h-4 w-4" />} label="RERA Approved" />
              <Badge icon={<BadgeCheck className="h-4 w-4" />} label="Trusted Agency" />
              <Badge icon={<Award className="h-4 w-4" />} label="UAE Property Experts" />
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Trusted by leading developers
            </p>
            <div className="relative overflow-hidden rounded-2xl border bg-white py-6 reveal-mask">
              <div className="flex w-max animate-marquee gap-14 px-6">
                {[...developers, ...developers, ...developers].map((d, i) => (
                  <div
                    key={d + i}
                    className="font-display text-2xl font-bold tracking-[0.3em] text-navy/60 transition hover:text-gold"
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-navy">
      {icon}
      {label}
    </span>
  );
}
