import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const quotes = [
  "Believe you can and you're halfway there.",
  "Your potential is endless. Go do what you were created to do.",
  "Small steps in the right direction can turn out to be the biggest step of your life.",
  "Don't watch the clock; do what it does. Keep going."
];

export function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="bg-linear-to-br from-primary to-primary/80 rounded-3xl p-10 md:p-20 text-center text-primary-foreground relative overflow-hidden shadow-2xl">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        
        <Quote className="w-12 h-12 mx-auto mb-8 opacity-50" />
        
        <div className="relative h-32 md:h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-display font-medium leading-tight max-w-4xl"
            >
              "{quotes[index]}"
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
