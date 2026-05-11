import { useMemo, useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";

export function Mortgage() {
  const [price, setPrice] = useState(2_500_000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(4.5);
  const [years, setYears] = useState(25);

  const monthly = useMemo(() => {
    const principal = price * (1 - down / 100);
    const r = rate / 100 / 12;
    const n = years * 12;
    if (r === 0) return principal / n;
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [price, down, rate, years]);

  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Mortgage Calculator</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy lg:text-5xl">
            Plan your investment in seconds.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estimate your monthly mortgage payment for any Abu Dhabi property. Then speak to our mortgage advisors for the best UAE bank rates.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-navy/90"
          >
            <MessageCircle className="h-4 w-4" />
            Speak to Mortgage Expert
          </a>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-luxury">
          <div className="flex items-center gap-3 border-b pb-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-gold text-navy">
              <Calculator className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-lg font-bold text-navy">Estimate</div>
              <div className="text-xs text-muted-foreground">Adjust the sliders</div>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <Slider label="Property Price" value={price} min={500_000} max={20_000_000} step={50_000} format={(v) => `AED ${v.toLocaleString()}`} onChange={setPrice} />
            <Slider label="Down Payment" value={down} min={10} max={50} step={1} format={(v) => `${v}%`} onChange={setDown} />
            <Slider label="Interest Rate" value={rate} min={1} max={9} step={0.1} format={(v) => `${v.toFixed(1)}%`} onChange={setRate} />
            <Slider label="Mortgage Years" value={years} min={5} max={30} step={1} format={(v) => `${v} yrs`} onChange={setYears} />
          </div>

          <div className="mt-7 rounded-2xl bg-gradient-navy p-6 text-white">
            <div className="text-xs uppercase tracking-widest text-white/70">Estimated Monthly Payment</div>
            <div className="mt-1 font-display text-4xl font-bold text-gradient-gold">
              AED {Math.round(monthly).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label, value, min, max, step, format, onChange,
}: { label: string; value: number; min: number; max: number; step: number; format: (v: number) => string; onChange: (v: number) => void }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span className="font-medium text-navy">{label}</span>
        <span className="font-semibold text-gold">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-[oklch(0.74_0.135_80)]"
      />
    </div>
  );
}
