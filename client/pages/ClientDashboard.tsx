import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  Search,
  Filter,
  Star,
  Clock,
  DollarSign,
  Users,
  MessageSquare,
  FileText,
  MoreHorizontal,
  Zap,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("projetos");

  const projetos = [
    {
      id: 1,
      titulo: "Desenvolvimento de App Mobile",
      categoria: "Desenvolvimento",
      orcamento: "R$ 5.000 - R$ 8.000",
      propostas: 12,
      status: "ativo",
      prazo: "30 dias",
      publicado: "2 dias atrás",
      descricao:
        "Preciso desenvolver um aplicativo mobile para iOS e Android...",
    },
    {
      id: 2,
      titulo: "Design de Logo e Identidade Visual",
      categoria: "Design",
      orcamento: "R$ 800 - R$ 1.500",
      propostas: 24,
      status: "em_andamento",
      prazo: "15 dias",
      freelancer: "Ana Silva",
      progresso: 60,
    },
    {
      id: 3,
      titulo: "Criação de Site WordPress",
      categoria: "Desenvolvimento Web",
      orcamento: "R$ 2.500",
      propostas: 8,
      status: "concluido",
      prazo: "20 dias",
      freelancer: "João Santos",
      avaliacao: 5,
    },
  ];

  const freelancersContratados = [
    {
      id: 1,
      nome: "Ana Silva",
      especialidade: "UI/UX Designer",
      avatar: "/placeholder.svg",
      avaliacao: 4.9,
      projetos: 156,
      valor: "R$ 45/hora",
      status: "trabalhando",
    },
    {
      id: 2,
      nome: "João Santos",
      especialidade: "Desenvolvedor Full Stack",
      avatar: "/placeholder.svg",
      avaliacao: 4.8,
      projetos: 203,
      valor: "R$ 65/hora",
      status: "disponivel",
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
              <Link to="/faturas">
                <Button variant="ghost" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Faturas
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
            Dashboard do Cliente
          </h1>
          <p className="text-gray-600">
            Gerencie seus projetos e contrate os melhores talentos
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Projetos Ativos
                  </p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Freelancers
                  </p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Gasto Total
                  </p>
                  <p className="text-2xl font-bold text-gray-900">R$ 12.5k</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Avaliação Média
                  </p>
                  <p className="text-2xl font-bold text-gray-900">4.8</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="projetos">Meus Projetos</TabsTrigger>
              <TabsTrigger value="freelancers">Freelancers</TabsTrigger>
              <TabsTrigger value="propostas">Propostas</TabsTrigger>
              <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
            </TabsList>

            <Link to="/criar-projeto">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Novo Projeto
              </Button>
            </Link>
          </div>

          <TabsContent value="projetos" className="space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Buscar projetos..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="ativo">Ativo</SelectItem>
                  <SelectItem value="em_andamento">Em andamento</SelectItem>
                  <SelectItem value="concluido">Concluído</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>

            {/* Projects List */}
            <div className="space-y-4">
              {projetos.map((projeto) => (
                <Card key={projeto.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-lg">
                            {projeto.titulo}
                          </CardTitle>
                          <Badge
                            variant={
                              projeto.status === "ativo"
                                ? "default"
                                : projeto.status === "em_andamento"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {projeto.status === "ativo"
                              ? "Ativo"
                              : projeto.status === "em_andamento"
                                ? "Em andamento"
                                : "Concluído"}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{projeto.categoria}</span>
                          <span>•</span>
                          <span>{projeto.orcamento}</span>
                          <span>•</span>
                          <span>{projeto.prazo}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">{projeto.descricao}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {projeto.status === "ativo" && (
                            <div className="flex items-center text-sm text-gray-600">
                              <Users className="w-4 h-4 mr-1" />
                              {projeto.propostas} propostas
                            </div>
                          )}

                          {projeto.freelancer && (
                            <div className="flex items-center text-sm text-gray-600">
                              <Avatar className="w-6 h-6 mr-2">
                                <AvatarFallback>
                                  {projeto.freelancer
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              {projeto.freelancer}
                            </div>
                          )}

                          {projeto.avaliacao && (
                            <div className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                              {projeto.avaliacao}.0
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Ver
                          </Button>
                          {projeto.status === "ativo" && (
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-2" />
                              Editar
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="freelancers" className="space-y-6">
            <div className="grid gap-6">
              {freelancersContratados.map((freelancer) => (
                <Card key={freelancer.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={freelancer.avatar} />
                          <AvatarFallback>
                            {freelancer.nome
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-semibold">
                            {freelancer.nome}
                          </h3>
                          <p className="text-gray-600">
                            {freelancer.especialidade}
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                              <span className="text-sm">
                                {freelancer.avaliacao}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600">
                              {freelancer.projetos} projetos
                            </span>
                            <span className="text-sm text-gray-600">
                              {freelancer.valor}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            freelancer.status === "trabalhando"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {freelancer.status === "trabalhando"
                            ? "Trabalhando"
                            : "Disponível"}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Mensagem
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="propostas" className="space-y-6">
            <Card>
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Nenhuma proposta nova
                </h3>
                <p className="text-gray-600 mb-4">
                  Você não tem propostas pendentes no momento.
                </p>
                <Button>Criar novo projeto</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="configuracoes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações da Conta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium">Nome da empresa</label>
                  <Input
                    placeholder="Digite o nome da sua empresa"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="seu@email.com" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Biografia</label>
                  <Textarea
                    placeholder="Conte um pouco sobre sua empresa..."
                    className="mt-1"
                  />
                </div>
                <Button>Salvar alterações</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
