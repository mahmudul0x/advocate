import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { CheckCircle2, ArrowRight, Calendar, Video, FileText, Users, Trophy } from "lucide-react";

export const Route = createFileRoute("/fighter-batch")({
  component: FighterPage,
  head: () => ({
    meta: [
      { title: "Fighter Batch 2026 — Ibrahim Law School" },
      { name: "description", content: "60 days of complete Bar Council preparation. Daily live classes, recordings, smart suggestions and PDF notes." },
    ],
  }),
});

function FighterPage() {
  return (
    <>
      <PageHero
        eyebrow="Fighter Batch 2026"
        title="60 days. One disciplined fight. Lifetime career."
        subtitle="The complete A→Z Bar Council preparation — designed for students who refuse to lose."
      />
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { i: Calendar, t: "60-Day Routine", d: "Daily class schedule with Sunday revisions and weekly mocks." },
            { i: Video, t: "Live + Recorded", d: "Attend live or watch HD recordings — your pace, your time." },
            { i: FileText, t: "Smart Suggestions", d: "Topic prioritization based on the last 10 years of Bar exams." },
            { i: Users, t: "Mentor Support", d: "Direct WhatsApp access to senior advocates and the founder." },
            { i: Trophy, t: "Mock Exams", d: "Weekly MCQ + bi-weekly Written + monthly Viva simulations." },
            { i: CheckCircle2, t: "Pass Guarantee*", d: "Re-enroll free of cost if you sit and miss the cut-off." },
          ].map((f) => (
            <div key={f.t} className="glass rounded-xl p-7">
              <f.i className="h-8 w-8 text-gold mb-5" />
              <h3 className="font-display text-xl mb-2">{f.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Investment" title="One price. Everything included." center>
        <div className="max-w-md mx-auto bg-gradient-to-br from-deep-blue to-navy rounded-2xl p-10 text-center ring-1 ring-gold/40 shadow-gold">
          <p className="text-xs uppercase tracking-widest text-gold">Fighter Batch 2026</p>
          <p className="font-display text-6xl text-gradient-gold mt-3">৳ 9,500</p>
          <p className="text-muted-foreground mt-2">One-time, full access</p>
          <ul className="mt-8 space-y-3 text-left">
            {["Daily live classes (60 days)", "All HD recordings", "Smart suggestion sets", "Premium PDF notes", "Mock MCQ + Written + Viva", "Direct mentor support"].map((it) => (
              <li key={it} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" /> {it}
              </li>
            ))}
          </ul>
          <Link to="/admission" className="mt-10 inline-flex items-center gap-2 w-full justify-center px-6 py-4 rounded-md bg-gradient-gold text-primary-foreground font-semibold shadow-gold">
            Enroll Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
