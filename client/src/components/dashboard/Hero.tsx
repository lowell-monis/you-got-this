import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/dark_athletic_runner_silhouette.png";
import { ArrowDown } from "lucide-react"; // Keep ArrowDown
import { useState } from "react";

export function Hero() {


  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center film-grain">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground border border-muted-foreground/30 rounded-none">
            YOUR STORY
          </span>
          
          <h1 className="text-6xl md:text-[10rem] font-display text-foreground mb-4 leading-[0.85] tracking-wider glow-orange">
            YOU GOT
            <br />
            <span className="text-primary">THIS.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mt-8 font-light tracking-wide leading-relaxed">
            Every champion was once a contender who refused to give up.
          </p>
        </motion.div>

        {/* Decorative Lines */}
        <motion.div 
          className="absolute left-10 top-1/2 -translate-y-1/2 w-px h-32 bg-linear-to-b from-transparent via-primary/50 to-transparent hidden md:block"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.div 
          className="absolute right-10 top-1/2 -translate-y-1/2 w-px h-32 bg-linear-to-b from-transparent via-primary/50 to-transparent hidden md:block"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-5 h-5" strokeWidth={1} />
      </motion.div>
    </div>
  );
}
