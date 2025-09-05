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
import UpcomingEvents from "./components/UpcomingEvents"; 
import OurTeam from "./components/OurTeam"; // ✅ Correct path


// ⬅️ Query client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative min-h-screen w-full bg-background overflow-hidden">
            <div className="absolute inset-0 -z-10"></div>

            {/* Routes */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/upcoming-events" element={<UpcomingEvents />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:title" element={<EventDetail />} />
              <Route path="/our-team" element={<OurTeam />} /> {/* ✅ New route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
