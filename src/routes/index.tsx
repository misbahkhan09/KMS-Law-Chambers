import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PracticeGrid } from "@/components/site/PracticeGrid";
import { WhyKMS } from "@/components/site/WhyKMS";
import { ExpertiseCards } from "@/components/site/ExpertiseCards";
import { TeamGrid } from "@/components/site/TeamGrid";
import { MattersGrid } from "@/components/site/MattersGrid";
import { ContactSection } from "@/components/site/ContactSection";
import { CTAStrip } from "@/components/site/CTAStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — Strategic Legal Counsel` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Practice Areas"
              title={<>Counsel across the full spectrum of <span className="text-gold">Indian law.</span></>}
              intro="Seven core practices, each led by a partner with deep courtroom experience and an exacting standard for written advocacy."
            />
            <Link to="/practice-areas" className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-primary uppercase">
              View all <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-14">
            <PracticeGrid />
          </div>
        </div>
      </section>

      <WhyKMS />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Experience"
            title="Where our advocacy is most concentrated."
            intro="Highlights of the work that has defined the chambers — high-stakes matters where the result reshapes a business, a family, or a precedent."
          />
          <div className="mt-14">
            <ExpertiseCards />
          </div>
        </div>
      </section>

      <section className="bg-card/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="The Chambers"
              title="Partners who argue the matters they lead."
              intro="A small, deliberate team. Senior partners remain personally engaged from first brief to final order."
            />
            <Link to="/team" className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-primary uppercase">
              Meet the team <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-14">
            <TeamGrid />
          </div>
        </div>
      </section>

      <section className="bg-card/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Representative Matters"
            title="A discreet selection of recent work."
            intro="Client identities and confidential particulars have been omitted. The matters below are illustrative of our practice and reach."
          />
          <div className="mt-14">
            <MattersGrid />
          </div>
        </div>
      </section>

      <CTAStrip />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ContactSection />
        </div>
      </section>
    </>
  );
}
