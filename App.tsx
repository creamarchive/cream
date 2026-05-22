import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ComingSoon from "./pages/ComingSoon.tsx";
import Index from "./pages/Index.tsx";
import NewArrivals from "./pages/NewArrivals.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import About from "./pages/About.tsx";
import CollectionCategory from "./pages/CollectionCategory.tsx";
import Editorial from "./pages/Editorial.tsx";
import Designers from "./pages/Designers.tsx";
import Source from "./pages/Source.tsx";
import ShippingReturns from "./pages/ShippingReturns.tsx";
import Press from "./pages/Press.tsx";
import Contact from "./pages/Contact.tsx";
import SizeGuide from "./pages/SizeGuide.tsx";
import Terms from "./pages/Terms.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/home" element={<Index />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/about" element={<About />} />
          
          <Route path="/collections/:category" element={<CollectionCategory />} />
          <Route path="/designers" element={<Designers />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/source" element={<Source />} />
          <Route path="/press" element={<Press />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
