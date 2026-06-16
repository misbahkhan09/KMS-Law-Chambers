import { useState } from "react";
import { team } from "@/lib/site";
import misbah from "./misbah.jpeg";
import sana from "./sana.jpeg";
import { Stagger, StaggerItem } from "./Reveal";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const imageMap: Record<string, string> = { "team-1": misbah, "team-2": sana };

export function TeamGrid() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <Stagger className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2 lg:gap-16">
        {team.map((m, i) => {
          const src = imageMap[m.image];
          return (
            <StaggerItem key={m.name}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-card">
                  <img
                    src={src}
                    alt={`Portrait of ${m.name}`}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className="font-serif text-2xl text-primary">{m.name}</h3>
                  <p className="mt-1 text-[12px] tracking-[0.18em] text-gold uppercase">{m.designation}</p>
                  <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(i)}
                    className="mt-6 inline-flex w-fit items-center gap-2 self-start text-[11px] tracking-[0.2em] text-primary uppercase transition-colors hover:text-gold"
                  >
                    Read more
                    <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
                  </button>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent
          className="max-h-[88vh] max-w-3xl gap-0 overflow-y-auto border-border bg-background p-0 sm:rounded-none"
        >
          {openIdx !== null && (() => {
            const m = team[openIdx];
            const src = imageMap[m.image];
            return (
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2">
                  <img src={src} alt={`Portrait of ${m.name}`} className="h-full w-full object-cover" />
                </div>
                <div className="relative p-8 md:col-span-3 lg:p-10">
                  <DialogTitle className="font-serif text-3xl text-primary">{m.name}</DialogTitle>
                  <p className="mt-1 text-[12px] tracking-[0.18em] text-gold uppercase">{m.designation}</p>
                  <DialogDescription className="sr-only">Biography of {m.name}</DialogDescription>
                  <p className="mt-6 text-sm leading-relaxed text-foreground/80">{m.bio}</p>

                  {m.contact && (
                    <div className="mt-6">
                      <div className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">Contact</div>
                      <a href={`tel:${m.contact.replace(/\s/g, "")}`} className="mt-2 block text-sm text-foreground/80 hover:text-gold transition-colors">
                        {m.contact}
                      </a>
                    </div>
                  )}

                  <div className="mt-8">
                    <div className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">Education</div>
                    <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                      {m.education.map((e) => (
                        <li key={e} className="flex gap-3">
                          <span className="mt-2 h-px w-3 shrink-0 bg-gold" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <div className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">Experience & Credentials</div>
                    <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                      {m.experience.map((e) => (
                        <li key={e} className="flex gap-3">
                          <span className="mt-2 h-px w-3 shrink-0 bg-gold" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })()}
        </DialogContent>
      </Dialog>
    </>
  );
}
