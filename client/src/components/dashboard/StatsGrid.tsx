import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer, BarChart, Bar, RadialBarChart, RadialBar } from "recharts";
import { Flame, Target, Trophy, Timer, TrendingUp, Heart, Zap, Mountain } from "lucide-react";

const progressData = [
  { day: 1, value: 20 },
  { day: 2, value: 35 },
  { day: 3, value: 30 },
  { day: 4, value: 50 },
  { day: 5, value: 45 },
  { day: 6, value: 70 },
  { day: 7, value: 85 },
];

const weeklyData = [
  { name: "M", value: 65 },
  { name: "T", value: 80 },
  { name: "W", value: 45 },
  { name: "T", value: 90 },
  { name: "F", value: 75 },
  { name: "S", value: 100 },
  { name: "S", value: 60 },
];

const radialData = [{ value: 78, fill: "hsl(25 95% 55%)" }];

const stats = [
  { label: "DAYS TRAINED", value: "127", icon: Flame, color: "text-primary" },
  { label: "GOALS HIT", value: "24", icon: Target, color: "text-secondary" },
  { label: "PERSONAL BESTS", value: "8", icon: Trophy, color: "text-primary" },
  { label: "HOURS INVESTED", value: "312", icon: Timer, color: "text-secondary" },
];

const VisualizationCard = ({ title, subtitle, children, delay, icon: Icon }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-card border border-border p-6 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
    <div className="flex items-start justify-between mb-4 relative z-10">
      <div>
        <h3 className="text-lg font-display tracking-wider">{title}</h3>
        <p className="text-xs text-muted-foreground tracking-wide">{subtitle}</p>
      </div>
      {Icon && <Icon className="w-5 h-5 text-primary opacity-60" strokeWidth={1.5} />}
    </div>
    <div className="h-36 relative z-10">{children}</div>
  </motion.div>
);

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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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

      {/* Visualization Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <VisualizationCard title="WEEKLY MOMENTUM" subtitle="Consistency builds champions" delay={0.1} icon={TrendingUp}>
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
        </VisualizationCard>

        <VisualizationCard title="DAILY OUTPUT" subtitle="Every rep counts" delay={0.2} icon={Zap}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData} barCategoryGap="20%">
              <Bar dataKey="value" fill="hsl(180 40% 40%)" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </VisualizationCard>

        <VisualizationCard title="OVERALL SCORE" subtitle="Your performance index" delay={0.3} icon={Mountain}>
          <div className="flex items-center justify-center h-full">
            <div className="relative">
              <ResponsiveContainer width={120} height={120}>
                <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" data={radialData} startAngle={90} endAngle={-270}>
                  <RadialBar background={{ fill: "hsl(220 10% 18%)" }} dataKey="value" cornerRadius={10} />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-display">78</span>
              </div>
            </div>
          </div>
        </VisualizationCard>
      </div>

      {/* Additional Visualization Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <VisualizationCard title="HEART RATE ZONES" subtitle="Training intensity distribution" delay={0.4} icon={Heart}>
          <div className="flex items-end justify-between h-full gap-2 pb-2">
            {[40, 65, 85, 95, 70, 55, 45, 60, 80, 90, 75, 50].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                className="flex-1 rounded-t-sm"
                style={{ 
                  background: h > 80 
                    ? "hsl(25 95% 55%)" 
                    : h > 60 
                      ? "hsl(180 40% 40%)" 
                      : "hsl(220 10% 30%)" 
                }}
              />
            ))}
          </div>
        </VisualizationCard>

        <VisualizationCard title="RECOVERY STATUS" subtitle="Rest to perform" delay={0.5} icon={Timer}>
          <div className="flex flex-col justify-center h-full gap-3">
            {[
              { label: "SLEEP QUALITY", value: 85 },
              { label: "MUSCLE RECOVERY", value: 72 },
              { label: "MENTAL READINESS", value: 90 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground tracking-wider">{item.label}</span>
                  <span className="text-foreground">{item.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </VisualizationCard>
      </div>
    </section>
  );
}
