import { Link } from "@tanstack/react-router";
import { Scale, Facebook, Youtube, Phone, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep border-t border-border mt-24">
      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-gold shadow-gold">
              <Scale className="h-5 w-5 text-primary-foreground" />
            </span>
            <div>
              <p className="font-display text-xl">Ibrahim Law School</p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold">Bar Council Excellence</p>
            </div>
          </div>
          <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
            Bangladesh's premium platform for Bar Council Preliminary, Written and Viva-Voce
            preparation — guided by Advocate Md. Ibrahim Khan.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://wa.me/8801823181010" className="glass-gold p-3 rounded-md hover:scale-110 transition-transform" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4 text-gold" />
            </a>
            <a href="#" className="glass-gold p-3 rounded-md hover:scale-110 transition-transform" aria-label="Facebook">
              <Facebook className="h-4 w-4 text-gold" />
            </a>
            <a href="#" className="glass-gold p-3 rounded-md hover:scale-110 transition-transform" aria-label="YouTube">
              <Youtube className="h-4 w-4 text-gold" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Programs</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/courses" className="hover:text-gold">Bar Council Preliminary</Link></li>
            <li><Link to="/courses" className="hover:text-gold">Written Preparation</Link></li>
            <li><Link to="/courses" className="hover:text-gold">Viva-Voce Preparation</Link></li>
            <li><Link to="/fighter-batch" className="hover:text-gold">Fighter Batch 2026</Link></li>
            <li><Link to="/orientation" className="hover:text-gold">Free Orientation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Contact</h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> 01823 181010</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> 01347 320492</li>
            <li>Dhaka, Bangladesh</li>
            <li><Link to="/contact" className="text-gold hover:underline">Get in touch →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ibrahim Law School. All rights reserved.</p>
          <p>Crafted for Bangladesh's future advocates.</p>
        </div>
      </div>
    </footer>
  );
}
