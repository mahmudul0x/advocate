import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale, BookOpen, Award, Users, Play, ArrowRight, CheckCircle2,
  Gavel, GraduationCap, Star, Trophy, Clock, Video, FileText, Sparkles,
} from "lucide-react";
import heroCourtroom from "@/assets/hero-courtroom.jpg";
import heroStudents from "@/assets/hero-students.jpg";
import heroAdvocate from "@/assets/hero-advocate.jpg";
import booksGavel from "@/assets/books-gavel.jpg";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Ibrahim Law School — Bangladesh Bar Council Excellence" },
      { name: "description", content: "Premium Bar Council preparation in Bangladesh. Live classes, recorded lessons, smart suggestions and PDF notes by Advocate Md. Ibrahim Khan." },
    ],
  }),
});

const slides = [
  {
    img: heroCourtroom,
    eyebrow: "Bar Council Success",
    title: "Path To Success — Bangladesh Bar Council Examination",
    sub: "A to Z preparation for MCQ, Written & Viva-Voce in one structured course.",
    primary: { label: "Enroll Now", to: "/admission" },
    secondary: { label: "Join Free Orientation", to: "/orientation" },
  },
  {
    img: heroStudents,
    eyebrow: "Fighter Batch 2026",
    title: "60 Days Complete Preparation",
    sub: "Daily live classes • Premium recordings • Smart suggestions.",
    primary: { label: "Join Fighter Batch", to: "/fighter-batch" },
    secondary: { label: "Watch Demo Class", to: "/recorded" },
  },
  {
    img: heroAdvocate,
    eyebrow: "Become An Advocate",
    title: "Your Dream Of Becoming An Advocate Starts Here",
    sub: "Guided personally by Advocate Md. Ibrahim Khan.",
    primary: { label: "Explore Courses", to: "/courses" },
    secondary: { label: "WhatsApp Admission", to: "/contact" },
  },
];

