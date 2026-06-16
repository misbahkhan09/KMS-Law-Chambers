import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTAStrip() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="text-[11px] tracking-[0.2em] text-gold uppercase">Engage the chambers</span>
            <h2 className="mt-5 font-serif text-3xl leading-[1.1] sm:text-4xl lg:text-[48px]">
              When the outcome matters, the counsel should too.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center gap-3 border border-gold px-6 text-[12px] tracking-[0.2em] text-gold uppercase transition-colors hover:bg-gold hover:text-primary"
            >
              Schedule a consultation
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
