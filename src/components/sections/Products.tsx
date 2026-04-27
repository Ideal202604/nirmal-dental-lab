import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    img: "https://www.smileworkslab.com/assets/Zirconia%20Crowns%20and%20Bridges-DFWp7jWw.jpg",
    title: "Zirconia Crowns and Bridges",
    tag: "Most Popular",
    desc: "Strong, biocompatible monolithic and layered zirconia restorations.",
  },
  {
    img: "https://www.smileworkslab.com/assets/Glass%20Ceramics%201000x750-DTmKOfJ3.jpg",
    title: "Glass Ceramics",
    tag: "Best Aesthetics",
    desc: "Lifelike translucency with e.max® lithium disilicate ceramics.",
  },
  {
    img: "https://www.smileworkslab.com/assets/Metal%20Ceramic%201000x667-BUsTXyEr.jpg",
    title: "Metal Ceramic",
    tag: "Classic Choice",
    desc: "Time-tested PFM crowns with reliable strength and longevity.",
  },
  {
    img: "https://www.smileworkslab.com/assets/Implant%20Prosthesis-BYWiryEQ.jpg",
    title: "Implant Prosthetics",
    tag: "Advanced Tech",
    desc: "Custom abutments, screw-retained and cement-retained solutions.",
  },
  {
    img: "https://www.smileworkslab.com/assets/Acrylic%20Dentures-BiCLCT6u.jpg",
    title: "Acrylic Dentures",
    tag: "Patient Favorite",
    desc: "Comfortable full and partial dentures with natural aesthetics.",
  },
  {
    img: "https://www.smileworkslab.com/assets/Occlusal%20Guards-CsK2v-VS.jpg",
    title: "Occlusal Guards",
    tag: "Essential Care",
    desc: "Hard and soft splints for bruxism and occlusal protection.",
  },
];

export const Products = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll<HTMLElement>("[data-product-card]");
    const ctx = gsap.context(() => {
      gsap.from(cards, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" className="section-padding bg-gradient-soft relative overflow-hidden">
      <div className="container-px container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-medical-soft text-medical text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Restorations crafted for <span className="gradient-text">every smile</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete portfolio of dental prosthetics — from monolithic zirconia to advanced implant work.
          </p>
        </motion.div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.title}
              data-product-card
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 border border-border/50 hover:border-medical/40 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1000}
                  height={750}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-smooth"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-medical text-medical-foreground shadow-medical">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
