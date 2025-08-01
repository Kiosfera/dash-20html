import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClientDashboard from "./pages/ClientDashboard";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import CreateProject from "./pages/CreateProject";
import Messages from "./pages/Messages";
import CompleteProfile from "./pages/CompleteProfile";
import Checkout from "./pages/Checkout";
import CheckoutPix from "./pages/CheckoutPix";
import CheckoutCartao from "./pages/CheckoutCartao";
import CheckoutBoleto from "./pages/CheckoutBoleto";
import PedidoConfirmado from "./pages/PedidoConfirmado";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard/cliente" element={<ClientDashboard />} />
          <Route
            path="/dashboard/freelancer"
            element={<FreelancerDashboard />}
          />
          <Route path="/criar-projeto" element={<CreateProject />} />
          <Route path="/mensagens" element={<Messages />} />
          <Route path="/completar-perfil" element={<CompleteProfile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/pix" element={<CheckoutPix />} />
          <Route path="/checkout/cartao" element={<CheckoutCartao />} />
          <Route path="/checkout/boleto" element={<CheckoutBoleto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
