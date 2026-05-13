import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { Trophy, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/success-stories")({
  component: SuccessPage,
  head: () => ({
    meta: [
      { title: "Success Stories — Ibrahim Law School" },
      { name: "description", content: "Bangladesh Bar Council results, advocate transformations and student achievements." },
    ],
  }),
});

const stories = [
  { n: "Tahmid Hasan", r: "Top 5%, Bar 2025", note: "From CGPA 2.8 to enrolled advocate in 9 months." },
  { n: "Sumaiya Akter", r: "Bar 2025", note: "Passed all three stages on first attempt." },
  { n: "Rifat Karim", r: "Bar 2024", note: "Now practicing at the Chattogram Bar." },
  { n: "Nusrat Jahan", r: "Bar 2025", note: "Joined a leading Sylhet chamber." },
  { n: "Mahfuz Rahman", r: "Bar 2024", note: "Recognized for top viva performance." },
  { n: "Asif Iqbal", r: "Bar 2025", note: "Practicing constitutional matters in Dhaka." },
];

function SuccessPage() {
  return (
    <>
      <PageHero eyebrow="Success Stories" title="Real students. Real results. Real careers." />
      <Section>
        <div className="grid md:grid-cols-4 gap-6 mb-14">
          {[
            { k: "92%", v: "Pass Rate" },
            { k: "5,000+", v: "Trained" },
            { k: "1,200+", v: "Now Practicing" },
            { k: "60+", v: "Top Performers" },
          ].map((s) => (
            <div key={s.v} className="glass-gold rounded-xl p-7 text-center">
              <p className="font-display text-4xl text-gold">{s.k}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.v}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((s) => (
            <div key={s.n} className="glass rounded-xl p-7 hover:ring-gold-glow transition-all">
              <Trophy className="h-7 w-7 text-gold mb-4" />
              <h3 className="font-display text-xl">{s.n}</h3>
              <p className="text-xs text-gold uppercase tracking-widest mt-1">{s.r}</p>
              <p className="text-muted-foreground mt-4 flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-gold mt-1 shrink-0" />
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
