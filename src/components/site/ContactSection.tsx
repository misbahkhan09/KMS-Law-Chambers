import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MessageCircle, ArrowUpRight, Check } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(6, "Enter a valid phone").max(20),
  matter: z.string().trim().min(2, "Select a practice area").max(80),
  message: z.string().trim().min(10, "Tell us a little more").max(1500),
});

const practiceOptions = [
  "Commercial & Corporate",
  "Civil & Property Law",
  "Dispute Resolution",
  "Family & Personal Laws",
  "Service & Insurance Law",
  "Constitutional Remedies",
  "Criminal Law",
  "Other",
];

export function ContactSection() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\nMatter: ${parsed.data.matter}\n\n${parsed.data.message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Consultation request")}&body=${body}`;
    setSent(true);
  };

  const field = (key: string) =>
    errors[key] ? "border-destructive" : "border-border focus:border-primary";

  return (
    <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
      <Reveal className="lg:col-span-5">
        <span className="eyebrow flex items-center gap-3">
          <span className="gold-rule" />
          Contact
        </span>
        <h2 className="mt-5 font-serif text-3xl leading-[1.1] text-primary sm:text-4xl lg:text-[44px]">
          Request a confidential consultation.
        </h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
          Share a brief outline of your matter. A partner will respond within one working day. All enquiries are treated in strict confidence.
        </p>

        <div className="mt-10 space-y-5">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-6 border border-border p-5 transition-colors hover:border-gold"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center border border-border text-gold transition-colors group-hover:border-gold">
                <MessageCircle size={18} />
              </span>
              <div>
                <div className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">WhatsApp</div>
                <div className="font-serif text-lg text-primary">Message us instantly</div>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a href={`tel:${SITE.phoneHref}`} className="group flex items-center justify-between gap-6 border border-border p-5 transition-colors hover:border-gold">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center border border-border text-gold transition-colors group-hover:border-gold">
                <Phone size={18} />
              </span>
              <div>
                <div className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">Call</div>
                <div className="font-serif text-lg text-primary">{SITE.phone}</div>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a href={`mailto:${SITE.email}`} className="group flex items-center justify-between gap-6 border border-border p-5 transition-colors hover:border-gold">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center border border-border text-gold transition-colors group-hover:border-gold">
                <Mail size={18} />
              </span>
              <div>
                <div className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">Email</div>
                <div className="font-serif text-lg text-primary break-all">{SITE.email}</div>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>

      <Reveal className="lg:col-span-7">
        <form onSubmit={onSubmit} noValidate className="bg-card p-8 lg:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Full name" name="name" error={errors.name} fieldClass={field("name")}>
              <input id="name" name="name" type="text" required className={inputCls} />
            </Field>
            <Field label="Email" name="email" error={errors.email} fieldClass={field("email")}>
              <input id="email" name="email" type="email" required className={inputCls} />
            </Field>
            <Field label="Phone" name="phone" error={errors.phone} fieldClass={field("phone")}>
              <input id="phone" name="phone" type="tel" required className={inputCls} />
            </Field>
            <Field label="Practice area" name="matter" error={errors.matter} fieldClass={field("matter")}>
              <select id="matter" name="matter" required defaultValue="" className={inputCls}>
                <option value="" disabled>Select…</option>
                {practiceOptions.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </Field>
          </div>
          <div className="mt-6">
            <Field label="Brief outline of the matter" name="message" error={errors.message} fieldClass={field("message")}>
              <textarea id="message" name="message" rows={5} required className={`${inputCls} resize-none`} />
            </Field>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[11px] text-muted-foreground">
              By submitting, you agree to our confidentiality and engagement terms.
            </p>
            <button
              type="submit"
              className="group inline-flex h-12 items-center gap-3 border border-primary bg-primary px-6 text-[12px] tracking-[0.2em] uppercase text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {sent ? <><Check size={16} /> Sent</> : <>Submit enquiry <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></>}
            </button>
          </div>
        </form>
      </Reveal>
    </div>
  );
}

const inputCls =
  "block w-full border-0 border-b bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0";

function Field({
  label,
  name,
  children,
  error,
  fieldClass,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
  error?: string;
  fieldClass: string;
}) {
  return (
    <div className={`group border-b ${fieldClass} transition-colors`}>
      <label htmlFor={name} className="block text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
        {label}
      </label>
      {children}
      {error && <p className="mb-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
