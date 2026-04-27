import { motion } from "framer-motion";
import { Award, Cpu, Users, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Prosthodontist-Led Expertise",
    desc: "Every case is reviewed by certified prosthodontists ensuring clinical accuracy.",
  },
  {
    icon: Cpu,
    title: "State-of-the-Art Technology",
    desc: "CAD/CAM, 3D printing, and digital scanning powering every restoration.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    desc: "We work hand-in-hand with dentists for seamless treatment outcomes.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Design",
    desc: "Custom shade matching and ergonomic fit for natural-looking smiles.",
  },
];

export const WhyUs = () => {
  return (
    <section className="section-padding bg-gradient-soft relative overflow-hidden">
      <div className="container-px container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Built on <span className="gradient-text">trust</span>, powered by{" "}
            <span className="gradient-text">precision</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four pillars that make Nirmal Dental Labs the partner of choice for dental clinics.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50 hover:border-medical/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-medical/5 to-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: "0 0 30px hsl(var(--medical) / 0.25)" }} />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-soft group-hover:shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <f.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
