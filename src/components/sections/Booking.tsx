import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Calendar as CalendarIcon, Clock, User, Phone, Building2, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().regex(/^[+\d\s-()]{7,20}$/, "Enter a valid phone"),
  clinic: z.string().trim().min(2, "Clinic name required").max(150),
  address: z.string().trim().min(5, "Address required").max(300),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
});

const fields = [
  { name: "name", label: "Full Name", icon: User, type: "text", placeholder: "Dr. Jane Doe" },
  { name: "phone", label: "Phone Number", icon: Phone, type: "tel", placeholder: "+91 90000 00000" },
  { name: "clinic", label: "Clinic Name", icon: Building2, type: "text", placeholder: "Bright Smiles Clinic" },
  { name: "address", label: "Clinic Address", icon: MapPin, type: "text", placeholder: "City, State" },
  { name: "date", label: "Preferred Date", icon: CalendarIcon, type: "date" },
  { name: "time", label: "Preferred Time", icon: Clock, type: "time" },
] as const;

export const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitted(true);
    toast.success("Booking received! We'll be in touch shortly.");
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="booking" className="section-padding relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-glow animate-float-slow" />
      </div>

      <div className="container-px container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-soft text-primary text-sm font-semibold mb-4">
              Book a Visit
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Let's start your <span className="gradient-text">partnership</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule a tour of our lab or a discovery call with our team.
            </p>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 md:p-10 shadow-elegant"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {fields.map((f) => (
                <div key={f.name} className={f.name === "address" ? "sm:col-span-2" : ""}>
                  <Label htmlFor={f.name} className="text-sm font-medium mb-2 flex items-center gap-2">
                    <f.icon className="w-4 h-4 text-medical" />
                    {f.label}
                  </Label>
                  <Input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    placeholder={"placeholder" in f ? f.placeholder : undefined}
                    required
                    className="h-12 rounded-xl bg-background/60 border-border transition-all focus-visible:ring-2 focus-visible:ring-medical/40 focus-visible:border-medical"
                  />
                </div>
              ))}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={submitted}
              className="w-full mt-8 h-14 bg-medical hover:bg-medical/90 text-medical-foreground rounded-xl text-base font-semibold shadow-medical hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              {submitted ? (
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Booking Received
                </span>
              ) : (
                "Confirm Booking"
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
