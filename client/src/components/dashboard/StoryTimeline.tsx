import { motion } from "framer-motion";
import sproutImg from "@assets/generated_images/small_sprout_growing.png";
import saplingImg from "@assets/generated_images/young_tree_growing.png";
import treeImg from "@assets/generated_images/blooming_flower_tree.png";

const milestones = [
  {
    title: "The Beginning",
    description: "Every great journey starts with a single, small step. You planted the seed of intention.",
    date: "Day 1",
    image: sproutImg,
    align: "left"
  },
  {
    title: "Finding Strength",
    description: "Challenges came, but you stood firm. Your roots grew deeper, anchoring you in purpose.",
    date: "Day 15",
    image: saplingImg,
    align: "right"
  },
  {
    title: "Full Bloom",
    description: "Look at you now. Thriving, growing, and sharing your gifts with the world.",
    date: "Today",
    image: treeImg,
    align: "left"
  }
];

export function StoryTimeline() {
  return (
    <section className="py-20 bg-white/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Your Growth Journey</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
             A visual timeline of your resilience and progress.
          </p>
        </div>

        <div className="space-y-24">
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                item.align === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-0 duration-500" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="relative z-10 w-full rounded-[2rem] shadow-lg transform -rotate-2 transition-transform group-hover:rotate-0 duration-500 hover:shadow-xl"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs font-bold mb-4">
                  {item.date}
                </span>
                <h3 className="text-3xl font-display font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
