import { forums } from "@/lib/site";
import { Stagger, StaggerItem } from "./Reveal";

export function TrustBar() {
  return (
    <section aria-label="Forums we appear before" className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-3 lg:grid-cols-6">
          {forums.map((f) => (
            <StaggerItem key={f} className="flex items-center gap-3">
              <span className="h-px w-4 shrink-0 bg-gold" />
              <span className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                {f}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
