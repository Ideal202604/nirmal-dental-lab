import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";
const logo = "https://res.cloudinary.com/dy1tvxa9x/image/upload/v1777289993/WhatsApp_Image_2026-04-27_at_5.01.34_PM_e3fmnv.jpg";

const links = [
  { label: "Home", href: "#home" },
  { label: "Vision", href: "#vision" },
  { label: "Products", href: "#products" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Active link detection
      const offsets = links
        .map((l) => {
          const el = document.querySelector(l.href) as HTMLElement | null;
          return el ? { href: l.href, top: el.getBoundingClientRect().top } : null;
        })
        .filter(Boolean) as { href: string; top: number }[];
      const current = offsets
        .filter((o) => o.top <= 120)
        .sort((a, b) => b.top - a.top)[0];
      if (current) setActive(current.href);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-5"
      )}
    >
      <div className="container-px">
        <nav
          className={cn(
            "w-full flex items-center rounded-2xl transition-all duration-300",
            scrolled
              ? "glass shadow-soft pl-2 pr-5 md:pl-4 md:pr-8 py-3"
              : "bg-transparent pl-2 pr-5 md:pl-4 md:pr-8 py-4"
          )}
        >
          <div className="flex items-center gap-2 mr-auto">
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2 group"
              aria-label="Nirmal Dental Labs home"
            >
              <img
                src={logo}
                alt="Nirmal Dental Labs"
                width={248}
                height={82}
                className={cn(
                  "object-contain transition-all duration-300 group-hover:scale-105 rounded-xl",
                  scrolled ? "h-12 md:h-14" : "h-14 md:h-[4.25rem]"
                )}
              />
            </button>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center gap-3">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold transition-colors story-link",
                    isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg bg-primary-soft"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-xl"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
        
                >
                  {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </motion.span>
              </AnimatePresence>
            </Button>

            <Button
              onClick={() => scrollTo("#booking")}
              className="hidden sm:inline-flex btn-glow bg-medical hover:bg-medical/90 text-medical-foreground rounded-xl shadow-medical hover:shadow-glow transition-all hover:scale-105 px-6"
            >
              Book a Visit
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden rounded-xl"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-2xl p-4 shadow-elegant"
            >
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="px-4 py-3 text-left text-sm font-medium hover:bg-primary-soft rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollTo("#booking")}
                  className="mt-2 bg-medical text-medical-foreground rounded-xl"
                >
                  Book a Visit
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
