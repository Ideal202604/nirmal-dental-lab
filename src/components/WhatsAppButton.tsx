import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919667773310"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
    whileHover={{ scale: 1.1, rotate: -8 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-4 md:right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center hover:shadow-glow transition-all"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-pulse" />
    <MessageCircle className="w-6 h-6 relative z-10" fill="white" />
  </motion.a>
);
