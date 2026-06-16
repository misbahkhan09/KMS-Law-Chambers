import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { practiceAreas } from "@/lib/site";
import { Stagger, StaggerItem } from "./Reveal";

export function PracticeGrid() {
  return (
    <Stagger className="grid gap-px border border-border bg-border lg:grid-cols-3">
      {practiceAreas.map((p, i) => (
        <StaggerItem key={p.slug} className="bg-background">
          <Link
            to="/practice-areas"
            className="group relative flex h-full flex-col justify-between gap-10 bg-background p-8 transition-colors hover:bg-card lg:p-10"
          >
            <div>
              <span className="font-serif text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-primary">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p.blurb}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-primary uppercase">
              
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
