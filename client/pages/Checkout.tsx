import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CreditCard,
  Smartphone,
  FileText,
  ArrowLeft,
  Shield,
  Star,
} from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  const paymentMethods = [
    {
      id: "pix",
      name: "PIX",
      description: "Pagamento instantâneo via PIX",
      icon: Smartphone,
      badge: "Instantâneo",
      discount: "5% de desconto",
      route: "/checkout/pix",
    },
    {
      id: "credit-card",
      name: "Cartão de Crédito",
      description: "Visa, Mastercard, Elo, American Express",
      icon: CreditCard,
      badge: "Parcelado",
      discount: "Em até 12x sem juros",
      route: "/checkout/cartao",
    },
    {
      id: "boleto",
      name: "Boleto Bancário",
      description: "Pagamento através de boleto bancário",
      icon: FileText,
      badge: "3 dias úteis",
      discount: "2% de desconto",
      route: "/checkout/boleto",
    },
  ];

  const orderSummary = {
    subtotal: 299.9,
    discount: 14.99,
    shipping: 0,
    total: 284.91,
  };

  const handlePaymentMethodSelect = (method: (typeof paymentMethods)[0]) => {
    setSelectedMethod(method.id);
  };

  const handleContinue = () => {
    const method = paymentMethods.find((m) => m.id === selectedMethod);
    if (method) {
      navigate(method.route);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Finalizar Pedido</h1>
          <p className="text-gray-600 mt-2">
            Escolha sua forma de pagamento preferida
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Métodos de Pagamento
                </CardTitle>
                <CardDescription>
                  Selecione a forma de pagamento que preferir. Todas as
                  transações são seguras e criptografadas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedMethod === method.id
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handlePaymentMethodSelect(method)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-full ${
                              selectedMethod === method.id
                                ? "bg-primary text-white"
                                : "bg-gray-100"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{method.name}</h3>
                              <Badge variant="secondary">{method.badge}</Badge>
                            </div>
                            <p className="text-sm text-gray-600">
                              {method.description}
                            </p>
                            <p className="text-sm text-green-600 font-medium">
                              {method.discount}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            selectedMethod === method.id
                              ? "border-primary bg-primary"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedMethod === method.id && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Security Info */}
            <Card className="mt-6">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>
                    Suas informações estão protegidas com criptografia SSL de
                    256 bits
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R$ {orderSummary.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Desconto</span>
                    <span>-R$ {orderSummary.discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span className="text-green-600">GRÁTIS</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>R$ {orderSummary.total.toFixed(2)}</span>
                </div>

                <Button
                  onClick={handleContinue}
                  disabled={!selectedMethod}
                  className="w-full"
                  size="lg"
                >
                  Continuar para Pagamento
                </Button>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>Compra 100% segura e garantida</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
