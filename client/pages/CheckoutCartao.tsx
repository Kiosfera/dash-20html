import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  ArrowLeft, 
  CreditCard, 
  Shield, 
  Lock,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const cardSchema = z.object({
  cardNumber: z.string().min(16, "Número do cartão deve ter 16 dígitos"),
  cardName: z.string().min(2, "Nome é obrigatório"),
  expiryMonth: z.string().min(1, "Mês é obrigatório"),
  expiryYear: z.string().min(1, "Ano é obrigatório"),
  cvv: z.string().min(3, "CVV deve ter 3 ou 4 dígitos"),
  installments: z.string().min(1, "Selecione o número de parcelas"),
  saveCard: z.boolean().optional()
});

type CardFormData = z.infer<typeof cardSchema>;

export default function CheckoutCartao() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardType, setCardType] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<CardFormData>({
    resolver: zodResolver(cardSchema)
  });

  const orderSummary = {
    subtotal: 299.90,
    discount: 14.99,
    total: 284.91
  };

  const installmentOptions = [
    { value: "1", label: "1x de R$ 284,91 à vista" },
    { value: "2", label: "2x de R$ 142,46 sem juros" },
    { value: "3", label: "3x de R$ 94,97 sem juros" },
    { value: "4", label: "4x de R$ 71,23 sem juros" },
    { value: "5", label: "5x de R$ 56,98 sem juros" },
    { value: "6", label: "6x de R$ 47,49 sem juros" },
    { value: "7", label: "7x de R$ 40,70 sem juros" },
    { value: "8", label: "8x de R$ 35,61 sem juros" },
    { value: "9", label: "9x de R$ 31,66 sem juros" },
    { value: "10", label: "10x de R$ 28,49 sem juros" },
    { value: "11", label: "11x de R$ 25,90 sem juros" },
    { value: "12", label: "12x de R$ 23,74 sem juros" }
  ];

  const detectCardType = (number: string) => {
    const cleaned = number.replace(/\D/g, '');
    
    if (cleaned.startsWith('4')) return 'visa';
    if (cleaned.startsWith('5') || cleaned.startsWith('2')) return 'mastercard';
    if (cleaned.startsWith('3')) return 'amex';
    if (cleaned.startsWith('6')) return 'elo';
    
    return '';
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const chunks = cleaned.match(/.{1,4}/g) || [];
    return chunks.join(' ').substr(0, 19);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setValue('cardNumber', formatted);
    setCardType(detectCardType(formatted));
  };

  const onSubmit = async (data: CardFormData) => {
    setIsProcessing(true);
    
    // Simular processamento do pagamento
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Simular sucesso em 80% dos casos
      if (Math.random() > 0.2) {
        toast.success("Pagamento aprovado!");
        navigate('/pedido-confirmado');
      } else {
        toast.error("Pagamento negado. Verifique os dados do cartão.");
      }
    } catch (error) {
      toast.error("Erro ao processar pagamento. Tente novamente.");
    } finally {
      setIsProcessing(false);
    }
  };

  const getCardIcon = () => {
    switch (cardType) {
      case 'visa':
        return <div className="text-blue-600 font-bold text-xs">VISA</div>;
      case 'mastercard':
        return <div className="text-red-600 font-bold text-xs">MASTER</div>;
      case 'amex':
        return <div className="text-blue-600 font-bold text-xs">AMEX</div>;
      case 'elo':
        return <div className="text-yellow-600 font-bold text-xs">ELO</div>;
      default:
        return <CreditCard className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/checkout')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Pagamento com Cartão</h1>
          <p className="text-gray-600 mt-2">Preencha os dados do seu cartão de crédito</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Dados do Cartão
                </CardTitle>
                <CardDescription>
                  Insira as informações do seu cartão de crédito
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Card Number */}
                  <div>
                    <Label htmlFor="cardNumber">Número do Cartão</Label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        {...register('cardNumber')}
                        onChange={handleCardNumberChange}
                        maxLength={19}
                        className="pr-12"
                      />
                      <div className="absolute right-3 top-3">
                        {getCardIcon()}
                      </div>
                    </div>
                    {errors.cardNumber && (
                      <p className="text-sm text-red-600 mt-1">{errors.cardNumber.message}</p>
                    )}
                  </div>

                  {/* Card Name */}
                  <div>
                    <Label htmlFor="cardName">Nome no Cartão</Label>
                    <Input
                      id="cardName"
                      placeholder="Nome como está no cartão"
                      {...register('cardName')}
                      className="uppercase"
                    />
                    {errors.cardName && (
                      <p className="text-sm text-red-600 mt-1">{errors.cardName.message}</p>
                    )}
                  </div>

                  {/* Expiry and CVV */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="expiryMonth">Mês</Label>
                      <Select onValueChange={(value) => setValue('expiryMonth', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Mês" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString().padStart(2, '0')}>
                              {(i + 1).toString().padStart(2, '0')}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.expiryMonth && (
                        <p className="text-sm text-red-600 mt-1">{errors.expiryMonth.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="expiryYear">Ano</Label>
                      <Select onValueChange={(value) => setValue('expiryYear', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Ano" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => (
                            <SelectItem key={i} value={(new Date().getFullYear() + i).toString()}>
                              {new Date().getFullYear() + i}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.expiryYear && (
                        <p className="text-sm text-red-600 mt-1">{errors.expiryYear.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        {...register('cvv')}
                        maxLength={4}
                      />
                      {errors.cvv && (
                        <p className="text-sm text-red-600 mt-1">{errors.cvv.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Installments */}
                  <div>
                    <Label htmlFor="installments">Parcelamento</Label>
                    <Select onValueChange={(value) => setValue('installments', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o parcelamento" />
                      </SelectTrigger>
                      <SelectContent>
                        {installmentOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.installments && (
                      <p className="text-sm text-red-600 mt-1">{errors.installments.message}</p>
                    )}
                  </div>

                  {/* Save Card */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="saveCard" 
                      onCheckedChange={(checked) => setValue('saveCard', checked as boolean)}
                    />
                    <Label htmlFor="saveCard" className="text-sm">
                      Salvar cartão para futuras compras
                    </Label>
                  </div>

                  {/* Security Info */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900">Compra Segura</h4>
                        <p className="text-sm text-blue-700">
                          Seus dados são protegidos com criptografia SSL de 256 bits. 
                          Não armazenamos informações do seu cartão.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full"
                    size="lg"
                  >
                    {isProcessing ? (
                      <>
                        <Lock className="w-4 h-4 mr-2 animate-pulse" />
                        Processando Pagamento...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Finalizar Pagamento
                      </>
                    )}
                  </Button>
                </form>
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

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-700">
                    <CreditCard className="w-4 h-4" />
                    <span className="font-medium">Cartão de Crédito</span>
                  </div>
                  <p className="text-sm text-blue-600 mt-1">
                    Parcelamento em até 12x sem juros
                  </p>
                </div>

                {/* Security Badges */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>SSL Certificado</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>PCI Compliance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Aprovação Instantânea</span>
                  </div>
                </div>

                {/* Accepted Cards */}
                <div>
                  <p className="text-sm text-gray-600 mb-2">Cartões aceitos:</p>
                  <div className="flex gap-2">
                    <Badge variant="outline">VISA</Badge>
                    <Badge variant="outline">MASTER</Badge>
                    <Badge variant="outline">ELO</Badge>
                    <Badge variant="outline">AMEX</Badge>
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
