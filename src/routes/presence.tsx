import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { IndiaMap } from "@/components/site/IndiaMap";
import { CTAStrip } from "@/components/site/CTAStrip";

export const Route = createFileRoute("/presence")({
  head: () => ({
    meta: [
      { title: "Geographic Presence — KMS Law Chambers" },
      { name: "description", content: "KMS Law Chambers appears across Delhi, Punjab, Haryana, Rajasthan, Uttar Pradesh, and Chandigarh." },
      { property: "og:title", content: "Geographic Presence — KMS Law Chambers" },
      { property: "og:description", content: "Six states. One standard of representation." },
      { property: "og:url", content: "/presence" },
    ],
    links: [{ rel: "canonical", href: "/presence" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Presence"
        title="Six states. One standard of representation."
        intro="Our partners and counsel appear before the Supreme Court of India and across High Courts, district courts, and tribunals in northern India."
      />
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <IndiaMap />
        </div>
      </section>
      <CTAStrip />
    </>
  ),
});
