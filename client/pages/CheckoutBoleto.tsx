import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  ArrowLeft,
  FileText,
  Download,
  Copy,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Printer,
  Mail,
} from "lucide-react";

const boletoSchema = z.object({
  cpf: z.string().min(11, "CPF deve ter 11 dígitos"),
  email: z.string().email("Email inv��lido"),
  sendEmail: z.boolean().optional(),
});

type BoletoFormData = z.infer<typeof boletoSchema>;

export default function CheckoutBoleto() {
  const navigate = useNavigate();
  const [boletoGenerated, setBoletoGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BoletoFormData>({
    resolver: zodResolver(boletoSchema),
  });

  const orderSummary = {
    subtotal: 299.9,
    discount: 14.99,
    boletoDiscount: 5.7, // 2% adicional para boleto
    total: 279.21,
  };

  const boletoData = {
    number: "34191.09008 64000.000003 30000.009007 8 99770000027921",
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 dias úteis
    value: orderSummary.total,
  };

  const formatCPF = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setValue("cpf", formatted);
  };

  const onSubmit = async (data: BoletoFormData) => {
    setIsGenerating(true);

    try {
      // Simular geração do boleto
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setBoletoGenerated(true);
      toast.success("Boleto gerado com sucesso!");

      if (data.sendEmail) {
        toast.success("Boleto enviado para seu email!");
      }
    } catch (error) {
      toast.error("Erro ao gerar boleto. Tente novamente.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyBoletoNumber = () => {
    navigator.clipboard.writeText(boletoData.number);
    toast.success("Código de barras copiado!");
  };

  const downloadBoleto = () => {
    // Simular download do boleto
    toast.success("Download iniciado!");
  };

  const printBoleto = () => {
    // Simular impressão do boleto
    window.print();
  };

  if (boletoGenerated) {
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
            <h1 className="text-3xl font-bold text-gray-900">Boleto Gerado</h1>
            <p className="text-gray-600 mt-2">
              Seu boleto foi gerado com sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Boleto Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Success Message */}
              <Card className="border-green-200 bg-green-50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-green-900">
                        Boleto gerado com sucesso!
                      </h3>
                      <p className="text-sm text-green-700">
                        Você pode imprimir, baixar ou pagar online em qualquer
                        banco
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Due Date Warning */}
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    <div>
                      <h3 className="font-semibold text-orange-900">
                        Atenção ao Vencimento
                      </h3>
                      <p className="text-sm text-orange-700">
                        Vencimento:{" "}
                        {boletoData.dueDate.toLocaleDateString("pt-BR")} - Pague
                        até esta data para garantir o processamento
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Boleto Code */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Código de Barras
                  </CardTitle>
                  <CardDescription>
                    Use este código para pagar em qualquer banco ou app bancário
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-lg font-mono break-all select-all">
                      {boletoData.number}
                    </code>
                  </div>
                  <Button
                    onClick={copyBoletoNumber}
                    variant="outline"
                    className="mt-4 w-full"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copiar Código de Barras
                  </Button>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Ações do Boleto</CardTitle>
                  <CardDescription>
                    Baixe, imprima ou visualize seu boleto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button
                      onClick={downloadBoleto}
                      variant="outline"
                      className="w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Baixar PDF
                    </Button>
                    <Button
                      onClick={printBoleto}
                      variant="outline"
                      className="w-full"
                    >
                      <Printer className="w-4 h-4 mr-2" />
                      Imprimir
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Reenviar Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle>Como Pagar o Boleto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Internet Banking</p>
                        <p className="text-sm text-gray-600">
                          Acesse sua conta bancária online e digite o código de
                          barras na opção "Pagar Boleto"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">App do Banco</p>
                        <p className="text-sm text-gray-600">
                          Escaneie o código de barras usando a câmera do app do
                          seu banco
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Agência Bancária</p>
                        <p className="text-sm text-gray-600">
                          Leve o boleto impresso em qualquer agência bancária ou
                          lotérica
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Caixas Eletrônicos</p>
                        <p className="text-sm text-gray-600">
                          Digite o código de barras em qualquer caixa eletrônico
                        </p>
                      </div>
                    </div>
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
                      <span>Desconto Boleto (2%)</span>
                      <span>-R$ {orderSummary.boletoDiscount.toFixed(2)}</span>
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
                      <FileText className="w-4 h-4" />
                      <span className="font-medium">Boleto Bancário</span>
                    </div>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-blue-600">
                        Vencimento:{" "}
                        {boletoData.dueDate.toLocaleDateString("pt-BR")}
                      </p>
                      <p className="text-sm text-blue-600">
                        Valor: R$ {boletoData.value.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span className="font-medium text-orange-700">
                        Prazo de Pagamento
                      </span>
                    </div>
                    <p className="text-sm text-orange-600 mt-1">
                      Pague até o vencimento para garantir o processamento do
                      pedido
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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
            Pagamento via Boleto
          </h1>
          <p className="text-gray-600 mt-2">
            Preencha seus dados para gerar o boleto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Boleto Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Gerar Boleto Bancário
                </CardTitle>
                <CardDescription>
                  Informe seus dados para gerar o boleto de pagamento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* CPF */}
                  <div>
                    <Label htmlFor="cpf">CPF</Label>
                    <Input
                      id="cpf"
                      placeholder="000.000.000-00"
                      {...register("cpf")}
                      onChange={handleCPFChange}
                      maxLength={14}
                    />
                    {errors.cpf && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.cpf.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 mt-1">
                      O boleto será enviado para este email
                    </p>
                  </div>

                  {/* Info */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900">
                          Sobre o Boleto Bancário
                        </h4>
                        <ul className="text-sm text-blue-700 mt-2 space-y-1">
                          <li>• Vencimento em 3 dias úteis</li>
                          <li>
                            • Pode ser pago em qualquer banco, lotérica ou app
                            bancário
                          </li>
                          <li>
                            • Após o pagamento, a confirmação pode levar até 3
                            dias úteis
                          </li>
                          <li>• Desconto de 2% no valor total</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isGenerating}
                    className="w-full"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <FileText className="w-4 h-4 mr-2 animate-pulse" />
                        Gerando Boleto...
                      </>
                    ) : (
                      <>
                        <FileText className="w-4 h-4 mr-2" />
                        Gerar Boleto
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
                  <div className="flex justify-between text-green-600">
                    <span>Desconto Boleto (2%)</span>
                    <span>-R$ {orderSummary.boletoDiscount.toFixed(2)}</span>
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

                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-orange-700">
                    <FileText className="w-4 h-4" />
                    <span className="font-medium">Boleto Bancário</span>
                  </div>
                  <p className="text-sm text-orange-600 mt-1">
                    Vencimento em 3 dias úteis • 2% de desconto
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Pague em qualquer banco</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Sem taxa adicional</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Confirmação automática</span>
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
