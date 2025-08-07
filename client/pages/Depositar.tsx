import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  DollarSign,
  CreditCard,
  Smartphone,
  FileText,
  Zap,
  ArrowLeft,
  Check,
  AlertCircle,
} from "lucide-react";

export default function Depositar() {
  const navigate = useNavigate();
  const [valor, setValor] = useState("");
  const [metodo, setMetodo] = useState("pix");
  const [valorSelecionado, setValorSelecionado] = useState("");

  const valoresRapidos = [50, 100, 200, 500, 1000];

  const handleValorRapido = (valorRapido: number) => {
    setValor(valorRapido.toString());
    setValorSelecionado(valorRapido.toString());
  };

  const handleValorChange = (novoValor: string) => {
    setValor(novoValor);
    setValorSelecionado("");
  };

  const handleDepositar = () => {
    if (!valor || parseFloat(valor) <= 0) {
      alert("Por favor, insira um valor válido");
      return;
    }

    switch (metodo) {
      case "pix":
        navigate("/checkout/pix", { state: { valor: parseFloat(valor), tipo: "deposito" } });
        break;
      case "cartao":
        navigate("/checkout/cartao", { state: { valor: parseFloat(valor), tipo: "deposito" } });
        break;
      case "boleto":
        navigate("/checkout/boleto", { state: { valor: parseFloat(valor), tipo: "deposito" } });
        break;
    }
  };

  const valorNumerico = parseFloat(valor) || 0;
  const taxa = metodo === "cartao" ? valorNumerico * 0.029 : 0; // Taxa de 2.9% para cartão
  const valorFinal = valorNumerico - taxa;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TalentHub</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link to="/saldo">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Saldo
                </Button>
              </Link>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>CL</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Depositar Saldo</h1>
          <p className="text-gray-600">
            Escolha o valor e forma de pagamento para adicionar saldo à sua conta
          </p>
        </div>

        <div className="space-y-6">
          {/* Valor do Depósito */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Valor do Depósito
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="valor">Digite o valor</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    R$
                  </span>
                  <Input
                    id="valor"
                    type="number"
                    placeholder="0,00"
                    value={valor}
                    onChange={(e) => handleValorChange(e.target.value)}
                    className="pl-10 text-lg"
                    min="1"
                    step="0.01"
                  />
                </div>
              </div>

              <div>
                <Label>Valores rápidos</Label>
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {valoresRapidos.map((valorRapido) => (
                    <Button
                      key={valorRapido}
                      variant={valorSelecionado === valorRapido.toString() ? "default" : "outline"}
                      onClick={() => handleValorRapido(valorRapido)}
                      className="h-12"
                    >
                      R$ {valorRapido}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Método de Pagamento */}
          <Card>
            <CardHeader>
              <CardTitle>Método de Pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={metodo} onValueChange={setMetodo} className="space-y-4">
                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix" className="flex items-center space-x-3 flex-1 cursor-pointer">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">PIX</p>
                      <p className="text-sm text-gray-600">Transferência instantânea</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Sem taxa
                    </Badge>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="cartao" id="cartao" />
                  <Label htmlFor="cartao" className="flex items-center space-x-3 flex-1 cursor-pointer">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Cartão de Crédito</p>
                      <p className="text-sm text-gray-600">Débito/Crédito</p>
                    </div>
                    <Badge variant="secondary">
                      Taxa 2,9%
                    </Badge>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value="boleto" id="boleto" />
                  <Label htmlFor="boleto" className="flex items-center space-x-3 flex-1 cursor-pointer">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Boleto Bancário</p>
                      <p className="text-sm text-gray-600">Compensação em 1-2 dias úteis</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Sem taxa
                    </Badge>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Resumo do Depósito */}
          {valorNumerico > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Depósito</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Valor do depósito</span>
                  <span className="font-medium">R$ {valorNumerico.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                
                {taxa > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxa de processamento</span>
                    <span className="text-red-600">- R$ {taxa.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                )}
                
                <hr />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span>Valor a ser creditado</span>
                  <span className="text-green-600">R$ {valorFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>

                {taxa > 0 && (
                  <div className="flex items-start space-x-2 p-3 bg-yellow-50 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-yellow-800">
                      Uma taxa de processamento será descontada do valor depositado via cartão de crédito.
                    </p>
                  </div>
                )}

                <Button 
                  onClick={handleDepositar}
                  className="w-full h-12 text-lg"
                  disabled={!valor || valorNumerico <= 0}
                >
                  <Check className="w-5 h-5 mr-2" />
                  Confirmar Depósito
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
