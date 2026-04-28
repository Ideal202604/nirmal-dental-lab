import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const items = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["B 377, Xyz, New Delhi, 110034"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 9123456789"],
    href: "tel:+919123456789",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@dummy.com"],
    href: "mailto:info@dummy.com",
  },
  {
    icon: Clock,
    title: "Lab Hours",
    lines: ["Mon — Sat: 9:30 AM – 7:00 PM", "Sunday: Closed"],
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-soft relative overflow-hidden">
      <div className="container-px container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-semibold mb-4">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Reach out — we're <span className="gradient-text">here to help</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {items.map((it) => {
              const Body = (
                <div className="bg-card border border-border/50 rounded-2xl p-6 h-full shadow-card hover:shadow-elegant transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-soft">
                    <it.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{it.title}</h3>
                  {it.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground leading-relaxed">{l}</p>
                  ))}
                </div>
              );
              return it.href ? (
                <a key={it.title} href={it.href} className="block">
                  {Body}
                </a>
              ) : (
                <div key={it.title}>{Body}</div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-elegant border border-border/50 min-h-[400px] relative"
          >
            <iframe
              title="Nirmal Dental Labs on Google Maps"
              src="https://www.google.com/maps/search/nirmal+dental+labs/@23.0190762,74.9707031,6z?output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
