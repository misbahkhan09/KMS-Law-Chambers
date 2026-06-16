import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { WhyKMS } from "@/components/site/WhyKMS";
import { CTAStrip } from "@/components/site/CTAStrip";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KMS Law Chambers" },
      { name: "description", content: "A chambers practice built on trust, integrity, and client-centric solutions, led by co-founding partners who manage and appear in their own matters." },
      { property: "og:title", content: "About — KMS Law Chambers" },
      { property: "og:description", content: "A chambers practice built on trust, integrity, and client-centric solutions." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="The Firm"
        title="Comprehensive legal advice and strategic solutions."
        intro="KMS Law Chambers is a full-service law firm based in Delhi. Consisting of a team of experienced lawyers, we are focused on delivering personalized professional services, clear communication, and cost-effective representation."
      />
      <WhyKMS />
      <CTAStrip />
    </>
  ),
});
