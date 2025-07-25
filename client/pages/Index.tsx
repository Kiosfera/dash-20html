import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, Zap, ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-900">TalentHub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Escolha seu dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acesse sua área de trabalho personalizada
          </p>
        </div>
        
        {/* Dashboard Selection */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <Link to="/dashboard/cliente">
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Search className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Dashboard do Cliente</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Gerencie seus projetos, contrate freelancers e acompanhe o progresso dos trabalhos.
                </p>
                <Button className="w-full group-hover:bg-primary group-hover:text-white" size="lg">
                  Acessar como Cliente
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Link>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <Link to="/dashboard/freelancer">
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Dashboard do Freelancer</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Encontre trabalhos, gerencie projetos e acompanhe seus ganhos e estatísticas.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent" size="lg">
                  Acessar como Freelancer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-gray-900">500k+</div>
              <div className="text-sm text-gray-600">Freelancers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100k+</div>
              <div className="text-sm text-gray-600">Projetos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">4.9★</div>
              <div className="text-sm text-gray-600">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
