import { useEffect, useRef, useState } from "react";

const stats = [
  { v: 50000, suffix: "+", l: "Properties Listed" },
  { v: 5, prefix: "AED ", suffix: "B+", l: "in Transactions" },
  { v: 10000, suffix: "+", l: "Clients Served" },
  { v: 98, suffix: "%", l: "Client Satisfaction" },
];

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const dur = 1800;
            const tick = (now: number) => {
              const p = Math.min((now - start) / dur, 1);
              setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-gradient-navy py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-4xl font-bold text-gradient-gold lg:text-6xl">
              <Counter to={s.v} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm uppercase tracking-wider text-white/70">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
