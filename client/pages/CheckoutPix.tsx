import { useState, useEffect } from "react";
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
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import {
  ArrowLeft,
  Copy,
  QrCode,
  Clock,
  CheckCircle,
  Smartphone,
  Shield,
  RefreshCw,
} from "lucide-react";

export default function CheckoutPix() {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes
  const [pixCode] = useState(
    "00020126580014br.gov.bcb.pix013628767ba0-7e42-4e77-9e52-88fe6b5c3c345204000053039865802BR5925HOMEFLIP BRASIL LTDA6009SAO PAULO61088001000062070503***6304",
  );
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "pending" | "processing" | "completed"
  >("pending");

  const orderSummary = {
    subtotal: 299.9,
    discount: 14.99,
    pixDiscount: 14.24, // 5% adicional para PIX
    total: 270.67,
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simular geração do QR Code
    const timeout = setTimeout(() => {
      setQrCodeGenerated(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    toast.success("Código PIX copiado!");
  };

  const checkPayment = () => {
    setPaymentStatus("processing");
    // Simular verificação de pagamento
    setTimeout(() => {
      // Simular pagamento encontrado em 30% dos casos
      if (Math.random() > 0.7) {
        setPaymentStatus("completed");
        toast.success("Pagamento confirmado!");
        setTimeout(() => navigate("/pedido-confirmado"), 2000);
      } else {
        setPaymentStatus("pending");
        toast.info(
          "Pagamento ainda não encontrado. Tente novamente em alguns instantes.",
        );
      }
    }, 3000);
  };

  if (timeRemaining === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="text-center">
            <CardContent className="pt-16 pb-16">
              <Clock className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Tempo Expirado
              </h2>
              <p className="text-gray-600 mb-6">
                O tempo para pagamento via PIX expirou. Inicie um novo processo
                de pagamento.
              </p>
              <Button onClick={() => navigate("/checkout")} size="lg">
                Voltar ao Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/checkout")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">
            Pagamento via PIX
          </h1>
          <p className="text-gray-600 mt-2">
            Escaneie o QR Code ou copie o código PIX
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PIX Payment */}
          <div className="lg:col-span-2 space-y-6">
            {/* Timer */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Badge variant="outline" className="mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    Tempo restante: {formatTime(timeRemaining)}
                  </Badge>
                  <Progress
                    value={((600 - timeRemaining) / 600) * 100}
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* QR Code */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="w-5 h-5" />
                  QR Code PIX
                </CardTitle>
                <CardDescription>
                  Abra o app do seu banco e escaneie o QR Code abaixo
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!qrCodeGenerated ? (
                  <div className="text-center py-16">
                    <RefreshCw className="w-8 h-8 text-gray-400 mx-auto mb-4 animate-spin" />
                    <p className="text-gray-600">Gerando QR Code...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg border inline-block">
                      <div className="w-64 h-64 bg-gray-100 flex items-center justify-center">
                        <QrCode className="w-32 h-32 text-gray-400" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Use a câmera do seu celular ou app do banco para escanear
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* PIX Code */}
            <Card>
              <CardHeader>
                <CardTitle>Código PIX Copia e Cola</CardTitle>
                <CardDescription>
                  Ou copie o código abaixo e cole no seu app bancário
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm break-all select-all">
                    {pixCode}
                  </code>
                </div>
                <Button
                  onClick={copyPixCode}
                  variant="outline"
                  className="mt-4 w-full"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar Código PIX
                </Button>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Como pagar com PIX</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Abra o app do seu banco</p>
                      <p className="text-sm text-gray-600">
                        Acesse a área PIX do seu aplicativo bancário
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">
                        Escaneie o QR Code ou cole o código
                      </p>
                      <p className="text-sm text-gray-600">
                        Use a opção "Pagar com QR Code" ou "PIX Copia e Cola"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Confirme o pagamento</p>
                      <p className="text-sm text-gray-600">
                        Verifique os dados e confirme a transação
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Check Payment */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Button
                    onClick={checkPayment}
                    disabled={paymentStatus === "processing"}
                    size="lg"
                    className="w-full"
                  >
                    {paymentStatus === "processing" ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Verificando Pagamento...
                      </>
                    ) : paymentStatus === "completed" ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Pagamento Confirmado!
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Já Paguei
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">
                    Clique aqui após realizar o pagamento para verificar
                  </p>
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
                  <div className="flex justify-between text-green-600">
                    <span>Desconto PIX (5%)</span>
                    <span>-R$ {orderSummary.pixDiscount.toFixed(2)}</span>
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

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700">
                    <Smartphone className="w-4 h-4" />
                    <span className="font-medium">Pagamento via PIX</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">
                    Aprovação instantânea • 5% de desconto
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>Transação segura e criptografada</span>
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
