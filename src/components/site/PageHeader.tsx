import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="pt-40 pb-16 lg:pt-48 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <span className="eyebrow flex items-center gap-3">
            <span className="gold-rule" />
            {eyebrow}
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-primary sm:text-5xl lg:text-[64px]">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-[17px]">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
