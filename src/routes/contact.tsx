import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KMS Law Chambers" },
      { name: "description", content: "Request a confidential consultation with a partner at KMS Law Chambers. WhatsApp, telephone, and email channels available." },
      { property: "og:title", content: "Contact — KMS Law Chambers" },
      { property: "og:description", content: "Request a confidential consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Begin a confidential consultation."
        intro="Share a brief outline of your matter and a partner will respond within one working day."
      />
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ContactSection />
        </div>
      </section>
    </>
  ),
});
