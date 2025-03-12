
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import DJ from "./pages/DJ";
import Photography from "./pages/Photography";
import Videography from "./pages/Videography";
import Producing from "./pages/Producing";
import ScriptWriting from "./pages/ScriptWriting";
import Booking from "./pages/Booking";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dj" element={<DJ />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/videography" element={<Videography />} />
            <Route path="/producing" element={<Producing />} />
            <Route path="/script-writing" element={<ScriptWriting />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
