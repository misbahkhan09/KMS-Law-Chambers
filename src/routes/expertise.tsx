import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ExpertiseCards } from "@/components/site/ExpertiseCards";
import { CTAStrip } from "@/components/site/CTAStrip";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise — KMS Law Chambers" },
      { name: "description", content: "Highlights from the chambers' practice in white-collar defence, international law, corporate advisory, property, arbitration, and succession." },
      { property: "og:title", content: "Expertise — KMS Law Chambers" },
      { property: "og:description", content: "Highlights from the chambers' practice across high-stakes commercial and personal matters." },
      { property: "og:url", content: "/expertise" },
    ],
    links: [{ rel: "canonical", href: "/expertise" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Expertise"
        title="Where our advocacy is most concentrated."
        intro="High-stakes matters where the result reshapes a business, a family, or a legal precedent."
      />
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ExpertiseCards />
        </div>
      </section>
      <CTAStrip />
    </>
  ),
});
