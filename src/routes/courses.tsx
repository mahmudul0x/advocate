import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { BookOpen, FileText, Users, Trophy, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/courses")({
  component: CoursesPage,
  head: () => ({
    meta: [
      { title: "Courses — Ibrahim Law School" },
      { name: "description", content: "Bar Council Preliminary, Written, Viva-Voce and Fighter Batch 2026 — premium law courses by Advocate Md. Ibrahim Khan." },
    ],
  }),
});

const courses = [
  {
    icon: BookOpen,
    title: "Bar Council Preliminary (MCQ)",
    price: "৳ 3,500",
    duration: "30 days",
    blurb: "Master MCQ with smart suggestions, daily routine and weekly mock tests.",
    items: ["Topic-wise MCQ training", "Smart suggestion system", "Weekly mock tests", "Live doubt-clearing sessions", "PDF question bank"],
  },
  {
    icon: FileText,
    title: "Written Exam Preparation",
    price: "৳ 4,500",
    duration: "45 days",
    blurb: "Structured legal writing, case analysis and model answers.",
    items: ["Legal writing techniques", "Case analysis frameworks", "Model answer library", "Personalized feedback", "Timed practice papers"],
  },
  {
    icon: Users,
    title: "Viva-Voce Preparation",
    price: "৳ 3,000",
    duration: "20 days",
    blurb: "Build courtroom confidence through mock vivas and real interview drills.",
    items: ["Mock viva sessions", "Confidence training", "Practical legal Q&A", "Dress & demeanor coaching", "1:1 mentor reviews"],
  },
  {
    icon: Trophy,
    title: "Fighter Batch 2026",
    price: "৳ 9,500",
    duration: "60 days",
    featured: true,
    blurb: "The complete A→Z preparation. Live + recorded + notes + mentorship.",
    items: ["Daily live classes", "Premium HD recordings", "Smart suggestions", "PDF notes & summaries", "Dedicated mentor support", "Mock MCQ + Written + Viva"],
  },
];

function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Premium courses engineered for Bar Council success"
        subtitle="Pick a program — or take the complete journey through our flagship Fighter Batch."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((c) => (
            <div
              key={c.title}
              className={`relative rounded-2xl p-8 transition-all hover:-translate-y-1 ${
                c.featured ? "bg-gradient-to-br from-deep-blue to-navy ring-1 ring-gold/40 shadow-gold" : "glass"
              }`}
            >
              {c.featured && (
                <span className="absolute -top-3 left-8 bg-gradient-gold text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Flagship
                </span>
              )}
              <div className="flex items-start justify-between mb-6">
                <div className="h-14 w-14 rounded-md bg-gradient-gold flex items-center justify-center shadow-gold">
                  <c.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-right">
                  <p className="font-display text-3xl text-gold">{c.price}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.duration}</p>
                </div>
              </div>
              <h3 className="font-display text-2xl mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{c.blurb}</p>
              <ul className="space-y-2 mb-7">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" /> {it}
                  </li>
                ))}
              </ul>
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform"
              >
                Enroll Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
