import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const quotes = [
  { text: "IMPOSSIBLE IS NOTHING.", author: "Adidas" },
  { text: "IT'S NOT ABOUT THE SHOES. IT'S ABOUT WHAT YOU DO IN THEM.", author: "Michael Jordan" },
  { text: "THE ONLY WAY TO PROVE YOU'RE A GOOD SPORT IS TO LOSE.", author: "Ernie Banks" },
  { text: "HARD WORK BEATS TALENT WHEN TALENT DOESN'T WORK HARD.", author: "Tim Notke" }
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
    <section className="py-32 container mx-auto px-4">
      <div className="relative text-center">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[15vw] font-display text-muted/30 tracking-widest">BELIEVE</span>
        </div>
        
        <div className="relative z-10 min-h-[300px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="text-3xl md:text-6xl font-display tracking-wider leading-tight mb-8">
                "{quotes[index].text}"
              </p>
              <p className="text-sm text-muted-foreground tracking-[0.3em]">
                — {quotes[index].author.toUpperCase()}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              data-testid={`button-quote-${i}`}
              className={`h-1 transition-all duration-500 ${
                i === index ? "bg-primary w-12" : "bg-muted-foreground/30 w-4 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
