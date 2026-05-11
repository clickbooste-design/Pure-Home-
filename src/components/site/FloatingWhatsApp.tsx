import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/97120000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[oklch(0.65_0.18_145)] px-5 py-3.5 font-semibold text-white shadow-luxury transition-transform hover:scale-105"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[oklch(0.65_0.18_145)] opacity-30" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
