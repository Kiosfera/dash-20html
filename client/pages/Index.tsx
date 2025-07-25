import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Shield, Zap, CheckCircle, Star, ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">TalentHub</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#como-funciona" className="text-gray-600 hover:text-gray-900">Como funciona</a>
          <a href="#servicos" className="text-gray-600 hover:text-gray-900">Serviços</a>
          <a href="#empresas" className="text-gray-600 hover:text-gray-900">Para empresas</a>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost">Entrar</Button>
          <Button>Cadastrar</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Conecte-se com os
          <span className="text-primary"> melhores talentos</span>
          <br />
          para seu projeto
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          A maior plataforma de freelancers da América Latina. Contrate especialistas ou ofereça seus serviços profissionais.
        </p>
        
        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer group">
            <Link to="/dashboard/cliente">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Contrate talentos</h3>
                <p className="text-gray-600 mb-6">
                  Encontre freelancers especializados para seus projetos. Acesse milhares de profissionais qualificados.
                </p>
                <Button className="w-full group-hover:bg-primary group-hover:text-white">
                  Sou cliente <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Link>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer group">
            <Link to="/dashboard/freelancer">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Ofereça serviços</h3>
                <p className="text-gray-600 mb-6">
                  Monetize suas habilidades. Conecte-se com clientes que precisam do seu talento.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                  Sou freelancer <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Link>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Como funciona</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Encontre ou publique</h3>
              <p className="text-gray-600">
                Procure por talentos especializados ou publique seu projeto para receber propostas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Conecte-se</h3>
              <p className="text-gray-600">
                Negocie diretamente com profissionais, compare propostas e escolha o melhor.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Trabalhe seguro</h3>
              <p className="text-gray-600">
                Pagamentos protegidos, contratos seguros e suporte especializado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Categorias populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Desenvolvimento Web",
              "Design Gráfico",
              "Marketing Digital",
              "Redação",
              "Tradução",
              "Fotografia",
              "Vídeo & Animação",
              "Consultoria",
              "Dados & Analytics",
              "Mobile Apps",
              "UI/UX Design",
              "SEO"
            ].map((category) => (
              <Badge key={category} variant="secondary" className="p-3 text-center justify-center">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500k+</div>
              <div className="text-blue-100">Freelancers ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100k+</div>
              <div className="text-blue-100">Projetos concluídos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-blue-100">Clientes satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-blue-100 flex items-center justify-center">
                <Star className="w-4 h-4 mr-1 fill-current" />
                Avaliação média
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais e empresas que já confiam na TalentHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Link to="/dashboard/cliente">Contratar freelancer</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Link to="/dashboard/freelancer">Oferecer serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold">TalentHub</span>
              </div>
              <p className="text-gray-400">
                A maior plataforma de freelancers da América Latina
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Para clientes</h4>
              <div className="space-y-2 text-gray-400">
                <div>Como contratar</div>
                <div>Gerenciar projetos</div>
                <div>Suporte</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Para freelancers</h4>
              <div className="space-y-2 text-gray-400">
                <div>Como funciona</div>
                <div>Taxas e pagamentos</div>
                <div>Comunidade</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <div className="space-y-2 text-gray-400">
                <div>Sobre nós</div>
                <div>Carreiras</div>
                <div>Imprensa</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TalentHub. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
