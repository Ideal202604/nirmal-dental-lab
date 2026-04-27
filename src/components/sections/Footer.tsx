import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
const logo = "https://res.cloudinary.com/dy1tvxa9x/image/upload/v1777289993/WhatsApp_Image_2026-04-27_at_5.01.34_PM_e3fmnv.jpg";

const cols = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "Vision", href: "#vision" },
      { label: "Products", href: "#products" },
      { label: "Team", href: "#team" },
      { label: "Book a Visit", href: "#booking" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Zirconia Crowns", href: "#products" },
      { label: "Glass Ceramics", href: "#products" },
      { label: "Implant Prosthetics", href: "#products" },
      { label: "Acrylic Dentures", href: "#products" },
      { label: "Occlusal Guards", href: "#products" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container-px container relative z-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-5">
              <img
                src={logo}
                alt="Nirmal Dental Labs"
                width={200}
                height={50}
                className="h-10 w-auto object-contain bg-white/90 rounded-lg p-2"
              />
            </div>
            <p className="text-sm text-background/70 leading-relaxed mb-5">
              A premium prosthodontist-led dental laboratory delivering precision restorations across India.
            </p>
            <div className="flex gap-2">
              {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-xl bg-background/10 hover:bg-gradient-primary flex items-center justify-center transition-all hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-background/70 hover:text-medical-glow transition-all inline-flex items-center hover:translate-x-1"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© {new Date().getFullYear()} Nirmal Dental Labs. All rights reserved.</p>
          <p>Crafted with precision in New Delhi, India.</p>
        </div>
      </div>
    </footer>
  );
};
