import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found"; // Check if this should be NotFound.tsx
import Home from "@/pages/Home"; // Updated to match likely 'Home.tsx' casing

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 'base' ensures wouter ignores the /you-got-this/ URL prefix */}
      <Router base="/you-got-this">
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
