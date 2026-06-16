import { useState } from "react";
import { presence } from "@/lib/site";
import { Reveal } from "./Reveal";

// Approximate dot positions on a stylised India outline (viewBox 0 0 400 460)
const dots: Record<string, { x: number; y: number }> = {
  Delhi: { x: 168, y: 138 },
  Punjab: { x: 148, y: 110 },
  Haryana: { x: 162, y: 128 },
  Rajasthan: { x: 118, y: 165 },
  "Uttar Pradesh": { x: 205, y: 158 },
  Chandigarh: { x: 160, y: 116 },
};

// Stylised India outline path (decorative, not survey-accurate)
const INDIA_PATH =
  "M150 30 L175 32 L188 45 L205 50 L222 48 L240 60 L255 78 L262 95 L270 112 L290 130 L305 152 L312 175 L318 198 L322 222 L315 248 L300 268 L282 285 L262 300 L240 312 L222 322 L208 335 L198 350 L188 368 L178 388 L168 405 L155 420 L142 430 L128 432 L118 420 L112 402 L108 382 L102 360 L98 338 L92 318 L88 298 L80 280 L72 262 L65 244 L60 225 L58 205 L62 185 L70 168 L78 152 L85 138 L92 122 L98 105 L105 88 L115 72 L128 55 L140 40 Z";

export function IndiaMap() {
  const [hover, setHover] = useState<string | null>(presence[0].state);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-7">
        <div className="relative aspect-[4/4.6] w-full bg-card/50 p-6 sm:p-10">
          <svg viewBox="0 0 400 460" className="h-full w-full" role="img" aria-label="Map of India highlighting KMS Law Chambers presence">
            <path d={INDIA_PATH} fill="oklch(0.93 0.006 80)" stroke="oklch(0.205 0.03 264)" strokeWidth="1" strokeLinejoin="round" />
            {Object.entries(dots).map(([state, p]) => {
              const active = hover === state;
              return (
                <g key={state} onMouseEnter={() => setHover(state)} className="cursor-pointer">
                  <circle cx={p.x} cy={p.y} r={active ? 14 : 9} fill="var(--gold)" opacity={active ? 0.18 : 0.12} className="transition-all duration-300" />
                  <circle cx={p.x} cy={p.y} r={active ? 5 : 4} fill="var(--gold)" className="transition-all duration-300" />
                  <text x={p.x + 10} y={p.y + 4} fontSize="11" fill="var(--primary)" fontFamily="Inter, sans-serif" className="select-none">
                    {state}
                  </text>
                </g>
              );
            })}
          </svg>
          <div className="absolute top-4 left-4 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            Pan-North India
          </div>
        </div>
      </Reveal>

      <div className="lg:col-span-5">
        <Reveal>
          <ul className="divide-y divide-border border-y border-border">
            {presence.map((p) => {
              const active = hover === p.state;
              return (
                <li
                  key={p.state}
                  onMouseEnter={() => setHover(p.state)}
                  className="group cursor-pointer py-5 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className={`font-serif text-2xl transition-colors ${active ? "text-gold" : "text-primary"}`}>
                      {p.state}
                    </h3>
                    <span className={`h-px transition-all duration-300 ${active ? "w-16 bg-gold" : "w-8 bg-border"}`} />
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {p.note}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
