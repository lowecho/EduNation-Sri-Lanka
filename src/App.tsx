import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/lib/i18n";
import AppLayout from "@/components/AppLayout";
import ThemeProvider from "@/components/ThemeProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import DonateBooks from "./pages/DonateBooks";
import DonateFunds from "./pages/DonateFunds";
import HowItWorks from "./pages/HowItWorks";
import Impact from "./pages/Impact";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import Updates from "./pages/Updates";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <I18nProvider>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/donate-books" element={<DonateBooks />} />
                <Route path="/donate-funds" element={<DonateFunds />} />
                <Route path="/donate-money" element={<DonateFunds />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/updates" element={<Updates />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Route>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </I18nProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
