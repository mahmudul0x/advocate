import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { Phone, MessageCircle, Facebook, Youtube, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Ibrahim Law School" },
      { name: "description", content: "Reach Ibrahim Law School via WhatsApp, phone, Facebook or email. Located in Dhaka, Bangladesh." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Get In Touch" title="We're a message away." subtitle="Talk to our admission team — by WhatsApp, phone, or this form." />
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-5">
            <Item icon={MessageCircle} label="WhatsApp" value="01823 181 010" href="https://wa.me/8801823181010" />
            <Item icon={Phone} label="Alternative" value="01347 320 492" href="tel:+8801347320492" />
            <Item icon={Facebook} label="Facebook Page" value="Ibrahim Law School" href="#" />
            <Item icon={Youtube} label="YouTube Channel" value="Ibrahim Law School" href="#" />
            <Item icon={Mail} label="Email" value="info@ibrahimlawschool.com" href="mailto:info@ibrahimlawschool.com" />
            <Item icon={MapPin} label="Office" value="Dhaka, Bangladesh" />
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glass rounded-2xl p-8 space-y-4"
          >
            {sent ? (
              <div className="text-center py-12">
                <MessageCircle className="h-14 w-14 text-gold mx-auto mb-4" />
                <h3 className="font-display text-2xl">Message sent!</h3>
                <p className="text-muted-foreground mt-2">We'll get back within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl mb-2">Send a message</h3>
                <Field name="name" label="Your Name" />
                <Field name="phone" label="WhatsApp Number" type="tel" />
                <Field name="email" label="Email" type="email" required={false} />
                <label className="block">
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</span>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                </label>
                <button className="w-full mt-3 py-4 rounded-md bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-[1.02] transition-transform">
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}

function Item({ icon: Icon, label, value, href }: any) {
  const Body = (
    <div className="glass rounded-xl p-5 flex items-center gap-4 hover:ring-gold-glow transition-all">
      <div className="h-12 w-12 rounded-md bg-gradient-gold flex items-center justify-center shadow-gold shrink-0">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="font-display text-lg">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{Body}</a> : Body;
}

function Field({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <input name={name} type={type} required={required} className="w-full px-4 py-3 rounded-md bg-input border border-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
    </label>
  );
}
