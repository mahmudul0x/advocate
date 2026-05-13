import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Testimonials — Ibrahim Law School" },
      { name: "description", content: "Real Bangladeshi advocates share their Bar Council success stories with Ibrahim Law School." },
    ],
  }),
});

const items = [
  { n: "Tahmid Hasan", r: "Enrolled Advocate, Dhaka Bar", q: "The Fighter Batch transformed my preparation. Smart suggestions and Sir's guidance were unmatched." },
  { n: "Sumaiya Akter", r: "Bar Council 2025", q: "I failed twice before. With Ibrahim Sir I passed MCQ, Written and Viva on the first try." },
  { n: "Rifat Karim", r: "Junior Advocate, Chattogram", q: "Premium notes and mock vivas built my confidence. I walked into the viva room ready." },
  { n: "Nusrat Jahan", r: "Advocate, Sylhet", q: "The 60-day routine kept me disciplined. The mentor support is unlike anything else in Bangladesh." },
  { n: "Mahfuz Rahman", r: "Bar Council 2024", q: "Notes alone are worth the fee. The live classes are simply premium quality." },
  { n: "Asif Iqbal", r: "Practicing Advocate", q: "Ibrahim Sir made constitutional law feel intuitive. I credit my pass to this platform." },
];

function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Voices Of Success" title="Stories from real Bangladeshi advocates" subtitle="Their Bar Council journeys, in their own words." />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.n} className="glass rounded-xl p-7 relative">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-gold/20" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 italic leading-relaxed">"{t.q}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-semibold">{t.n}</p>
                <p className="text-xs text-gold uppercase tracking-widest mt-1">{t.r}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
