import { motion } from "framer-motion";
import { Linkedin, Mail, Award } from "lucide-react";

const ankur = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80";
const lalit = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80";

const team = [
  {
    img: ankur,
    name: "Dr. Ankur Gupta",
    role: "CEO & Prosthodontist",
    exp: "13+ years",
    creds: "MDS (Prosthodontics)",
    bio: "A clinical leader passionate about merging digital dentistry with patient-first care.",
  },
  {
    img: lalit,
    name: "Mr. Lalit Sharma",
    role: "COO",
    exp: "20+ years",
    creds: "Operations & Manufacturing",
    bio: "Scaling lab operations with rigorous quality systems and on-time delivery.",
  },
];

export const Team = () => {
  return (
    <section id="team" className="section-padding bg-gradient-soft relative overflow-hidden">
      <div className="container-px container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-semibold mb-4">
            Leadership
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="gradient-text">people</span> behind the precision
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elegant hover:ring-2 hover:ring-medical/40 transition-all border border-border/50"
            >
              <div
                className="relative aspect-[3/4] overflow-hidden bg-secondary"
                style={{ boxShadow: "0px 0px 25px rgba(255, 215, 0, 0.6)" }}
              >
                <img
                  src={m.img}
                  alt={m.name}
                  width={1365}
                  height={2048}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.06] transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-medical hover:text-medical-foreground transition-all" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#contact" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-medical hover:text-medical-foreground transition-all" aria-label="Email">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-display text-2xl font-bold">{m.name}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary-soft text-primary font-semibold">
                    {m.exp}
                  </span>
                </div>
                <div className="text-primary font-semibold mb-2">{m.role}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Award className="w-4 h-4" />
                  {m.creds}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
