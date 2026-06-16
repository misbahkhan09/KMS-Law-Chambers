import { expertise } from "@/lib/site";
import { Stagger, StaggerItem } from "./Reveal";

export function ExpertiseCards() {
  return (
    <Stagger className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
      {expertise.map((e, i) => (
        <StaggerItem key={e.title} className="bg-background">
          <article className="group relative h-full bg-background p-8 transition-colors hover:bg-card lg:p-10">
            <div className="flex items-baseline justify-between">
              <span className="font-serif text-xs tracking-[0.2em] text-gold uppercase">
                {String(i + 1).padStart(2, "0")} —
              </span>
              <span className="h-px w-12 bg-border transition-all duration-500 group-hover:w-20 group-hover:bg-gold" />
            </div>
            <h3 className="mt-8 font-serif text-2xl text-primary lg:text-[26px]">{e.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
