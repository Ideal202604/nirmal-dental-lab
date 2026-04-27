import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  "Renewing Confidence Through Advanced Dental Technology",
  "Crafting Precision Prosthetics, One Smile at a Time",
  "Where Artistry Meets Cutting-Edge Dental Engineering",
];

export const SecondaryBanner = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-primary">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white/20 blur-3xl" />
      </div>
      <div className="container-px container relative z-10 text-center">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            {slides[idx]}
          </h2>
        </motion.div>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-10 bg-primary-foreground" : "w-2 bg-primary-foreground/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
