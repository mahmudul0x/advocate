import { MessageCircle, GraduationCap } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FloatingActions() {
  return (
    <>
      <a
        href="https://wa.me/8801823181010"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 text-white shadow-elegant hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden md:inline text-sm font-semibold">WhatsApp</span>
      </a>
      <Link
        to="/admission"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-gold text-primary-foreground shadow-gold hover:scale-105 transition-transform"
      >
        <GraduationCap className="h-5 w-5" />
        <span className="hidden md:inline text-sm font-semibold">Admission</span>
      </Link>
    </>
  );
}
