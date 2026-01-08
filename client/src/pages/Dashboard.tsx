import { Hero } from "@/components/dashboard/Hero";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { StoryTimeline } from "@/components/dashboard/StoryTimeline";
import { QuoteCarousel } from "@/components/dashboard/QuoteCarousel";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background film-grain">
      <Hero />
      <StatsGrid />
      <StoryTimeline />
      <QuoteCarousel />
      
      <footer className="py-12 text-center border-t border-border">
        <p className="text-muted-foreground text-xs tracking-[0.3em]">
          © 2026 YOU GOT THIS. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
