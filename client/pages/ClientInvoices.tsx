import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  Filter,
  Download,
  Eye,
  CreditCard,
  Calendar,
  DollarSign,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
  MessageSquare,
} from "lucide-react";

interface Invoice {
  id: number;
  numero: string;
  projeto: string;
  freelancer: string;
  valor: number;
  status: "pendente" | "pago" | "vencido" | "cancelado";
  dataVencimento: string;
  dataEmissao: string;
  dataPagamento?: string;
  descricao: string;
  servicos: Array<{
    descricao: string;
    quantidade: number;
    valorUnitario: number;
  }>;
}

export default function ClientInvoices() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const faturas: Invoice[] = [
    {
      id: 1,
      numero: "FAT-2024-001",
      projeto: "Desenvolvimento de App Mobile",
      freelancer: "Ana Silva",
      valor: 2500.0,
      status: "pendente",
      dataVencimento: "2024-01-15",
      dataEmissao: "2024-01-01",
      descricao: "Primeira etapa do desenvolvimento - UI/UX Design",
      servicos: [
        {
          descricao: "Design de interfaces",
          quantidade: 1,
          valorUnitario: 1500.0,
        },
        { descricao: "Prototipagem", quantidade: 1, valorUnitario: 1000.0 },
      ],
    },
    {
      id: 2,
      numero: "FAT-2024-002",
      projeto: "Design de Logo e Identidade Visual",
      freelancer: "Carlos Oliveira",
      valor: 800.0,
      status: "pago",
      dataVencimento: "2024-01-10",
      dataEmissao: "2023-12-26",
      dataPagamento: "2024-01-08",
      descricao: "Desenvolvimento completo da identidade visual",
      servicos: [
        { descricao: "Criação de logo", quantidade: 1, valorUnitario: 500.0 },
        { descricao: "Manual de marca", quantidade: 1, valorUnitario: 300.0 },
      ],
    },
    {
      id: 3,
      numero: "FAT-2024-003",
      projeto: "Criação de Site WordPress",
      freelancer: "João Santos",
      valor: 1500.0,
      status: "vencido",
      dataVencimento: "2023-12-20",
      dataEmissao: "2023-12-05",
      descricao: "Desenvolvimento e configuração do site",
      servicos: [
        {
          descricao: "Desenvolvimento WordPress",
          quantidade: 1,
          valorUnitario: 1200.0,
        },
        {
          descricao: "Configuração de hospedagem",
          quantidade: 1,
          valorUnitario: 300.0,
        },
      ],
    },
    {
      id: 4,
      numero: "FAT-2024-004",
      projeto: "Consultoria em Marketing Digital",
      freelancer: "Maria Costa",
      valor: 600.0,
      status: "pendente",
      dataVencimento: "2024-01-25",
      dataEmissao: "2024-01-10",
      descricao: "Consultoria estratégica em marketing digital",
      servicos: [
        { descricao: "Análise de mercado", quantidade: 8, valorUnitario: 75.0 },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pago":
        return "bg-green-100 text-green-800";
      case "pendente":
        return "bg-yellow-100 text-yellow-800";
      case "vencido":
        return "bg-red-100 text-red-800";
      case "cancelado":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pago":
        return <CheckCircle className="w-4 h-4" />;
      case "pendente":
        return <Clock className="w-4 h-4" />;
      case "vencido":
        return <AlertCircle className="w-4 h-4" />;
      case "cancelado":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  const filteredFaturas = faturas.filter((fatura) => {
    const matchesSearch =
      fatura.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fatura.projeto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fatura.freelancer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "todos" || fatura.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPendente = faturas
    .filter((f) => f.status === "pendente")
    .reduce((sum, f) => sum + f.valor, 0);
  const totalPago = faturas
    .filter((f) => f.status === "pago")
    .reduce((sum, f) => sum + f.valor, 0);
  const totalVencido = faturas
    .filter((f) => f.status === "vencido")
    .reduce((sum, f) => sum + f.valor, 0);

  const handlePayment = (fatura: Invoice) => {
    alert(`Redirecionando para pagamento da fatura ${fatura.numero}...`);
  };

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
              <Link to="/mensagens">
                <Button variant="ghost" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Mensagens
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Faturas e Pagamentos
          </h1>
          <p className="text-gray-600">
            Gerencie suas faturas e realize pagamentos
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pendentes</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(totalPendente)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pagas</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(totalPago)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertCircle className="h-8 w-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Vencidas</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(totalVencido)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(totalPendente + totalPago + totalVencido)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar por número, projeto ou freelancer..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="pendente">Pendente</SelectItem>
                  <SelectItem value="pago">Pago</SelectItem>
                  <SelectItem value="vencido">Vencido</SelectItem>
                  <SelectItem value="cancelado">Cancelado</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Invoices List */}
        <div className="space-y-4">
          {filteredFaturas.map((fatura) => (
            <Card key={fatura.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{fatura.numero}</h3>
                      <Badge className={getStatusColor(fatura.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(fatura.status)}
                          {fatura.status.charAt(0).toUpperCase() +
                            fatura.status.slice(1)}
                        </span>
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <p className="font-medium">Projeto:</p>
                        <p>{fatura.projeto}</p>
                      </div>
                      <div>
                        <p className="font-medium">Freelancer:</p>
                        <p>{fatura.freelancer}</p>
                      </div>
                      <div>
                        <p className="font-medium">Valor:</p>
                        <p className="text-lg font-bold text-gray-900">
                          {formatCurrency(fatura.valor)}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Vencimento:</p>
                        <p
                          className={
                            fatura.status === "vencido"
                              ? "text-red-600 font-medium"
                              : ""
                          }
                        >
                          {formatDate(fatura.dataVencimento)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="text-sm text-gray-600">
                        {fatura.descricao}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedInvoice(fatura)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Detalhes
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>
                            Detalhes da Fatura {selectedInvoice?.numero}
                          </DialogTitle>
                          <DialogDescription>
                            Informações completas da fatura
                          </DialogDescription>
                        </DialogHeader>
                        {selectedInvoice && (
                          <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm font-medium text-gray-600">
                                  Data de Emissão
                                </p>
                                <p>{formatDate(selectedInvoice.dataEmissao)}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">
                                  Data de Vencimento
                                </p>
                                <p>
                                  {formatDate(selectedInvoice.dataVencimento)}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">
                                  Projeto
                                </p>
                                <p>{selectedInvoice.projeto}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-600">
                                  Freelancer
                                </p>
                                <p>{selectedInvoice.freelancer}</p>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-medium mb-3">Serviços</h4>
                              <div className="border rounded-lg overflow-hidden">
                                <table className="w-full">
                                  <thead className="bg-gray-50">
                                    <tr>
                                      <th className="text-left p-3 text-sm font-medium">
                                        Descrição
                                      </th>
                                      <th className="text-right p-3 text-sm font-medium">
                                        Qtd
                                      </th>
                                      <th className="text-right p-3 text-sm font-medium">
                                        Valor Unit.
                                      </th>
                                      <th className="text-right p-3 text-sm font-medium">
                                        Total
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {selectedInvoice.servicos.map(
                                      (servico, index) => (
                                        <tr key={index} className="border-t">
                                          <td className="p-3">
                                            {servico.descricao}
                                          </td>
                                          <td className="p-3 text-right">
                                            {servico.quantidade}
                                          </td>
                                          <td className="p-3 text-right">
                                            {formatCurrency(
                                              servico.valorUnitario,
                                            )}
                                          </td>
                                          <td className="p-3 text-right font-medium">
                                            {formatCurrency(
                                              servico.quantidade *
                                                servico.valorUnitario,
                                            )}
                                          </td>
                                        </tr>
                                      ),
                                    )}
                                  </tbody>
                                  <tfoot className="bg-gray-50 border-t">
                                    <tr>
                                      <td
                                        colSpan={3}
                                        className="p-3 font-medium"
                                      >
                                        Total
                                      </td>
                                      <td className="p-3 text-right font-bold text-lg">
                                        {formatCurrency(selectedInvoice.valor)}
                                      </td>
                                    </tr>
                                  </tfoot>
                                </table>
                              </div>
                            </div>

                            {selectedInvoice.dataPagamento && (
                              <div className="bg-green-50 p-4 rounded-lg">
                                <p className="text-sm font-medium text-green-800">
                                  ✓ Pago em{" "}
                                  {formatDate(selectedInvoice.dataPagamento)}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>

                    {fatura.status === "pendente" && (
                      <Button
                        size="sm"
                        onClick={() => handlePayment(fatura)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Pagar
                      </Button>
                    )}

                    {fatura.status === "vencido" && (
                      <Button
                        size="sm"
                        onClick={() => handlePayment(fatura)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Pagar Agora
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFaturas.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Nenhuma fatura encontrada
              </h3>
              <p className="text-gray-600">
                Não há faturas que correspondam aos filtros selecionados.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
