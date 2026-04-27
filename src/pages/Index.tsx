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

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
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
