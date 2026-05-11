import { useEffect, useState } from "react";
import { Mail, Menu, Phone, Heart, User, ChevronDown, MapPin, X } from "lucide-react";
import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Locations", href: "#locations" },
  { label: "Offplan", href: "#offplan" },
  { label: "About", href: "#why" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + 120;
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el instanceof HTMLElement && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(l.href);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Utility top bar (desktop/tablet only) */}
      <div
        className={`hidden overflow-hidden border-b border-white/10 bg-navy text-white/80 transition-all duration-500 md:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden items-center gap-1.5 lg:inline-flex">
              <MapPin className="h-3 w-3 text-gold" /> Al Maryah Island, Abu Dhabi
            </span>
            <a href="tel:+97120000000" className="inline-flex items-center gap-1.5 hover:text-gold">
              <Phone className="h-3 w-3 text-gold" /> +971 2 000 0000
            </a>
            <a href="mailto:hello@purehome.ae" className="hidden items-center gap-1.5 hover:text-gold lg:inline-flex">
              <Mail className="h-3 w-3 text-gold" /> hello@purehome.ae
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="hidden items-center gap-1 hover:text-gold md:inline-flex">
              EN <ChevronDown className="h-3 w-3" />
            </button>
            <a href="#" className="inline-flex items-center gap-1.5 hover:text-gold">
              <Heart className="h-3 w-3" /> Saved
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 hover:text-gold">
              <User className="h-3 w-3" /> Login
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-500 ${
          scrolled || open ? "glass shadow-soft" : "bg-gradient-to-b from-navy/40 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src={scrolled || open ? logo : logoWhite}
              alt="Pure Home Real Estate"
              className="h-9 w-auto transition-opacity duration-300 sm:h-11 lg:h-12"
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled ? "text-navy" : "text-white"
                  } hover:text-gold`}
                >
                  {l.label}
                  <span
                    className={`pointer-events-none absolute left-1/2 -bottom-0.5 h-0.5 -translate-x-1/2 rounded-full bg-gradient-gold transition-all duration-300 ${
                      isActive ? "w-6 opacity-100" : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+97120000000"
              className="hidden items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition hover:scale-[1.04] hover:shadow-luxury md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              List Property
            </a>
            <button
              onClick={() => setOpen(!open)}
              className={`relative rounded-full p-2.5 transition lg:hidden ${
                scrolled || open ? "bg-navy/5 text-navy" : "bg-white/15 text-white backdrop-blur"
              }`}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — full-screen drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] sm:top-[72px] bottom-0 z-40 overflow-y-auto bg-white transition-[opacity,transform] duration-300 ease-out ${
          open ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-5 sm:px-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 50}ms` }}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-navy transition active:scale-[0.98] hover:bg-gradient-gold ${
                active === l.href ? "bg-navy/5" : ""
              } ${open ? "animate-fade-in" : ""}`}
            >
              <span>{l.label}</span>
              <span className="text-gold">→</span>
            </a>
          ))}

          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy/10 px-4 py-3 text-sm font-medium text-navy"
            >
              <Heart className="h-4 w-4 text-gold" /> Saved
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy/10 px-4 py-3 text-sm font-medium text-navy"
            >
              <User className="h-4 w-4 text-gold" /> Login
            </a>
          </div>

          <a
            href="tel:+97120000000"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3.5 text-sm font-semibold text-navy shadow-gold"
          >
            <Phone className="h-4 w-4" /> +971 2 000 0000
          </a>

          <div className="mt-4 space-y-2 rounded-xl bg-navy/5 p-4 text-xs text-navy/70">
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold" /> Al Maryah Island, Abu Dhabi
            </p>
            <p className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-gold" /> hello@purehome.ae
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
