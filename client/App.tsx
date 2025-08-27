import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Freelancers from "./pages/Freelancers";
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
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import ClientInvoices from "./pages/ClientInvoices";
import Saldo from "./pages/Saldo";
import Depositar from "./pages/Depositar";
import NotFound from "./pages/NotFound";
import ComoFunciona from "./pages/ComoFunciona";
import PlanosBeneficios from "./pages/PlanosBeneficios";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/dashboard/cliente" element={<ClientDashboard />} />
            <Route
              path="/dashboard/freelancer"
              element={<FreelancerDashboard />}
            />
            <Route path="/criar-projeto" element={<CreateProject />} />
            <Route path="/mensagens" element={<Messages />} />
            <Route path="/completar-perfil" element={<CompleteProfile />} />
            <Route path="/faturas" element={<ClientInvoices />} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/pix" element={<CheckoutPix />} />
            <Route path="/checkout/cartao" element={<CheckoutCartao />} />
            <Route path="/checkout/boleto" element={<CheckoutBoleto />} />
            <Route path="/pedido-confirmado" element={<PedidoConfirmado />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/saldo" element={<Saldo />} />
            <Route path="/depositar" element={<Depositar />} />
            <Route path="/planos-beneficios" element={<PlanosBeneficios />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
