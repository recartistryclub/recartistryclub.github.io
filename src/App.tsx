import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Events from "./components/Events";
import EventDetail from "./components/EventDetail";

// ⬅️ Query client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* ✅ Background & global effects wrapper */}
          <div className="relative min-h-screen w-full bg-background overflow-hidden">
            {/* 🔥 Keep your 3D showcase background/effects */}
            <div className="absolute inset-0 -z-10">
              {/* If your Index has 3D canvas/effects, you can refactor them into a Background.tsx
                  and include here so it persists across routes */}
            </div>

            {/* Routes */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:title" element={<EventDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
