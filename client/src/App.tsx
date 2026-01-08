import { Switch, Route, Router } from "wouter"; // 1. Add 'Router' to your imports
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 2. Wrap everything in <Router base="/you-got-this"> */}
      <Router base="/you-got-this">
        <Switch>
          <Route path="/" component={Home} />
          {/* fallback to 404 */}
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
