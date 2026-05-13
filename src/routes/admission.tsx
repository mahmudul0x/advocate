import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { useState } from "react";
import { CheckCircle2, Upload, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/admission")({
  component: AdmissionPage,
  head: () => ({
    meta: [
      { title: "Admission — Ibrahim Law School" },
      { name: "description", content: "Enroll into Bar Council preparation courses. bKash, Nagad and Rocket accepted. Quick WhatsApp confirmation." },
    ],
  }),
});

function AdmissionPage() {
  const [done, setDone] = useState(false);
  const [pay, setPay] = useState("bKash");

  return (
    <>
      <PageHero eyebrow="Admission" title="Step into Bangladesh's most trusted Bar Council platform." subtitle="Fill in your details, choose a course, attach payment screenshot — we'll confirm via WhatsApp." />
      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="glass rounded-2xl p-8 space-y-5">
              {done ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="h-16 w-16 text-gold mx-auto mb-4" />
                  <h3 className="font-display text-3xl">Admission received!</h3>
                  <p className="text-muted-foreground mt-3 max-w-md mx-auto">
                    We've recorded your application. Our admission team will WhatsApp you within
                    a few hours to confirm enrollment and class access.
                  </p>
                  <a href="https://wa.me/8801823181010" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-gold text-primary-foreground font-semibold shadow-gold">
                    Open WhatsApp <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl">Enrollment details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field name="name" label="Full Name" />
                    <Field name="phone" label="WhatsApp Number" type="tel" />
                    <Field name="email" label="Email" type="email" />
                    <Field name="bg" label="Educational Background" />
                  </div>

                  <label className="block">
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Course Selection</span>
                    <select required className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-gold focus:outline-none">
                      <option>Fighter Batch 2026 — ৳ 9,500</option>
                      <option>Bar Preliminary (MCQ) — ৳ 3,500</option>
                      <option>Written Preparation — ৳ 4,500</option>
                      <option>Viva-Voce Preparation — ৳ 3,000</option>
                    </select>
                  </label>

                  <div>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">Payment Method</span>
                    <div className="grid grid-cols-3 gap-3">
                      {["bKash", "Nagad", "Rocket"].map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setPay(m)}
                          className={`py-3 rounded-md border transition-all font-semibold ${
                            pay === m ? "bg-gradient-gold text-primary-foreground border-transparent shadow-gold" : "border-border text-foreground/80 hover:border-gold"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      Send to <span className="text-gold font-semibold">01823 181010</span> ({pay} Personal/Merchant) and upload screenshot below.
                    </p>
                  </div>

                  <label className="block">
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Payment Screenshot</span>
                    <div className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-border rounded-md hover:border-gold transition-colors cursor-pointer">
                      <input type="file" accept="image/*" required className="hidden" id="ss" />
                      <label htmlFor="ss" className="flex flex-col items-center gap-2 cursor-pointer">
                        <Upload className="h-7 w-7 text-gold" />
                        <span className="text-sm text-muted-foreground">Click to upload</span>
                      </label>
                    </div>
                  </label>

                  <button className="w-full py-4 rounded-md bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-[1.01] transition-transform">
                    Submit Admission
                  </button>
                </>
              )}
            </form>
          </div>

          <aside className="space-y-5">
            <div className="glass-gold rounded-xl p-6">
              <h4 className="font-display text-lg mb-3">Why Ibrahim Law School?</h4>
              <ul className="space-y-2 text-sm">
                {["92% Bar pass rate", "Founder-led mentorship", "Daily live + recorded", "Smart suggestions", "Premium PDF notes"].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-xl p-6">
              <h4 className="font-display text-lg mb-2">Need help?</h4>
              <p className="text-sm text-muted-foreground">Call or WhatsApp our admission team — we typically reply within minutes.</p>
              <a href="https://wa.me/8801823181010" className="mt-4 block text-center py-2.5 rounded-md bg-emerald-500 text-white font-semibold">
                WhatsApp Us
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text" }: any) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <input name={name} type={type} required className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
    </label>
  );
}
