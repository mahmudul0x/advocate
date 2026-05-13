import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { Play, Clock } from "lucide-react";

export const Route = createFileRoute("/recorded")({
  component: RecordedPage,
  head: () => ({
    meta: [
      { title: "Recorded Classes — Ibrahim Law School" },
      { name: "description", content: "Premium Netflix-style recorded law classes. Watch demos and enroll for full access." },
    ],
  }),
});

const playlists = [
  { t: "Bar MCQ Mastery", c: "24 lectures", thumb: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&auto=format&fit=crop&q=70" },
  { t: "Constitutional Law", c: "18 lectures", thumb: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&auto=format&fit=crop&q=70" },
  { t: "Code of Civil Procedure", c: "22 lectures", thumb: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=70" },
  { t: "Penal Code", c: "20 lectures", thumb: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=800&auto=format&fit=crop&q=70" },
  { t: "Evidence Act", c: "16 lectures", thumb: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=70" },
  { t: "Viva Mock Library", c: "30 sessions", thumb: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?w=800&auto=format&fit=crop&q=70" },
];

function RecordedPage() {
  return (
    <>
      <PageHero eyebrow="Recorded Library" title="Watch. Rewind. Master." subtitle="A Netflix-style premium classroom — every concept, every law, on demand." />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((p) => (
            <div key={p.t} className="group relative rounded-xl overflow-hidden glass hover:ring-gold-glow transition-all">
              <div className="relative aspect-video overflow-hidden">
                <img src={p.thumb} alt={p.t} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                    <Play className="h-6 w-6 text-primary-foreground fill-current ml-1" />
                  </span>
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg">{p.t}</h3>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-gold" /> {p.c}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
