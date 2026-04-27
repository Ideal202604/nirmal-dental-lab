import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const aboutImg = "https://www.smileworkslab.com/assets/About-Us-Image-CTwG-VK8.jpg";

const points = [
  "Prosthodontist-led clinical excellence",
  "Digital workflows from scan to delivery",
  "Trusted by 200+ partner clinics",
];

export const About = () => {
  const scroll = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="vision" className="section-padding relative overflow-hidden">
      <div className="container-px container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-primary rounded-[2rem] opacity-20 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant">
              <img
                src={aboutImg}
                alt="Dental laboratory technician at work"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            {/* Stat card */}
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-elegant max-w-[200px]">
              <div className="font-display text-3xl font-bold gradient-text">99.8%</div>
              <div className="text-xs text-muted-foreground mt-1">Case fit accuracy</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-semibold mb-4">
              Our Vision
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Redefining dental lab services through{" "}
              <span className="gradient-text">precision and care</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We aim to redefine dental lab services by combining clinical expertise with
              the latest in digital dentistry. Every restoration we craft is tailored to
              the patient — backed by science, perfected through artistry.
            </p>

            <ul className="space-y-3 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              onClick={scroll}
              className="bg-gradient-primary text-primary-foreground rounded-xl shadow-soft hover:shadow-glow group h-12 px-7"
            >
              Let's partner to create healthier, more confident smiles
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
