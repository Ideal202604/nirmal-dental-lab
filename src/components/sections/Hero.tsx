import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "@/assets/hero-dental.jpg";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-copy]", {
        opacity: 0,
        y: 44,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.85,
        delay: 0.22,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 36,
        scale: 0.94,
        duration: 1.05,
        delay: 0.18,
        ease: "power3.out",
      });

      gsap.to(imageRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.45,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative py-16 md:py-20 overflow-hidden bg-gradient-hero"
    >
      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-glow animate-float-slow" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-glow animate-float-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-px container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div ref={textRef}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium"
              data-hero-copy
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Prosthodontist-Led Dental Lab</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6" data-hero-copy>
              Restoring Smiles with{" "}
              <span className="gradient-text">Precision</span> &{" "}
              <span className="gradient-text">Innovation</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed" data-hero-copy>
              Empowering dental professionals with advanced prosthodontic solutions.
            </p>

            <motion.div
              ref={ctaRef}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
              }}
              className="flex flex-wrap gap-4"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Button
                  size="lg"
                  onClick={() => scrollTo("booking")}
                  className="btn-glow bg-medical hover:bg-medical/90 text-medical-foreground rounded-xl shadow-medical hover:shadow-glow transition-all duration-300 group h-14 px-8 hover:scale-105"
                >
                  Book a Visit
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollTo("products")}
                  className="rounded-xl h-14 px-8 border-2 hover:bg-primary-soft hover:scale-105 transition-all duration-300"
                >
                  <Play className="mr-2 w-4 h-4" />
                  Explore Products
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg" data-hero-copy>
              {[
                { v: "13+", l: "Years Expertise" },
                { v: "5K+", l: "Cases Delivered" },
                { v: "200+", l: "Partner Clinics" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                    {s.v}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="Premium dental crown prosthetic"
                width={1536}
                height={1024}
                loading="eager"
                decoding="async"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex sm:absolute sm:-left-4 md:sm:-left-8 sm:top-1/4 glass rounded-2xl p-4 shadow-elegant"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">CAD/CAM</div>
                  <div className="font-semibold text-sm">Digital Precision</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 md:-right-8 bottom-1/4 glass rounded-2xl p-4 shadow-elegant"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div>
                  <div className="text-xs text-muted-foreground">Quality</div>
                  <div className="font-semibold text-sm">ISO Certified</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
