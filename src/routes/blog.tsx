import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Legal Articles — Ibrahim Law School" },
      { name: "description", content: "Expert articles on Bar Council preparation, legal careers and exam strategy." },
    ],
  }),
});

const posts = [
  { t: "10 Smart Strategies for Bar MCQ Mastery", d: "Nov 12, 2025", c: "Bar Prep", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=70" },
  { t: "How to Structure a Winning Written Answer", d: "Nov 03, 2025", c: "Written Exam", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=70" },
  { t: "Inside the Viva Room — What Examiners Look For", d: "Oct 22, 2025", c: "Viva-Voce", img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&q=70" },
  { t: "Building a Legal Career in Bangladesh", d: "Oct 10, 2025", c: "Career", img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=70" },
  { t: "Constitutional Amendments — A Quick Guide", d: "Sep 28, 2025", c: "Law Update", img: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=800&q=70" },
  { t: "Time Management for Bar Aspirants", d: "Sep 15, 2025", c: "Study Tips", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=70" },
];

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Legal Articles" title="Insights from Bangladesh's leading Bar prep mentors" subtitle="Strategy, study guides and career advice for the modern advocate." />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.t} className="group glass rounded-xl overflow-hidden hover:ring-gold-glow transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-gold">{p.c}</p>
                <h3 className="font-display text-xl mt-2 leading-snug">{p.t}</h3>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {p.d}</span>
                  <Link to="/blog" className="text-gold hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Read <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
