import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import heroImg from "@/assets/hero-dark-team.png";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden min-h-[95vh] flex items-center bg-black text-white pt-32 pb-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroImg}
          alt="KMS Law Chambers Advocates"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="h-full w-full object-cover opacity-20 mix-blend-luminosity filter brightness-[0.6] contrast-[1.15]"
        />
        {/* Gradients to merge into the dark background and make text legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent_10%,rgba(0,0,0,0.85)_70%,#000_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="max-w-3xl">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow flex items-center gap-3 text-gold"
          >
            <span className="gold-rule bg-gold" />
            Advocates & Counsel · Delhi
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-serif text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[68px]"
          >
            Strategic Legal Counsel.
            <br />
            <span className="text-gold font-serif">Powerful</span> Representation.
            <br />
            Practical Outcomes.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-zinc-300 lg:text-lg"
          >
            KMS Law Chambers is a full-service law firm catering to individuals, organizations, and business establishments — delivering comprehensive legal advice, strategic solutions, and cost-effective representation across India's Supreme Court, High Courts, and tribunals.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center gap-3 bg-gold px-6 text-[12px] tracking-[0.2em] uppercase text-black font-medium transition-all hover:bg-gold/90"
            >
              Schedule consultation
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/practice-areas"
              className="group inline-flex h-12 items-center gap-3 border border-white/30 px-6 text-[12px] tracking-[0.2em] uppercase text-white transition-all hover:border-white"
            >
              Explore expertise
              <span className="h-px w-6 bg-white transition-all duration-300 group-hover:w-10" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
