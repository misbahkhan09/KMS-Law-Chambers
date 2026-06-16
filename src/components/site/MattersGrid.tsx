import { matters } from "@/lib/site";
import { Stagger, StaggerItem } from "./Reveal";

export function MattersGrid() {
  return (
    <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {matters.map((m) => (
        <StaggerItem key={m.title}>
          <article className="group flex h-full flex-col border border-border bg-background p-8 transition-colors hover:border-gold lg:p-10">
            <span className="inline-flex w-fit items-center gap-2 border border-border px-3 py-1 text-[10px] tracking-[0.2em] text-muted-foreground uppercase transition-colors group-hover:border-gold group-hover:text-gold">
              {m.tag}
            </span>
            <h3 className="mt-6 font-serif text-xl leading-snug text-primary lg:text-[22px]">{m.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            <p className="mt-8 border-t border-border pt-4 text-[10px] tracking-[0.18em] text-muted-foreground/70 uppercase">
              Confidential — details anonymised
            </p>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
