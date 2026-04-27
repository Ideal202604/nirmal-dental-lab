import { motion } from "framer-motion";
import { Scan, Layers3, Printer, Microscope, Sparkles, Zap } from "lucide-react";
import labImg from "@/assets/lab-tech.jpg";

const techs = [
  { icon: Scan, label: "3D Intra-oral Scanning" },
  { icon: Layers3, label: "CAD Design Suite" },
  { icon: Printer, label: "5-Axis CAD/CAM Milling" },
  { icon: Microscope, label: "Precision QC" },
  { icon: Sparkles, label: "Ceramic Layering" },
  { icon: Zap, label: "3D Resin Printing" },
];

export const Technology = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-px container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-semibold mb-4">
              Our Technology
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A <span className="gradient-text">fully digital</span> laboratory workflow
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From digital impressions to milled restorations, every step is engineered
              for accuracy, predictability and faster turnarounds.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {techs.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-soft transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center group-hover:bg-gradient-primary transition-all">
                    <t.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-medium text-sm">{t.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-primary rounded-[2rem] opacity-20 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant">
              <img
                src={labImg}
                alt="Modern dental laboratory technology"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
