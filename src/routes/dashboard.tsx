import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { Calendar, Video, FileText, Trophy, BookOpen } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Student Dashboard — Ibrahim Law School" },
      { name: "description", content: "Track your classes, notes, recordings and exam progress." },
    ],
  }),
});

function DashboardPage() {
  return (
    <>
      <PageHero eyebrow="Student Portal" title="Welcome back, future advocate." subtitle="Your premium learning hub — class schedule, notes, recordings and progress at a glance." />
      <Section>
        <div className="grid lg:grid-cols-3 gap-6">
          <Stat icon={Trophy} label="Course Progress" value="64%" sub="Fighter Batch 2026" />
          <Stat icon={Calendar} label="Next Live Class" value="Today 8 PM" sub="Constitutional Law • Lecture 12" />
          <Stat icon={BookOpen} label="Mock Score" value="78 / 100" sub="Last MCQ test" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <Card title="This Week's Classes" icon={Video}>
            {[
              ["Mon", "Penal Code — Sec 300-308"],
              ["Tue", "CrPC — Cognizance"],
              ["Wed", "Evidence Act — Hearsay"],
              ["Thu", "Mock MCQ Test"],
              ["Fri", "Viva Drill Session"],
            ].map(([d, t]) => (
              <div key={d} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <span className="text-xs uppercase tracking-widest text-gold w-12">{d}</span>
                <span className="text-sm text-foreground/85 flex-1">{t}</span>
              </div>
            ))}
          </Card>

          <Card title="PDF Notes" icon={FileText}>
            {["Bar MCQ Suggestion 2026", "Written Model Answers", "Viva Q&A Library", "Smart Revision Sheets", "Last 10 Years Papers"].map((n) => (
              <a key={n} href="#" className="block py-3 border-b border-border last:border-0 text-sm text-foreground/85 hover:text-gold">
                {n}
              </a>
            ))}
          </Card>

          <Card title="Progress Tracker" icon={Trophy}>
            {[
              ["MCQ", 78],
              ["Written", 62],
              ["Viva", 54],
              ["Mock Tests", 71],
            ].map(([l, v]) => (
              <div key={l as string} className="py-3">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">{l}</span>
                  <span className="text-gold font-semibold">{v}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-input overflow-hidden">
                  <div className="h-full bg-gradient-gold" style={{ width: `${v}%` }} />
                </div>
              </div>
            ))}
          </Card>
        </div>
      </Section>
    </>
  );
}

function Stat({ icon: Icon, label, value, sub }: any) {
  return (
    <div className="glass-gold rounded-xl p-7">
      <Icon className="h-7 w-7 text-gold mb-4" />
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="font-display text-3xl mt-1">{value}</p>
      <p className="text-sm text-muted-foreground mt-1">{sub}</p>
    </div>
  );
}

function Card({ title, icon: Icon, children }: any) {
  return (
    <div className="glass rounded-xl p-7">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="h-5 w-5 text-gold" />
        <h3 className="font-display text-lg">{title}</h3>
      </div>
      {children}
    </div>
  );
}
