import { Hero } from "@/components/dashboard/Hero";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { StoryTimeline } from "@/components/dashboard/StoryTimeline";
import { QuoteCarousel } from "@/components/dashboard/QuoteCarousel";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div className="relative z-10 -mt-20">
        <StatsGrid />
      </div>
      <StoryTimeline />
      <QuoteCarousel />
      
      <footer className="py-8 text-center text-muted-foreground text-sm">
        <p>© 2026 You Got This. Designed with intention.</p>
      </footer>
    </div>
  );
}
