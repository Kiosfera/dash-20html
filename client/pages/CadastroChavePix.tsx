import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { KeyRound, Mail, Smartphone, IdCard, Zap, ArrowLeft, PlusCircle, RefreshCw, Trash2 } from "lucide-react";
import { PixKey, PixKeyType, addPixKey, deletePixKey, generateRandomPixKey, loadPixKeys, validatePixValue } from "@/lib/pix";

export default function CadastroChavePix() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tipo, setTipo] = useState<PixKeyType>("aleatoria");
  const [valor, setValor] = useState("");
  const [chaves, setChaves] = useState<PixKey[]>([]);

  useEffect(() => {
    setChaves(loadPixKeys());
  }, []);

  useEffect(() => {
    if (tipo === "aleatoria" && !valor) {
      setValor(generateRandomPixKey());
    }
  }, [tipo]);

  const iconePorTipo = useMemo(() => {
    switch (tipo) {
      case "email":
        return <Mail className="w-4 h-4" />;
      case "cpf_cnpj":
        return <IdCard className="w-4 h-4" />;
      case "celular":
        return <Smartphone className="w-4 h-4" />;
      default:
        return <KeyRound className="w-4 h-4" />;
    }
  }, [tipo]);

  const handleSalvar = () => {
    if (!validatePixValue(tipo, valor)) {
      toast({
        title: "Dados inválidos",
        description: "Verifique o valor informado para a chave PIX.",
      });
      return;
    }
    const lista = addPixKey({ type: tipo, value: valor });
    setChaves(lista);
    toast({ title: "Chave PIX salva", description: "Sua chave foi cadastrada com sucesso." });
    setValor(tipo === "aleatoria" ? generateRandomPixKey() : "");
  };

  const handleGerar = () => setValor(generateRandomPixKey());

  const removerChave = (id: string) => {
    const lista = deletePixKey(id);
    setChaves(lista);
    toast({ title: "Chave removida" });
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cadastrar Chave PIX</h1>
          <p className="text-gray-600">Cadastre uma nova chave para saques e recebimentos.</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <KeyRound className="w-5 h-5 mr-2" /> Nova chave
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Tipo de chave</Label>
                <RadioGroup value={tipo} onValueChange={(v) => setTipo(v as PixKeyType)} className="grid grid-cols-2 gap-3 mt-2">
                  <label className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer">
                    <RadioGroupItem value="aleatoria" id="t-aleatoria" />
                    <span>Chave aleatória</span>
                  </label>
                  <label className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer">
                    <RadioGroupItem value="email" id="t-email" />
                    <span>E-mail</span>
                  </label>
                  <label className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer">
                    <RadioGroupItem value="cpf_cnpj" id="t-cpf" />
                    <span>CPF/CNPJ</span>
                  </label>
                  <label className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer">
                    <RadioGroupItem value="celular" id="t-celular" />
                    <span>Celular</span>
                  </label>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="valor">Valor da chave</Label>
                <div className="flex items-center mt-1 space-x-2">
                  <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center text-gray-600">
                    {iconePorTipo}
                  </div>
                  <Input id="valor" placeholder={
                    tipo === "email" ? "seuemail@dominio.com" :
                    tipo === "cpf_cnpj" ? "Somente números (CPF ou CNPJ)" :
                    tipo === "celular" ? "+55 (DDD) 9XXXX-XXXX" :
                    "Chave aleatória"
                  } value={valor} onChange={(e) => setValor(e.target.value)} disabled={tipo === "aleatoria"} />
                </div>
              </div>

              <Button className="w-full h-12 text-lg" onClick={handleSalvar}>
                <PlusCircle className="w-5 h-5 mr-2" /> Salvar chave
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Minhas chaves</CardTitle>
            </CardHeader>
            <CardContent>
              {chaves.length === 0 ? (
                <p className="text-sm text-gray-600">Você ainda não possui chaves cadastradas.</p>
              ) : (
                <div className="space-y-3">
                  {chaves.map((c) => (
                    <div key={c.id} className="flex items-center justify-between p-3 border rounded-lg bg-white">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center text-gray-600">
                          {c.type === "email" ? <Mail className="w-4 h-4" /> : c.type === "cpf_cnpj" ? <IdCard className="w-4 h-4" /> : c.type === "celular" ? <Smartphone className="w-4 h-4" /> : <KeyRound className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{c.value}</p>
                          <p className="text-xs text-gray-500 capitalize">{c.type.replace("_", "/")}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removerChave(c.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
