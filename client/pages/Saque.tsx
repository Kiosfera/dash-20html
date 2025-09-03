import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Wallet, ArrowLeft, Zap, DollarSign, KeyRound, Info } from "lucide-react";
import { PixKey, loadPixKeys } from "@/lib/pix";

const TAXA_FIXA = 0; // R$
const TAXA_PERCENTUAL = 0; // %

export default function Saque() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [chaves, setChaves] = useState<PixKey[]>([]);
  const [chaveId, setChaveId] = useState<string>("");
  const [valor, setValor] = useState<string>("");

  useEffect(() => {
    const lista = loadPixKeys();
    setChaves(lista);
    if (lista.length > 0) setChaveId(lista[0].id);
  }, []);

  const chaveSelecionada = useMemo(() => chaves.find((c) => c.id === chaveId), [chaves, chaveId]);

  const valorNumber = parseFloat(valor) || 0;
  const taxaPercentualValor = (TAXA_PERCENTUAL / 100) * valorNumber;
  const taxaTotal = TAXA_FIXA + taxaPercentualValor;
  const valorLiquido = Math.max(0, valorNumber - taxaTotal);

  const solicitarSaque = () => {
    if (!chaveSelecionada) {
      toast({ title: "Selecione uma chave PIX" });
      return;
    }
    if (valorNumber <= 0) {
      toast({ title: "Informe um valor válido" });
      return;
    }
    toast({
      title: "Saque solicitado",
      description: `Você receberá R$ ${valorLiquido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} na chave selecionada.`,
    });
    navigate("/saldo");
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Solicitar Saque</h1>
          <p className="text-gray-600">Escolha sua chave PIX, informe o valor e confira as taxas.</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <KeyRound className="w-5 h-5 mr-2" /> Chave PIX
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {chaves.length === 0 ? (
                <div className="p-4 border rounded-lg bg-yellow-50 text-yellow-900">
                  Você ainda não tem chaves cadastradas. <Link to="/cadastro-chave-pix" className="underline font-medium">Cadastrar chave PIX</Link>
                </div>
              ) : (
                <div>
                  <Label>Selecionar chave</Label>
                  <Select value={chaveId} onValueChange={setChaveId}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione uma chave" />
                    </SelectTrigger>
                    <SelectContent>
                      {chaves.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div>
                <Link to="/cadastro-chave-pix">
                  <Button variant="outline" className="mt-2">Cadastrar nova chave</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" /> Valor do saque
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="valor">Digite o valor</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R$</span>
                  <Input id="valor" type="number" min="1" step="0.01" className="pl-10 text-lg" placeholder="0,00" value={valor} onChange={(e) => setValor(e.target.value)} />
                </div>
              </div>
            </CardContent>
          </Card>

          {valorNumber > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Saque</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Valor solicitado</span>
                  <span className="font-medium">R$ {valorNumber.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxa fixa</span>
                  <span className="text-red-600">- R$ {TAXA_FIXA.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxa percentual ({TAXA_PERCENTUAL}%)</span>
                  <span className="text-red-600">- R$ {taxaPercentualValor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Valor a ser creditado</span>
                  <span className="text-green-600">R$ {valorLiquido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex items-start space-x-2 p-3 bg-blue-50 rounded-lg">
                  <Info className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-blue-900">As taxas são aplicadas ao valor solicitado e o líquido será enviado para a chave selecionada.</p>
                </div>
                <Button className="w-full h-12 text-lg" onClick={solicitarSaque} disabled={!chaveSelecionada || valorNumber <= 0}>
                  <Wallet className="w-5 h-5 mr-2" /> Solicitar saque
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
