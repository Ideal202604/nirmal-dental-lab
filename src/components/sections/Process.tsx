import { motion } from "framer-motion";
import { ScanLine, PenTool, Settings2, Truck } from "lucide-react";

const steps = [
  { icon: ScanLine, title: "Scan", desc: "Digital intra-oral scans or impressions are received and verified." },
  { icon: PenTool, title: "Design", desc: "Our prosthodontists design every restoration in CAD with precision." },
  { icon: Settings2, title: "Manufacture", desc: "Milled, layered or 3D printed in our state-of-the-art facility." },
  { icon: Truck, title: "Deliver", desc: "Quality-checked and delivered to your clinic — on time, every time." },
];

export const Process = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-px container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            From scan to smile in <span className="gradient-text">4 steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">A streamlined, transparent workflow built for dental professionals.</p>
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-8 md:gap-4">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center group"
            >
              <div className="relative inline-flex">
                <div className="w-24 h-24 rounded-3xl bg-card border border-border shadow-card group-hover:shadow-elegant flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-all relative z-10">
                  <s.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm flex items-center justify-center shadow-glow z-20">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
