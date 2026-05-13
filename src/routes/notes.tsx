import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { FileText, Download, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/notes")({
  component: NotesPage,
  head: () => ({
    meta: [
      { title: "Notes & Resources — Ibrahim Law School" },
      { name: "description", content: "Premium PDF notes, MCQ practice and downloadable Bar Council resources." },
    ],
  }),
});

const notes = [
  { t: "Bar MCQ Smart Suggestion 2026", s: "120 pages • PDF" },
  { t: "Constitution of Bangladesh — Master Notes", s: "85 pages • PDF" },
  { t: "Code of Civil Procedure — Summary", s: "98 pages • PDF" },
  { t: "Code of Criminal Procedure — Quick Notes", s: "76 pages • PDF" },
  { t: "Penal Code — Section-wise Analysis", s: "112 pages • PDF" },
  { t: "Evidence Act — Practice Questions", s: "64 pages • PDF" },
  { t: "Written Exam Model Answers", s: "150 pages • PDF" },
  { t: "Viva-Voce Q&A Library", s: "92 pages • PDF" },
  { t: "Last 10 Years Papers + Solutions", s: "210 pages • PDF" },
];

function NotesPage() {
  const [q, setQ] = useState("");
  const filtered = notes.filter((n) => n.t.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <PageHero eyebrow="Notes & Resources" title="Premium study materials, ready to download." subtitle="Curated PDF notes, model answers and MCQ practice — built for serious aspirants." />
      <Section>
        <div className="max-w-xl mb-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search notes…"
            className="w-full pl-11 pr-4 py-3 rounded-md bg-input border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((n) => (
            <div key={n.t} className="glass rounded-xl p-6 flex flex-col hover:ring-gold-glow transition-all">
              <FileText className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-display text-lg flex-1">{n.t}</h3>
              <p className="text-xs text-muted-foreground mt-2">{n.s}</p>
              <button className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-gradient-gold text-primary-foreground text-sm font-semibold shadow-gold">
                <Download className="h-4 w-4" /> Download
              </button>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
