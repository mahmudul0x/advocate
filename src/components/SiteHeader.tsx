import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/founder", label: "Founder" },
  { to: "/courses", label: "Courses" },
  { to: "/recorded", label: "Recorded" },
  { to: "/notes", label: "Notes" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy-deep/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-md bg-gradient-gold shadow-gold">
            <Scale className="h-5 w-5 text-primary-foreground" strokeWidth={2.4} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-foreground">Ibrahim Law School</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-gold">Bar Council Excellence</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-gold transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/admission"
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-gradient-gold text-primary-foreground text-sm font-semibold shadow-gold hover:scale-105 transition-transform"
          >
            Admission
          </Link>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-deep/95 backdrop-blur-xl border-t border-border">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-gold py-1"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/admission"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-md bg-gradient-gold text-primary-foreground font-semibold"
            >
              Admission
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
