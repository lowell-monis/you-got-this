import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_sunrise_over_soft_hills.png";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-white/50 backdrop-blur-md rounded-full text-primary-foreground/80 border border-white/40 shadow-sm text-primary">
            Daily Dashboard
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 tracking-tight">
            You got this, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Keep going.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Every small step is progress. Take a breath, look at how far you've come, and embrace the journey ahead.
          </p>
        </motion.div>

        {/* Floating Abstract Shapes */}
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl mix-blend-multiply"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl mix-blend-multiply"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-6 h-6 opacity-50" />
      </motion.div>
    </div>
  );
}
