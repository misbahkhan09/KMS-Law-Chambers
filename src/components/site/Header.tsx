import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/expertise", label: "Expertise" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/matters", label: "Matters" },
  // { to: "/presence", label: "Presence" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isDarkHeader = isHomePage && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-3" aria-label={SITE.name}>
          <span className={cn(
            "grid h-9 w-9 shrink-0 place-items-center border transition-colors",
            isDarkHeader ? "border-white/50 text-white" : "border-primary text-primary"
          )}>
            <span className="font-serif text-[15px] leading-none">K</span>
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className={cn(
              "font-serif text-base transition-colors",
              isDarkHeader ? "text-white" : "text-primary"
            )}>
              {SITE.shortName} Law Chambers
            </span>
            <span className={cn(
              "text-[10px] tracking-[0.22em] uppercase transition-colors",
              isDarkHeader ? "text-white/60" : "text-muted-foreground"
            )}>
              Advocates & Counsel
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "group relative text-[13px] tracking-wide transition-colors",
                isDarkHeader ? "text-white/80 hover:text-gold" : "text-foreground/80 hover:text-primary"
              )}
              activeProps={{ className: isDarkHeader ? "text-gold" : "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full group-[.text-primary]:w-full group-[.text-gold]:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={cn(
              "hidden h-10 items-center px-5 text-[11px] tracking-[0.18em] uppercase transition-colors lg:inline-flex font-medium",
              isDarkHeader
                ? "bg-gold text-black hover:bg-gold/90 border border-gold"
                : "border border-primary bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Schedule Consultation
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "grid h-11 w-11 place-items-center transition-colors lg:hidden",
              isDarkHeader ? "text-white" : "text-primary"
            )}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "lg:hidden",
          "grid overflow-hidden transition-[grid-template-rows] duration-500",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 border-t border-border/60 bg-background px-6 py-6" aria-label="Mobile">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-4 font-serif text-xl text-primary"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
