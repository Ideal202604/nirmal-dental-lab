import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SecondaryBanner } from "@/components/sections/SecondaryBanner";
import { About } from "@/components/sections/About";
import { WhyUs } from "@/components/sections/WhyUs";
import { Technology } from "@/components/sections/Technology";
import { Products } from "@/components/sections/Products";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("main section");
      sections.forEach((section, index) => {
        if (index === 0) return;
        gsap.from(section, {
          autoAlpha: 0,
          y: 34,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
            once: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <SecondaryBanner />
      <About />
      <WhyUs />
      <Technology />
      <Products />
      <Process />
      <Team />
      <Booking />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
};

export default Index;
