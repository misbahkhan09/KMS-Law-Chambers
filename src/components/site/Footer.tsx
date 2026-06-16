import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { SITE, practiceAreas } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border border-primary-foreground/40 font-serif">
                K
              </span>
              <div className="leading-tight">
                <div className="font-serif text-lg">{SITE.shortName} Law Chambers</div>
                <div className="text-[10px] tracking-[0.22em] text-primary-foreground/60 uppercase">
                  Advocates & Counsel
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              A full-service law firm delivering comprehensive legal advice, strategic solutions, and cost-effective representation across India.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base text-primary-foreground">Practice</h3>
            <span className="mt-2 block h-px w-8 bg-gold" />
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
              {practiceAreas.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link to="/practice-areas" className="transition-colors hover:text-gold">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base text-primary-foreground">Firm</h3>
            <span className="mt-2 block h-px w-8 bg-gold" />
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="transition-colors hover:text-gold">About</Link></li>
              <li><Link to="/team" className="transition-colors hover:text-gold">Team</Link></li>
              <li><Link to="/matters" className="transition-colors hover:text-gold">Representative Matters</Link></li>
              <li><Link to="/expertise" className="transition-colors hover:text-gold">Expertise</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base text-primary-foreground">Contact</h3>
            <span className="mt-2 block h-px w-8 bg-gold" />
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" /><span>{SITE.address.line1}<br />{SITE.address.line2}</span></li>
              <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-gold" /><a href={`tel:${SITE.phoneHref}`} className="hover:text-gold">{SITE.phone}</a></li>
              <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-gold" /><a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={SITE.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center border border-primary-foreground/30 text-primary-foreground/70 transition-colors hover:border-gold hover:text-gold">
                <Linkedin size={16} />
              </a>
              <a href={SITE.social.twitter} aria-label="Twitter" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center border border-primary-foreground/30 text-primary-foreground/70 transition-colors hover:border-gold hover:text-gold">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="max-w-xl text-[11px] leading-relaxed">
            The content of this website is for informational purposes only and does not constitute legal advice or solicitation. Past results do not guarantee similar outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}
