import { motion } from "framer-motion";
import beginningImg from "@assets/generated_images/vintage_film_young_athlete.png";
import grindImg from "@assets/generated_images/film_grain_training_montage.png";
import victoryImg from "@assets/generated_images/victory_celebration_film_photo.png";

const chapters = [
  {
    chapter: "01",
    title: "THE BEGINNING",
    year: "2020",
    description: "It started with a decision. Not a moment of confidence, but a moment of courage. You laced up, stepped out, and made a promise to yourself.",
    image: beginningImg,
  },
  {
    chapter: "02", 
    title: "THE GRIND",
    year: "2022",
    description: "The days blurred together. Early mornings, late nights, moments of doubt. But you showed up. Again and again. That's where champions are forged.",
    image: grindImg,
  },
  {
    chapter: "03",
    title: "THE VICTORY",
    year: "NOW",
    description: "Look at you now. Not just at the finish line, but transformed. Every scar a story, every setback a setup. You did this.",
    image: victoryImg,
  }
];

export function StoryTimeline() {
  return (
    <section className="py-20 bg-card/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 100px, hsl(25 95% 55% / 0.1) 100px, hsl(25 95% 55% / 0.1) 101px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display tracking-wider mb-4">
            YOUR <span className="text-stroke text-primary">STORY</span>
          </h2>
          <p className="text-muted-foreground tracking-wide">Every frame tells a chapter.</p>
        </motion.div>

        <div className="space-y-32">
          {chapters.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-1 w-full relative group">
                <div className="absolute -inset-4 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700 brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </div>
                
                {/* Chapter Number */}
                <div className="absolute -bottom-6 -right-6 md:-right-10 text-8xl md:text-9xl font-display text-primary/20 select-none">
                  {item.chapter}
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="text-xs text-primary tracking-[0.3em] mb-3">{item.year}</div>
                <h3 className="text-4xl md:text-5xl font-display tracking-wider mb-6">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
                  {item.description}
                </p>
                
                {/* Decorative Line */}
                <div className="mt-8 w-20 h-px bg-primary/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