function HomePage() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/70 to-navy-deep" />
            <div className="absolute inset-0 [background-image:radial-gradient(circle_at_70%_30%,oklch(0.78_0.13_85_/_0.18),transparent_55%)]" />
          </motion.div>
        </AnimatePresence>

        {/* floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 18 }).map((_, k) => (
            <span
              key={k}
              className="absolute h-1 w-1 rounded-full bg-gold/60 animate-float"
              style={{
                top: `${(k * 53) % 100}%`,
                left: `${(k * 37) % 100}%`,
                animationDelay: `${k * 0.4}s`,
                animationDuration: `${6 + (k % 5)}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 glass-gold px-4 py-1.5 rounded-full text-xs tracking-[0.25em] uppercase text-gold mb-6">
                  <Sparkles className="h-3 w-3" /> {s.eyebrow}
                </span>
                <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-foreground">
                  {s.title}
                </h1>
                <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
                  {s.sub}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to={s.primary.to}
                    className="group inline-flex items-center gap-2 px-7 py-4 rounded-md bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform"
                  >
                    {s.primary.label}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to={s.secondary.to}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-md glass text-foreground font-semibold hover:bg-foreground/10 transition-colors"
                  >
                    <Play className="h-4 w-4 text-gold" /> {s.secondary.label}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* slide indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {slides.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-1 rounded-full transition-all ${k === i ? "w-12 bg-gold" : "w-6 bg-foreground/30"}`}
              aria-label={`Slide ${k + 1}`}
            />
          ))}
        </div>

        {/* trust strip */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-border bg-navy-deep/70 backdrop-blur-md">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { k: "5,000+", v: "Students Trained" },
              { k: "92%", v: "Pass Rate" },
              { k: "60 Days", v: "Fighter Batch" },
              { k: "4.9/5", v: "Student Rating" },
            ].map((s) => (
              <div key={s.v} className="py-5 px-6 text-center">
                <p className="font-display text-2xl md:text-3xl text-gold">{s.k}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <Section
        eyebrow="The Ibrahim Law Standard"
        title="An elite ecosystem for Bangladesh's future advocates"
        subtitle="Every element of our platform is engineered for one outcome — your success in the Bar Council examination."
        center
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Gavel, t: "Bar Council Mastery", d: "Structured MCQ, Written and Viva-Voce preparation aligned to the latest syllabus." },
            { icon: Video, t: "Live + Recorded Classes", d: "Daily live sessions with HD recordings — never miss a concept again." },
            { icon: FileText, t: "Premium PDF Notes", d: "Research-grade notes, model answers, and smart suggestion sets." },
            { icon: Users, t: "Personal Mentorship", d: "Direct guidance from Advocate Md. Ibrahim Khan and senior mentors." },
            { icon: Trophy, t: "Result-Oriented", d: "92% pass rate. Hundreds enrolled into the Bar within two attempts." },
            { icon: GraduationCap, t: "Career Pathway", d: "From law student to practicing advocate — a proven roadmap." },
          ].map((f) => (
            <div
              key={f.t}
              className="group glass rounded-xl p-7 hover:ring-gold-glow transition-all hover:-translate-y-1 duration-300"
            >
              <div className="h-12 w-12 rounded-md bg-gradient-gold flex items-center justify-center shadow-gold mb-5">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">{f.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FOUNDER STRIP */}
      <section className="relative bg-navy-deep py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_80%_50%,oklch(0.36_0.15_265_/_0.4),transparent_60%)]" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-gold blur-3xl opacity-20 rounded-full" />
            <img
              src={heroAdvocate}
              alt="Advocate Md. Ibrahim Khan"
              loading="lazy"
              className="relative rounded-2xl shadow-elegant w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-6 glass-gold p-5 rounded-xl">
              <Award className="h-8 w-8 text-gold" />
            </div>
          </motion.div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Meet The Founder</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Advocate Md. Ibrahim Khan
            </h2>
            <p className="mt-3 text-gold/90">District & Sessions Judge Court, Dhaka</p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              With over a decade in Bangladesh's courts, Advocate Khan has guided thousands of
              law students through their Bar Council journey. His mission: to build a generation
              of advocates who are sharp, ethical and ready for practice from day one.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "10+ Years Court Experience",
                "Master Trainer — Bar Prep",
                "Mentor to 5,000+ Students",
                "Author of Premium Notes",
              ].map((p) => (
                <div key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/85">{p}</span>
                </div>
              ))}
            </div>
            <Link
              to="/founder"
              className="mt-8 inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
            >
              Read his full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <Section
        eyebrow="Programs"
        title="Choose your pathway to the Bar"
        subtitle="From MCQ to Viva-Voce — every stage covered with surgical precision."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "Preliminary (MCQ)", d: "Smart suggestion-based MCQ mastery.", price: "৳ 3,500", icon: BookOpen },
            { t: "Written Exam", d: "Structured legal writing & case analysis.", price: "৳ 4,500", icon: FileText },
            { t: "Viva-Voce", d: "Confidence training & mock interviews.", price: "৳ 3,000", icon: Users },
            { t: "Fighter Batch 2026", d: "60-day complete A→Z preparation.", price: "৳ 9,500", icon: Trophy, featured: true },
          ].map((c) => (
            <div
              key={c.t}
              className={`relative rounded-xl p-7 transition-all hover:-translate-y-1 duration-300 ${
                c.featured ? "bg-gradient-to-br from-deep-blue to-navy ring-1 ring-gold/40 shadow-gold" : "glass"
              }`}
            >
              {c.featured && (
                <span className="absolute -top-3 left-7 bg-gradient-gold text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Flagship
                </span>
              )}
              <c.icon className="h-7 w-7 text-gold mb-5" />
              <h3 className="font-display text-xl mb-2">{c.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-display text-2xl text-gold">{c.price}</span>
                <Link to="/courses" className="text-xs uppercase tracking-widest text-foreground/70 hover:text-gold">
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FIGHTER BATCH BANNER */}
      <section className="container mx-auto px-6 mb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16">
          <div className="absolute inset-0 opacity-30">
            <img src={booksGavel} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
          <div className="relative max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Fighter Batch 2026</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Sixty days. One disciplined fight. <span className="text-gradient-gold">Lifelong career.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Daily live classes, smart suggestions, premium recordings, PDF notes and dedicated
              mentor support — engineered for those who refuse to lose.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/fighter-batch" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-gold text-primary-foreground font-semibold shadow-gold">
                Join Fighter Batch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/orientation" className="inline-flex items-center gap-2 px-6 py-3 rounded-md glass text-foreground font-semibold">
                Free Orientation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Voices Of Success" title="From students to advocates" center>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "Tahmid Hasan", r: "Enrolled Advocate, Dhaka Bar", q: "The Fighter Batch transformed my preparation. Smart suggestions and Sir's guidance were unmatched." },
            { n: "Sumaiya Akter", r: "Bar Council 2025 Pass", q: "I failed twice before. With Ibrahim Sir I passed MCQ, Written and Viva on the first try." },
            { n: "Rifat Karim", r: "Junior Advocate, Chattogram", q: "Premium notes and mock vivas built my confidence. I walked into the viva room ready." },
          ].map((t) => (
            <div key={t.n} className="glass rounded-xl p-7 hover:ring-gold-glow transition-all">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 italic leading-relaxed">"{t.q}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-semibold">{t.n}</p>
                <p className="text-xs text-gold mt-1 uppercase tracking-widest">{t.r}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/testimonials" className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all">
            Read more success stories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-deep-blue via-navy to-navy-deep overflow-hidden">
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_50%_50%,oklch(0.78_0.13_85_/_0.2),transparent_60%)]" />
        <div className="container mx-auto px-6 text-center relative">
          <Scale className="h-12 w-12 text-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
            Your career as an advocate begins with a single decision.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Join Bangladesh's most trusted Bar Council preparation platform today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/admission" className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform">
              Apply For Admission <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-md glass text-foreground font-semibold">
              Talk To An Advisor
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <Clock className="h-3 w-3 text-gold" /> Next batch starts soon
          </div>
        </div>
      </section>
    </>
  );
}
