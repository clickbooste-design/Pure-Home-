import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Pure Home" className="h-14 w-auto rounded-lg bg-white/10 p-1" />
              <div>
                <div className="font-display text-xl font-bold">Pure Home</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">Real Estate</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70">
              Abu Dhabi's trusted partner in luxury property investment, sales and leasing since 2011.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((I, i) => (
                <a key={i} href="#" className="rounded-full border border-white/15 p-2.5 text-white/80 transition hover:border-gold hover:bg-gold hover:text-navy">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" links={["Home", "Properties", "Offplan", "About", "Blog", "Contact"]} />
          <FooterCol title="Property Types" links={["Apartments", "Villas", "Townhouses", "Penthouses", "Offices", "Commercial"]} />

          <div>
            <h4 className="font-display text-lg font-bold text-gold">Stay Updated</h4>
            <p className="mt-3 text-sm text-white/70">Get exclusive listings and market insights weekly.</p>
            <form className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5">
              <input placeholder="Your email" className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/50" />
              <button className="bg-gradient-gold px-5 text-sm font-semibold text-navy">Subscribe</button>
            </form>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +971 2 000 0000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> info@purehome.ae</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Al Maryah Island, Abu Dhabi</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} Pure Home Real Estate. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display text-lg font-bold text-gold">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {links.map((l) => (
          <li key={l}><a href="#" className="hover:text-gold">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
