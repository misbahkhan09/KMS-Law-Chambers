import whyImg from "@/assets/why-kms.jpg";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { stats } from "@/lib/site";

const pillars = [
  {
    title: "Client-centric approach",
    text: "Every matter receives personalized attention. We focus on understanding your unique needs to deliver strategic, tailored legal solutions.",
  },
  {
    title: "Clear communication",
    text: "We believe in transparent, straightforward communication — keeping clients informed at every stage of their legal journey.",
  },
  {
    title: "Trust & integrity",
    text: "Built on a foundation of professional commitment, our practice upholds the highest standards of integrity and confidentiality.",
  },
];

export function WhyKMS() {
  return (
    <section id="why" className="bg-card/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="relative lg:col-span-5">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={whyImg}
                alt="Sandstone columns of a classical Indian courthouse"
                width={1080}
                height={1440}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-24 w-24 border border-gold lg:block" />
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow flex items-center gap-3">
                <span className="gold-rule" />
                Why KMS
              </span>
              <h2 className="mt-5 font-serif text-3xl leading-[1.1] text-primary sm:text-4xl lg:text-[44px]">
                Comprehensive counsel, innovative solutions.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-[17px]">
                KMS Law Chambers is a full-service law firm catering to individuals, organizations, and business establishments. Based in Delhi, our team of experienced lawyers is focused on delivering strategic legal solutions, personalized professional services, and cost-effective representation.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08} className="bg-background p-6">
                  <h3 className="font-serif text-lg text-primary">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-10 lg:grid-cols-4">
              {stats.map((s) => (
                <Reveal key={s.label}>
                  <div className="font-serif text-4xl text-primary lg:text-5xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                    {s.label}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
