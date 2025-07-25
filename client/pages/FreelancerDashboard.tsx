import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Star,
  MessageSquare,
  FileText,
  TrendingUp,
  Send,
  Zap,
  MapPin,
  Award,
  Briefcase,
} from "lucide-react";

export default function FreelancerDashboard() {
  const [activeTab, setActiveTab] = useState("projetos");

  const meusProjetos = [
    {
      id: 1,
      titulo: "Sistema de Gestão - ERP",
      cliente: "Indústria XYZ",
      valor: "R$ 8.500",
      progresso: 75,
      prazo: "5 dias restantes",
      status: "em_andamento",
    },
    {
      id: 2,
      titulo: "Landing Page - Advocacia",
      cliente: "Dr. Silva Advogados",
      valor: "R$ 1.200",
      progresso: 100,
      prazo: "Concluído",
      status: "concluido",
      avaliacao: 5,
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
              <Link to="/mensagens">
                <Button variant="ghost" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Mensagens
                </Button>
              </Link>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>FR</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard do Freelancer
              </h1>
              <p className="text-gray-600">
                Gerencie seus projetos e acompanhe seu desempenho
              </p>
            </div>
            <Link to="/completar-perfil">
              <Button className="bg-accent hover:bg-accent/90">
                Completar Perfil
              </Button>
            </Link>
          </div>
        </div>

        {/* Profile Summary */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>FR</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-1">Maria Santos</h2>
                <p className="text-gray-600 mb-2">
                  Desenvolvedora Full Stack | UI/UX Designer
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>4.9 (127 avaliações)</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-1" />
                    <span>89 projetos concluídos</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>São Paulo, SP</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">R$ 55/hora</p>
                <p className="text-sm text-gray-600">Taxa padrão</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Receita Este Mês
                  </p>
                  <p className="text-2xl font-bold text-gray-900">R$ 4.2k</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Projetos Ativos
                  </p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Send className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Propostas Enviadas
                  </p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Taxa de Sucesso
                  </p>
                  <p className="text-2xl font-bold text-gray-900">78%</p>
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
          <TabsList>
            <TabsTrigger value="projetos">Meus Projetos</TabsTrigger>
            <TabsTrigger value="propostas">Minhas Propostas</TabsTrigger>
            <TabsTrigger value="perfil">Meu Perfil</TabsTrigger>
          </TabsList>

          <TabsContent value="projetos" className="space-y-6">
            <div className="space-y-4">
              {meusProjetos.map((projeto) => (
                <Card key={projeto.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          {projeto.titulo}
                        </CardTitle>
                        <p className="text-gray-600 mt-1">{projeto.cliente}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge
                            variant={
                              projeto.status === "em_andamento"
                                ? "default"
                                : "outline"
                            }
                          >
                            {projeto.status === "em_andamento"
                              ? "Em andamento"
                              : "Concluído"}
                          </Badge>
                          <span className="text-sm text-gray-600">
                            {projeto.prazo}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">
                          {projeto.valor}
                        </p>
                        {projeto.avaliacao && (
                          <div className="flex items-center mt-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="text-sm">
                              {projeto.avaliacao}.0
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {projeto.status === "em_andamento" && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progresso</span>
                          <span>{projeto.progresso}%</span>
                        </div>
                        <Progress
                          value={projeto.progresso}
                          className="w-full"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="propostas" className="space-y-6">
            <Card>
              <CardContent className="p-8 text-center">
                <Send className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Nenhuma proposta enviada
                </h3>
                <p className="text-gray-600 mb-4">
                  Você ainda não enviou propostas para projetos.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="perfil" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Perfil</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium">Nome completo</label>
                    <Input placeholder="Seu nome completo" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      Título profissional
                    </label>
                    <Input
                      placeholder="Ex: Desenvolvedor Full Stack"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Taxa por hora</label>
                    <Input placeholder="R$ 50" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Localização</label>
                    <Input placeholder="Cidade, Estado" className="mt-1" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Sobre você</label>
                  <Textarea
                    placeholder="Conte sobre sua experiência e habilidades..."
                    className="mt-1"
                    rows={4}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Habilidades</label>
                  <Input
                    placeholder="Ex: React, Node.js, Python, Design..."
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
