import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { useState } from "react";
import { CheckCircle2, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/orientation")({
  component: OrientationPage,
  head: () => ({
    meta: [
      { title: "Free Orientation Class — Ibrahim Law School" },
      { name: "description", content: "Join our free Bar Council orientation class. Meet the founder and explore the curriculum." },
    ],
  }),
});

function OrientationPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Free Orientation"
        title="Sit in. Take notes. Decide."
        subtitle="Join our free orientation class — meet Advocate Ibrahim Khan, walk through the syllabus and see the platform live."
      />
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-display text-3xl mb-6">What you'll experience</h3>
            <ul className="space-y-4">
              {[
                "Live walkthrough of the Bar Council syllabus",
                "Founder Q&A with Advocate Md. Ibrahim Khan",
                "Demo of smart suggestions and study materials",
                "Routine planning for MCQ, Written and Viva",
                "Special enrollment offer for attendees",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold mt-0.5" />
                  <span className="text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-5">
                <Calendar className="h-6 w-6 text-gold mb-2" />
                <p className="text-sm text-muted-foreground">Next session</p>
                <p className="font-display text-lg">Every Friday</p>
              </div>
              <div className="glass rounded-xl p-5">
                <Clock className="h-6 w-6 text-gold mb-2" />
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-display text-lg">8:00 PM (BD)</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="glass rounded-2xl p-8 space-y-4"
          >
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-14 w-14 text-gold mx-auto mb-4" />
                <h3 className="font-display text-2xl">You're registered!</h3>
                <p className="text-muted-foreground mt-2">We'll WhatsApp you the orientation link.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl mb-2">Reserve your seat</h3>
                <Field label="Full Name" name="name" />
                <Field label="WhatsApp Number" name="phone" type="tel" />
                <Field label="Email (optional)" name="email" type="email" required={false} />
                <Field label="Educational Background" name="bg" />
                <button className="w-full mt-3 py-4 rounded-md bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-[1.02] transition-transform">
                  Register Free
                </button>
              </>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
      />
    </label>
  );
}
