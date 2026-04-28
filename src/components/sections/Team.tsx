import { motion } from "framer-motion";
import { Award } from "lucide-react";

const team = [
  {
    img: "https://res.cloudinary.com/duhhsnbwh/image/upload/v1777356110/chrome_em8E2oE3an_ozvjmb.png",
    name: "Dr. XYZ ABC",
    role: "CEO & Prosthodontist",
    exp: "13+ years",
    creds: "MDS (Prosthodontics)",
    bio: "A clinical leader passionate about merging digital dentistry with patient-first care.",
  },
  {
    img: "https://res.cloudinary.com/duhhsnbwh/image/upload/v1777356110/chrome_DwleDcU1s0_a0atov.png",
    name: "Mr. XYZ DEF",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 border border-border/60 h-full flex flex-col relative"
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="text-xs px-3 py-1 rounded-full bg-primary-soft text-primary font-semibold shadow-sm">
                  {m.exp}
                </span>
              </div>
              <div className="w-full h-[280px] overflow-hidden bg-secondary relative rounded-t-xl">
                <img
                  src={m.img}
                  alt={m.name}
                  width={1365}
                  height={2048}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4 pt-6">
                <div>
                  <div className="mb-3">
                    <h3 className="font-display text-2xl font-bold">{m.name}</h3>
                  </div>
                  <div className="text-primary font-semibold mb-2">{m.role}</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Award className="w-4 h-4" />
                    {m.creds}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};