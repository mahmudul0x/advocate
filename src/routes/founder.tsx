import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { CheckCircle2, ArrowRight } from "lucide-react";
import portrait from "@/assets/founder-portrait.jpg";

export const Route = createFileRoute("/founder")({
  component: FounderPage,
  head: () => ({
    meta: [
      { title: "Advocate Md. Ibrahim Khan — Founder | Ibrahim Law School" },
      { name: "description", content: "Founder Advocate Md. Ibrahim Khan — District & Sessions Judge Court, Dhaka. Mentor to thousands of Bangladeshi advocates." },
    ],
  }),
});

function FounderPage() {
  return (
    <>
      <PageHero eyebrow="Meet The Founder" title="Advocate Md. Ibrahim Khan" subtitle="District & Sessions Judge Court, Dhaka" />
      <Section>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-4 bg-gradient-gold blur-3xl opacity-25 rounded-full" />
            <img src={portrait} alt="Advocate Md. Ibrahim Khan" loading="lazy" className="relative rounded-2xl shadow-elegant w-full" />
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">A Legal Mentor</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">A decade of practice. A lifetime of teaching.</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Advocate Md. Ibrahim Khan has spent more than a decade inside Bangladesh's
                courtrooms — appearing before the District & Sessions Judge Court, Dhaka and
                guiding clients through the most demanding legal matters.
              </p>
              <p>
                Beyond his practice, he discovered an even greater calling: building the next
                generation of Bangladeshi advocates. What started as small study circles for Bar
                Council aspirants has grown into Ibrahim Law School — a premium platform that
                has trained thousands.
              </p>
              <p>
                His teaching philosophy is simple. Master the law. Sharpen the mind. Practice
                with integrity. The Bar exam is not the goal — it is the doorway.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {[
                "District & Sessions Judge Court, Dhaka",
                "10+ years of legal practice",
                "Mentor to 5,000+ Bar candidates",
                "Architect of the Fighter Batch curriculum",
                "Author of premium Bar prep notes",
                "Public speaker on legal education",
              ].map((p) => (
                <div key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/85">{p}</span>
                </div>
              ))}
            </div>

            <Link to="/courses" className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-gold text-primary-foreground font-semibold shadow-gold">
              Explore his courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="Teaching Philosophy" title="Five principles that guide every class" center>
        <div className="grid md:grid-cols-5 gap-4">
          {["Discipline", "Clarity", "Practice", "Integrity", "Confidence"].map((p, i) => (
            <div key={p} className="glass-gold rounded-xl p-6 text-center">
              <p className="font-display text-3xl text-gold">0{i + 1}</p>
              <p className="mt-3 font-display text-xl">{p}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
