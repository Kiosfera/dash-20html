import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  Crown,
  Star,
  Check,
  X,
  ArrowLeft,
  Shield,
  TrendingUp,
  Users,
  Award,
  Clock,
  MessageSquare,
} from "lucide-react";

export default function PlanosBeneficios() {
  const plans = [
    {
      name: "Free",
      price: "R$ 0",
      period: "/mês",
      description: "Ideal para começar sua jornada como freelancer",
      icon: Zap,
      color: "text-gray-600",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
      buttonVariant: "outline" as const,
      popular: false,
      features: [
        { name: "Até 3 propostas por mês", included: true },
        { name: "Perfil básico", included: true },
        { name: "Chat com clientes", included: true },
        { name: "Taxa de 10% por projeto", included: true },
        { name: "Suporte por email", included: true },
        { name: "Analytics avançados", included: false },
        { name: "Selo de verificação", included: false },
        { name: "Prioridade em propostas", included: false },
        { name: "Suporte prioritário", included: false },
      ],
    },
    {
      name: "Pro",
      price: "R$ 29",
      period: "/mês",
      description: "Para freelancers que querem crescer rapidamente",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary",
      buttonVariant: "default" as const,
      popular: true,
      features: [
        { name: "Propostas ilimitadas", included: true },
        { name: "Perfil premium", included: true },
        { name: "Chat prioritário", included: true },
        { name: "Taxa de 7% por projeto", included: true },
        { name: "Analytics avançados", included: true },
        { name: "Selo de verificação", included: true },
        { name: "Suporte prioritário", included: true },
        { name: "Prioridade em propostas", included: false },
        { name: "Gerente de conta dedicado", included: false },
      ],
    },
    {
      name: "Elite",
      price: "R$ 99",
      period: "/mês",
      description: "Para profissionais de elite que buscam excelência",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
      buttonVariant: "outline" as const,
      popular: false,
      features: [
        { name: "Propostas ilimitadas", included: true },
        { name: "Perfil VIP", included: true },
        { name: "Chat VIP", included: true },
        { name: "Taxa de 5% por projeto", included: true },
        { name: "Analytics avançados", included: true },
        { name: "Selo de verificação", included: true },
        { name: "Prioridade máxima em propostas", included: true },
        { name: "Gerente de conta dedicado", included: true },
        { name: "Suporte 24/7", included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            to="/dashboard/freelancer"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Dashboard
          </Link>
        </div>

        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Award className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-900">TalentHub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planos de Benefício Freelancer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para impulsionar sua carreira como freelancer
            e maximizar seus ganhos
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`relative ${plan.borderColor} ${plan.popular ? "ring-2 ring-primary ring-offset-4" : ""} hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${plan.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className={`w-8 h-8 ${plan.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-gray-900 mt-2">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Button
                    className="w-full"
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.name === "Free" ? "Começar Grátis" : "Assinar Plano"}
                  </Button>

                  <div className="space-y-3 pt-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm ${feature.included ? "text-gray-900" : "text-gray-400"}`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Benefícios Exclusivos para Freelancers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pagamentos Seguros</h3>
              <p className="text-gray-600">
                Sistema de pagamento protegido com garantia de recebimento para
                todos os projetos concluídos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rede de Qualidade</h3>
              <p className="text-gray-600">
                Acesso a uma rede exclusiva de clientes verificados e projetos
                de alta qualidade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Suporte Especializado
              </h3>
              <p className="text-gray-600">
                Equipe de suporte dedicada para ajudar freelancers a crescer e
                ter sucesso na plataforma.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ or Contact Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Tem dúvidas sobre os planos?
          </h3>
          <p className="text-gray-600 mb-6">
            Nossa equipe está pronta para ajudar você a escolher o melhor plano
            para suas necessidades.
          </p>
          <Button variant="outline" size="lg">
            Falar com Suporte
          </Button>
        </div>
      </div>
    </div>
  );
}
