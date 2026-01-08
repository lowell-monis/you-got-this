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

function FilmSprockets({ side }: { side: "left" | "right" }) {
  return (
    <div className={`absolute top-0 bottom-0 ${side === "left" ? "left-0" : "right-0"} w-6 bg-zinc-900 flex flex-col justify-between py-2 z-20`}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="w-4 h-3 bg-zinc-800 rounded-sm mx-auto border border-zinc-700" />
      ))}
    </div>
  );
}

function FilmFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative bg-zinc-900 p-1 ${className}`}>
      {/* Film strip container */}
      <div className="relative">
        {/* Sprocket holes - left */}
        <FilmSprockets side="left" />
        
        {/* Sprocket holes - right */}
        <FilmSprockets side="right" />
        
        {/* Image container with film border */}
        <div className="mx-8 relative">
          {/* Top film edge markings */}
          <div className="absolute -top-1 left-0 right-0 h-1 bg-zinc-800 flex items-center justify-between px-4">
            <span className="text-[6px] text-zinc-600 font-mono">KODAK 5207</span>
            <span className="text-[6px] text-zinc-600 font-mono">24</span>
          </div>
          
          {/* The actual image */}
          <div className="border-4 border-zinc-800 relative overflow-hidden">
            {children}
            {/* Film grain overlay */}
            <div className="absolute inset-0 bg-orange-500/5 mix-blend-overlay pointer-events-none" />
          </div>
          
          {/* Bottom film edge markings */}
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-zinc-800 flex items-center justify-between px-4">
            <div className="flex gap-2">
              {[1, 2, 3].map(n => (
                <span key={n} className="text-[6px] text-zinc-600 font-mono">▲</span>
              ))}
            </div>
            <span className="text-[6px] text-zinc-600 font-mono">35mm</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StoryTimeline() {
  return (
    <section className="py-20 bg-card/50 relative overflow-hidden">
      {/* Vertical film strip decoration on sides */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800 hidden lg:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-zinc-800 hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs text-muted-foreground tracking-[0.3em]">FILM REEL</span>
            <div className="w-12 h-px bg-primary" />
          </div>
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
              {/* Film Frame Image */}
              <div className="flex-1 w-full relative">
                <FilmFrame>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700 brightness-90 contrast-110"
                  />
                </FilmFrame>
                
                {/* Chapter Number */}
                <div className="absolute -bottom-8 -right-4 md:-right-10 text-8xl md:text-9xl font-display text-primary/20 select-none">
                  {item.chapter}
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="text-xs text-primary tracking-[0.3em] mb-3 flex items-center gap-3">
                  <span className="inline-block w-8 h-px bg-primary" />
                  {item.year}
                </div>
                <h3 className="text-4xl md:text-5xl font-display tracking-wider mb-6">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
                  {item.description}
                </p>
                
                {/* Film counter decoration */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex gap-1">
                    {[1, 2, 3].map(n => (
                      <div key={n} className="w-2 h-2 border border-muted-foreground/30" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground font-mono tracking-wider">
                    FRAME {item.chapter} OF 03
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Film reel decoration at bottom */}
        <motion.div 
          className="mt-32 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-6">
            <FilmReel />
            <div className="w-32 h-px bg-gradient-to-r from-primary via-primary/50 to-transparent" />
            <span className="text-xs text-muted-foreground tracking-[0.3em]">TO BE CONTINUED...</span>
            <div className="w-32 h-px bg-gradient-to-l from-primary via-primary/50 to-transparent" />
            <FilmReel />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FilmReel() {
  return (
    <div className="relative w-16 h-16">
      {/* Outer ring */}
      <div className="absolute inset-0 border-2 border-muted-foreground/30 rounded-full" />
      {/* Inner ring */}
      <div className="absolute inset-3 border border-muted-foreground/20 rounded-full" />
      {/* Center hub */}
      <div className="absolute inset-6 bg-muted-foreground/10 rounded-full" />
      {/* Spokes */}
      {[0, 60, 120, 180, 240, 300].map(deg => (
        <div 
          key={deg}
          className="absolute top-1/2 left-1/2 w-6 h-px bg-muted-foreground/20 origin-left"
          style={{ transform: `rotate(${deg}deg)` }}
        />
      ))}
    </div>
  );
}
