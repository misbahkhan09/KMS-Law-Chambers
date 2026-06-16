import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { MattersGrid } from "@/components/site/MattersGrid";
import { CTAStrip } from "@/components/site/CTAStrip";

export const Route = createFileRoute("/matters")({
  head: () => ({
    meta: [
      { title: "Representative Matters — KMS Law Chambers" },
      { name: "description", content: "A discreet, anonymised selection of recent matters illustrating the chambers' practice and reach." },
      { property: "og:title", content: "Representative Matters — KMS Law Chambers" },
      { property: "og:description", content: "Anonymised case studies illustrating the chambers' practice." },
      { property: "og:url", content: "/matters" },
    ],
    links: [{ rel: "canonical", href: "/matters" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Representative Matters"
        title="A discreet selection of recent work."
        intro="Client identities and confidential particulars have been omitted. The matters below are illustrative of our practice and reach."
      />
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <MattersGrid />
        </div>
      </section>
      <CTAStrip />
    </>
  ),
});
