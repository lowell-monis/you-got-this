import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";
import { Activity, Brain, Zap, Heart } from "lucide-react";

const focusData = [
  { time: "9am", value: 30 },
  { time: "11am", value: 85 },
  { time: "1pm", value: 60 },
  { time: "3pm", value: 90 },
  { time: "5pm", value: 75 },
];

const energyData = [
  { name: "Rest", value: 30 },
  { name: "Active", value: 70 },
];

const StatCard = ({ title, value, subtext, icon: Icon, children, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-muted-foreground text-sm font-medium mb-1">{title}</h3>
        <div className="text-3xl font-display font-bold text-foreground">{value}</div>
      </div>
      <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-5 h-5" />
      </div>
    </div>
    
    <div className="h-32 w-full mt-2">
      {children}
    </div>
    
    <p className="mt-4 text-xs text-muted-foreground font-medium flex items-center gap-2">
      <span className="text-accent-foreground bg-accent/30 px-2 py-0.5 rounded-full">
        +12%
      </span>
      {subtext}
    </p>
  </motion.div>
);

export function StatsGrid() {
  return (
    <section className="py-12 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-display font-bold mb-2">Your Vitality</h2>
          <p className="text-muted-foreground">Tracking your personal growth metrics.</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-sm font-medium text-primary">Last updated: Just now</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Focus Score" 
          value="8.5" 
          subtext="Peak flow state achieved today"
          icon={Brain}
          delay={0.1}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={focusData}>
              <defs>
                <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="var(--color-primary)" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorFocus)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </StatCard>

        <StatCard 
          title="Energy Level" 
          value="High" 
          subtext="Great balance of rest & activity"
          icon={Zap}
          delay={0.2}
        >
          <ResponsiveContainer width="100%" height="100%">
             <PieChart>
              <Pie
                data={energyData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={5}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                <Cell key="cell-0" fill="var(--color-muted)" stroke="none" />
                <Cell key="cell-1" fill="var(--color-secondary)" stroke="none" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </StatCard>

        <StatCard 
          title="Mindfulness" 
          value="45m" 
          subtext="Meditation session completed"
          icon={Heart}
          delay={0.3}
        >
           <div className="flex items-center justify-center h-full">
              <div className="relative w-24 h-24 flex items-center justify-center">
                 <motion.div 
                   className="absolute inset-0 bg-accent/30 rounded-full"
                   animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.4, 0.7] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 />
                 <motion.div 
                   className="absolute inset-4 bg-accent/50 rounded-full"
                   animate={{ scale: [1, 1.1, 1], opacity: [0.8, 0.5, 0.8] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                 />
                 <Heart className="w-8 h-8 text-accent-foreground relative z-10" fill="currentColor" />
              </div>
           </div>
        </StatCard>
      </div>
    </section>
  );
}
