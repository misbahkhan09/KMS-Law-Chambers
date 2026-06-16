import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { PracticeGrid } from "@/components/site/PracticeGrid";
import { CTAStrip } from "@/components/site/CTAStrip";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — KMS Law Chambers" },
      { name: "description", content: "Seven core practice areas spanning commercial, criminal, constitutional, family, and dispute resolution work." },
      { property: "og:title", content: "Practice Areas — KMS Law Chambers" },
      { property: "og:description", content: "Seven core practice areas spanning commercial, criminal, constitutional, family, and dispute resolution work." },
      { property: "og:url", content: "/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Practice"
        title={<>Counsel across the full spectrum of <span className="text-gold">Indian law.</span></>}
        intro="Each practice is led by a partner with deep courtroom experience. We accept only those engagements where we believe we can add material value."
      />
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <PracticeGrid />
        </div>
      </section>
      <CTAStrip />
    </>
  ),
});
