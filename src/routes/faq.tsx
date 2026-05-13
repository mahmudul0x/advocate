import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ — Ibrahim Law School" },
      { name: "description", content: "Frequently asked questions about admission, payments, classes and Bar Council preparation." },
    ],
  }),
});

const faqs = [
  { q: "How do I enroll in a course?", a: "Visit the Admission page, fill in the form, choose your course and submit your bKash, Nagad or Rocket payment screenshot. We'll confirm via WhatsApp within hours." },
  { q: "What payment methods do you accept?", a: "bKash, Nagad and Rocket. After paying to our merchant number, upload the screenshot in the admission form." },
  { q: "Can I access recorded classes after enrollment?", a: "Yes — every Fighter Batch student gets full HD access to recordings for the entire course duration." },
  { q: "When does the Fighter Batch 2026 start?", a: "New batches begin every 2 months. Join the free orientation to learn the next start date." },
  { q: "Is there a refund policy?", a: "We offer a 7-day satisfaction window. If you attend the orientation and the first class and are not satisfied, we'll refund in full." },
  { q: "How long are the recordings available?", a: "Recordings remain accessible for 6 months from your enrollment date — long enough to revise multiple times." },
  { q: "Do you provide PDF notes?", a: "Yes, premium PDF notes are included with all programs and downloadable from your dashboard." },
  { q: "Can I attend on mobile?", a: "Absolutely. The platform is mobile-first with a sticky admission CTA and lightning-fast load times." },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="FAQ" title="Everything you need to know" />
      <Section>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-display text-lg pr-4">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gold transition-transform shrink-0 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
