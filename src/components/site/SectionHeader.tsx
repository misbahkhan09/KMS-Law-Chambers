import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span className="eyebrow flex items-center gap-3">
        <span className="gold-rule" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-serif text-3xl leading-[1.1] text-primary sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-[17px]">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
