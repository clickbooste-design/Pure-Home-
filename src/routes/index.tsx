import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ArtOfDetail } from "@/components/site/ArtOfDetail";
import { Trust } from "@/components/site/Trust";
import { Properties } from "@/components/site/Properties";
import { PropertyTypes } from "@/components/site/PropertyTypes";
import { Locations } from "@/components/site/Locations";
import { WhyUs } from "@/components/site/WhyUs";
import { Stats } from "@/components/site/Stats";
import { Mortgage } from "@/components/site/Mortgage";
import { Testimonials } from "@/components/site/Testimonials";
import { Offplan } from "@/components/site/Offplan";
import { Blog } from "@/components/site/Blog";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pure Home Real Estate | Luxury Property in Abu Dhabi, UAE" },
      { name: "description", content: "Discover luxury apartments, villas and offplan investments in Abu Dhabi with Pure Home Real Estate — RERA-approved experts since 2011." },
      { property: "og:title", content: "Pure Home Real Estate — Luxury Property in Abu Dhabi" },
      { property: "og:description", content: "Find your dream property in Abu Dhabi. Curated listings across Yas Island, Saadiyat, Al Reem and more." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ArtOfDetail />
      <Trust />
      <Properties />
      <PropertyTypes />
      <Locations />
      <WhyUs />
      <Stats />
      <Mortgage />
      <Testimonials />
      <Offplan />
      <Blog />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
