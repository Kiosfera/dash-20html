import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Plus,
  Minus,
  CreditCard,
  Eye,
  EyeOff,
  History,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Saldo() {
  const [showBalance, setShowBalance] = useState(true);

  const saldoAtual = 2547.83;
  const ultimasTransacoes = [
    {
      id: 1,
      tipo: "deposito",
      valor: 500.0,
      descricao: "Depósito via PIX",
      data: "Hoje, 14:30",
      status: "concluido",
    },
    {
      id: 2,
      tipo: "pagamento",
      valor: -150.0,
      descricao: "Pagamento - João Santos",
      data: "Ontem, 09:15",
      status: "concluido",
    },
    {
      id: 3,
      tipo: "deposito",
      valor: 1000.0,
      descricao: "Depósito via Cartão",
      data: "05/01/2024",
      status: "concluido",
    },
    {
      id: 4,
      tipo: "saque",
      valor: -200.0,
      descricao: "Saque para conta bancária",
      data: "03/01/2024",
      status: "processando",
    },
  ];

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
              <Link to="/dashboard/cliente">
                <Button variant="ghost" size="sm">
                  Dashboard
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

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Meu Saldo</h1>
          <p className="text-gray-600">
            Gerencie seu saldo e visualize suas transações
          </p>
        </div>

        {/* Cartão de Saldo Principal */}
        <Card className="mb-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-blue-100 mb-2">Saldo disponível</p>
                <div className="flex items-center space-x-3">
                  {showBalance ? (
                    <h2 className="text-4xl font-bold">
                      R${" "}
                      {saldoAtual.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </h2>
                  ) : (
                    <h2 className="text-4xl font-bold">R$ ••••••</h2>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowBalance(!showBalance)}
                    className="text-white hover:bg-blue-600"
                  >
                    {showBalance ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </div>
              <DollarSign className="w-16 h-16 text-blue-200" />
            </div>

            <div className="flex space-x-4">
              <Link to="/depositar" className="flex-1">
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  <Plus className="w-4 h-4 mr-2" />
                  Depositar
                </Button>
              </Link>
              <Link to="/saque" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-blue-600"
                >
                  <Minus className="w-4 h-4 mr-2" />
                  Sacar
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Total Recebido (30 dias)
                  </p>
                  <p className="text-2xl font-bold text-gray-900">R$ 3.450</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingDown className="h-8 w-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Total Gasto (30 dias)
                  </p>
                  <p className="text-2xl font-bold text-gray-900">R$ 1.200</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CreditCard className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Transações este mês
                  </p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Histórico de Transações */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <History className="w-5 h-5 mr-2" />
                Últimas Transações
              </CardTitle>
              <Button variant="outline" size="sm">
                Ver todas
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ultimasTransacoes.map((transacao) => (
                <div
                  key={transacao.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transacao.tipo === "deposito"
                          ? "bg-green-100 text-green-600"
                          : transacao.tipo === "pagamento"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-red-100 text-red-600"
                      }`}
                    >
                      {transacao.tipo === "deposito" && (
                        <TrendingUp className="w-5 h-5" />
                      )}
                      {transacao.tipo === "pagamento" && (
                        <CreditCard className="w-5 h-5" />
                      )}
                      {transacao.tipo === "saque" && (
                        <TrendingDown className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {transacao.descricao}
                      </p>
                      <p className="text-sm text-gray-600">{transacao.data}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-semibold ${
                        transacao.valor > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {transacao.valor > 0 ? "+" : ""}R${" "}
                      {Math.abs(transacao.valor).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </p>
                    <Badge
                      variant={
                        transacao.status === "concluido"
                          ? "default"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {transacao.status === "concluido"
                        ? "Concluído"
                        : "Processando"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
