import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Eye, 
  Users, 
  Star, 
  Clock, 
  Target, 
  TrendingUp,
  CheckCircle,
  Rocket,
  Crown,
  Award,
  Lock,
  FileText,
  Briefcase,
  DollarSign,
  BookOpen,
  MessageSquare,
  BarChart3,
  Gift
} from "lucide-react";

export default function Index() {
  const benefits = [
    { icon: Shield, text: "Projetos verificados – nada de golpes ou clientes fantasmas" },
    { icon: Eye, text: "Mais visibilidade – seu perfil aparece primeiro nas buscas dos clientes" },
    { icon: Clock, text: "Acesso antecipado – chegue antes nos projetos mais disputados" },
    { icon: Target, text: "Filtros avançados – encontre oportunidades que combinam com você" },
    { icon: Zap, text: "Aplicações ilimitadas – candidate-se sem restrições de envio" },
    { icon: MessageSquare, text: "Suporte dedicado – atendimento rápido quando precisar" },
    { icon: Award, text: "Selo de profissional verificado – aumenta a confiança dos clientes" },
    { icon: Lock, text: "Pagamentos mais seguros – proteção contra inadimplência" },
    { icon: BookOpen, text: "Cursos e materiais exclusivos – aprenda técnicas para cobrar mais e vender melhor" },
    { icon: BarChart3, text: "Relatórios de desempenho – acompanhe sua evolução e saiba o que melhorar" },
    { icon: FileText, text: "Auxílio em propostas – modelos prontos e dicas para enviar mensagens que realmente fecham" },
    { icon: TrendingUp, text: "Destaque em recomendações – mais chances de ser sugerido automaticamente para clientes" },
    { icon: Crown, text: "Ranking de freelancers – apareça no topo e conquiste mais visibilidade" },
    { icon: CheckCircle, text: "Certificados de conclusão de projetos – fortaleça seu portfólio com provas de entrega" },
    { icon: Star, text: "Convites exclusivos – seja chamado diretamente para projetos, sem precisar disputar" },
    { icon: Gift, text: "Descontos em ferramentas parceiras – acesso a softwares e serviços úteis com valores reduzidos" },
    { icon: Badge, text: "Badge de Plano Premium – destaque visual no perfil que transmite profissionalismo" },
    { icon: DollarSign, text: "Relatórios de mercado – descubra quanto outros freelas estão cobrando na sua área" },
    { icon: Target, text: "Sugestões de preço inteligente – receba recomendações automáticas para aumentar suas chances" },
    { icon: Users, text: "Mentorias em grupo – sessões exclusivas para aprender com experts" },
    { icon: MessageSquare, text: "Comunidade fechada – troque experiências e faça networking com outros profissionais" },
    { icon: TrendingUp, text: "Promoção em campanhas de marketing – tenha chance de aparecer em divulgações da KiosferaJobs" },
    { icon: Zap, text: "Garantia de prioridade no suporte – atendimento mais rápido para quem está em plano avançado" },
    { icon: Shield, text: "Backup do portfólio – segurança extra para não perder seu histórico de trabalhos" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center justify-center space-x-3 mb-8 sm:mb-12">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center">
            <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat">KiosferaJobs</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight font-montserrat">
            Transforme seu talento em{" "}
            <span className="text-primary">oportunidades reais!</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
            Na KiosferaJobs, você não perde tempo com promessas vazias. Aqui os clientes são verificados,
            os projetos são sérios e você tem todo o suporte para crescer como profissional independente.
          </p>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 font-montserrat">
              Com um de nossos Planos de Benefícios, você garante:
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Mais visibilidade para seu perfil nos projetos</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Acesso prioritário a oportunidades exclusivas</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Segurança com clientes avaliados e confiáveis</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Reforço na sua reputação, aumentando suas chances</span>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              <strong>Invista em você!</strong> Um pequeno valor por mês pode significar mais contratos fechados, mais renda e mais liberdade.
            </p>
            <Button size="lg" className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              Quero ativar meu plano agora
            </Button>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16 border border-orange-200">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-montserrat">
              Os melhores projetos não esperam!
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Na KiosferaJobs, as oportunidades mais atrativas são disputadas rapidamente.
              Quem tem plano ativo tem prioridade para visualizar e se candidatar primeiro.
            </p>
            <div className="bg-white rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm">
              <p className="text-gray-800 mb-4">
                Se você ainda não ativou seu plano, está deixando os melhores clientes passarem na frente.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-left">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-sm">Acesso antecipado às vagas mais bem pagas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-orange-500" />
                  <span className="text-sm">Maior destaque frente a outros freelancers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-orange-500" />
                  <span className="text-sm">Mais chances reais de fechar contratos</span>
                </div>
              </div>
            </div>
            <p className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">
              Quem ativa o plano primeiro, conquista mais rápido.
            </p>
            <Button size="lg" className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
              Ativar meu plano agora e sair na frente
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Vantagens de assinar um plano na KiosferaJobs
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Com os Planos de Benefícios da KiosferaJobs, você não apenas encontra projetos:
              você conquista visibilidade, segurança, credibilidade e ferramentas que aumentam suas chances
              de fechar contratos melhores e mais rápidos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <p className="text-sm text-gray-700 leading-relaxed">{benefit.text}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Não deixe as melhores oportunidades escaparem!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se aos milhares de freelancers que já estão aproveitando todos os benefícios 
            e conquistando os melhores projetos na KiosferaJobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-xl px-12 py-6">
              <Crown className="w-6 h-6 mr-3" />
              Ver Planos e Preços
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-12 py-6 bg-white text-primary hover:bg-gray-50">
              <Users className="w-6 h-6 mr-3" />
              Começar Gratuitamente
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary">50k+</div>
              <div className="text-sm text-gray-600">Freelancers Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">15k+</div>
              <div className="text-sm text-gray-600">Projetos Concluídos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <div className="text-sm text-gray-600">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
