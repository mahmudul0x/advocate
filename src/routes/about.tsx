import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { Scale, Target, Heart, Award } from "lucide-react";
import books from "@/assets/books-gavel.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Ibrahim Law School" },
      { name: "description", content: "Bangladesh's premium Bar Council preparation institution combining academic depth, mentorship and modern learning." },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About The Institution"
        title="A premium academy for Bangladesh's future advocates"
        subtitle="We are not a coaching center. We are an institution shaping the next generation of legal minds."
      />
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img src={books} alt="Premium legal study" loading="lazy" className="rounded-2xl shadow-elegant" />
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Story</p>
            <h2 className="font-display text-4xl mb-6">Built on courtrooms, classrooms and conviction.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ibrahim Law School was founded with one belief: every aspiring advocate in Bangladesh
              deserves world-class Bar Council preparation. Born inside the very chambers and
              courtrooms of Dhaka, our curriculum bridges the gap between textbook law and
              real-world practice.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine academic rigor, legal mentorship and modern technology to produce
              advocates who walk into the courtroom ready, ethical and confident.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="What Drives Us" title="Mission, vision and values" center>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { i: Target, t: "Mission", d: "To become Bangladesh's most trusted Bar Council preparation platform — measured by results, not promises." },
            { i: Heart, t: "Vision", d: "A generation of advocates who are intellectually sharp, ethically grounded and fiercely prepared." },
            { i: Award, t: "Values", d: "Excellence. Integrity. Discipline. Mentorship. Service to law and to society." },
          ].map((v) => (
            <div key={v.t} className="glass rounded-xl p-8 text-center">
              <v.i className="h-10 w-10 text-gold mx-auto mb-5" />
              <h3 className="font-display text-2xl mb-3">{v.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="By The Numbers" title="A track record built on results">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { k: "5,000+", v: "Students Trained" },
            { k: "92%", v: "Bar Pass Rate" },
            { k: "10+", v: "Years Of Practice" },
            { k: "60", v: "Days Fighter Batch" },
          ].map((s) => (
            <div key={s.v} className="glass-gold rounded-xl p-8 text-center">
              <p className="font-display text-5xl text-gold">{s.k}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
