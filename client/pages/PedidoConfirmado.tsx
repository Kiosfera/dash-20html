import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Package, 
  Truck, 
  MapPin, 
  Calendar,
  Download,
  Mail,
  Phone,
  Home,
  Star
} from "lucide-react";

export default function PedidoConfirmado() {
  const navigate = useNavigate();

  const orderData = {
    orderNumber: "HF-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toLocaleDateString('pt-BR'),
    estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR'),
    total: 284.91,
    paymentMethod: "PIX",
    status: "Confirmado"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pedido Confirmado!</h1>
          <p className="text-gray-600">
            Obrigado pela sua compra. Seu pedido foi processado com sucesso.
          </p>
          <Badge variant="secondary" className="mt-4">
            Pedido #{orderData.orderNumber}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Detalhes do Pedido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Número do Pedido</p>
                    <p className="font-semibold">{orderData.orderNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Data do Pedido</p>
                    <p className="font-semibold">{orderData.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <Badge variant="secondary">{orderData.status}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Forma de Pagamento</p>
                    <p className="font-semibold">{orderData.paymentMethod}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Pago</span>
                  <span className="text-2xl font-bold text-green-600">
                    R$ {orderData.total.toFixed(2)}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Acompanhamento do Pedido
                </CardTitle>
                <CardDescription>
                  Previsão de entrega: {orderData.estimatedDelivery}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Pedido Confirmado</p>
                      <p className="text-sm text-gray-600">Pagamento aprovado e pedido processado</p>
                      <p className="text-xs text-gray-500">{orderData.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Preparando para Envio</p>
                      <p className="text-sm text-gray-600">Seu pedido está sendo preparado</p>
                      <p className="text-xs text-gray-500">Em andamento</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-400">Enviado</p>
                      <p className="text-sm text-gray-400">Aguardando envio</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-400">Entregue</p>
                      <p className="text-sm text-gray-400">Previsão: {orderData.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Endereço de Entrega
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">João Silva</p>
                  <p className="text-gray-600">Rua das Flores, 123</p>
                  <p className="text-gray-600">Apto 45 - Centro</p>
                  <p className="text-gray-600">São Paulo - SP</p>
                  <p className="text-gray-600">01234-567</p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Ações Disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar Comprovante
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar por Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Próximos Passos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Acompanhe seu pedido</p>
                    <p className="text-sm text-gray-600">
                      Você receberá atualizações por email sobre o status da entrega
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Confirmação enviada</p>
                    <p className="text-sm text-gray-600">
                      Verifique sua caixa de entrada para mais detalhes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Precisa de ajuda?</p>
                    <p className="text-sm text-gray-600">
                      Entre em contato: (11) 1234-5678
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Suporte ao Cliente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">
                  Tem alguma dúvida sobre seu pedido? Nossa equipe está pronta para ajudar!
                </p>
                
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    (11) 1234-5678
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    suporte@homeflip.com.br
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500">
                  Atendimento: Segunda a Sexta, 8h às 18h
                </p>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <Button onClick={() => navigate('/')} variant="outline" className="w-full">
                  <Home className="w-4 h-4 mr-2" />
                  Voltar ao Início
                </Button>
                
                <Button onClick={() => navigate('/pedidos')} className="w-full">
                  <Package className="w-4 h-4 mr-2" />
                  Meus Pedidos
                </Button>
              </CardContent>
            </Card>

            {/* Review Reminder */}
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-2">Gostou da compra?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Sua opinião é muito importante para nós!
                  </p>
                  <Button size="sm" className="w-full">
                    Avaliar Produto
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
