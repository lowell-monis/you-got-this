import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { Flame, Target, Trophy, Timer } from "lucide-react";

const progressData = [
  { day: 1, value: 20 },
  { day: 2, value: 35 },
  { day: 3, value: 30 },
  { day: 4, value: 50 },
  { day: 5, value: 45 },
  { day: 6, value: 70 },
  { day: 7, value: 85 },
];

const stats = [
  { label: "DAYS TRAINED", value: "127", icon: Flame, color: "text-primary" },
  { label: "GOALS HIT", value: "24", icon: Target, color: "text-secondary" },
  { label: "PERSONAL BESTS", value: "8", icon: Trophy, color: "text-primary" },
  { label: "HOURS INVESTED", value: "312", icon: Timer, color: "text-secondary" },
];

export function StatsGrid() {
  return (
    <section className="py-20 container mx-auto px-4">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-display tracking-wider mb-4">
          THE <span className="text-primary">NUMBERS</span>
        </h2>
        <p className="text-muted-foreground tracking-wide">Progress is proof.</p>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border p-6 text-center group hover:border-primary/50 transition-colors duration-300"
          >
            <stat.icon className={`w-6 h-6 mx-auto mb-4 ${stat.color} opacity-70 group-hover:opacity-100 transition-opacity`} strokeWidth={1.5} />
            <div className="text-4xl md:text-5xl font-display tracking-wide mb-2">{stat.value}</div>
            <div className="text-xs text-muted-foreground tracking-[0.2em]">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Progress Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border p-8"
      >
        <div className="flex justify-between items-end mb-6">
          <div>
            <h3 className="text-2xl font-display tracking-wider">WEEKLY MOMENTUM</h3>
            <p className="text-muted-foreground text-sm">Your consistency builds champions.</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-display text-primary">+42%</div>
            <div className="text-xs text-muted-foreground tracking-wider">VS LAST WEEK</div>
          </div>
        </div>
        
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={progressData}>
              <defs>
                <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(25 95% 55%)" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="hsl(25 95% 55%)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(25 95% 55%)" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorProgress)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </section>
  );
}
