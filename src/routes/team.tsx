import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { TeamGrid } from "@/components/site/TeamGrid";
import { CTAStrip } from "@/components/site/CTAStrip";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — KMS Law Chambers" },
      { name: "description", content: "Meet the partners and counsel at KMS Law Chambers — senior lawyers who lead and personally argue the matters they accept." },
      { property: "og:title", content: "Team — KMS Law Chambers" },
      { property: "og:description", content: "Meet the partners and counsel at KMS Law Chambers." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="The Chambers"
        title="Partners who argue the matters they lead."
        intro="Our team is small and senior by design. Every engagement is partner-led from first brief to final order."
      />
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <TeamGrid />
        </div>
      </section>
      <CTAStrip />
    </>
  ),
});
