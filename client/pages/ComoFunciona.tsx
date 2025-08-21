import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  MessageSquare,
  Shield,
  UserPlus,
  Rocket,
  DollarSign,
  Lock,
  Zap,
  Target,
  BarChart3,
  Globe,
  Star,
  ArrowRight,
  CreditCard,
  Wrench,
  CheckCircle,
  Scale,
  Heart,
  Eye,
} from "lucide-react";
export default function ComoFunciona() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Conectando empresas a profissionais qualificados{" "}
                <span className="text-primary">em minutos</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Na Kiosferajobs, você encontra freelancers confiáveis ou
                projetos que combinam com suas habilidades. Segurança, agilidade
                e qualidade em um só lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Quero contratar
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4"
                >
                  Quero trabalhar
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Profissionais e empresas colaborando"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    1000+ projetos ativos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona - Para Empresas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona para Empresas
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <FileText className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Publique seu projeto</h3>
                <p className="text-gray-600 leading-relaxed">
                  Descreva sua necessidade, prazo e orçamento. Nosso sistema
                  conecta você a profissionais qualificados rapidamente.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <MessageSquare className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Receba propostas de profissionais
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Compare portfólios, preços e qualificações. Converse com os
                  candidatos via chat seguro da plataforma.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Shield className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Contrate com segurança
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pagamento seguro somente após aprovação da entrega. Gestão de
                  projetos integrada.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona - Para Profissionais */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona para Profissionais
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                  <UserPlus className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Crie seu perfil gratuito
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Adicione suas habilidades, experiências e portfólio para ser
                  descoberto por empresas.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                  <Rocket className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Candidate-se a oportunidades
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Encontre projetos que combinam com seu perfil e envie
                  propostas personalizadas.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                  <DollarSign className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Trabalhe e receba com segurança
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Receba pagamentos garantidos após aprovação do trabalho.
                  Construa reputação na plataforma.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais da Kiosferajobs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Kiosferajobs?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-6 hover:bg-white hover:shadow-lg rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <Lock className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Segurança nos pagamentos
              </h3>
              <p className="text-gray-600">
                Sistema de escrow protege todas as transações
              </p>
            </div>

            <div className="group text-center p-6 hover:bg-white hover:shadow-lg rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <Zap className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Plataforma simples e rápida
              </h3>
              <p className="text-gray-600">
                Interface intuitiva e processos otimizados
              </p>
            </div>

            <div className="group text-center p-6 hover:bg-white hover:shadow-lg rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <Target className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Profissionais qualificados
              </h3>
              <p className="text-gray-600">
                Especialistas verificados em diversas áreas
              </p>
            </div>

            <div className="group text-center p-6 hover:bg-white hover:shadow-lg rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <BarChart3 className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Gestão de projetos integrada
              </h3>
              <p className="text-gray-600">
                Acompanhe o progresso em tempo real
              </p>
            </div>

            <div className="group text-center p-6 hover:bg-white hover:shadow-lg rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <Globe className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Flexibilidade total
              </h3>
              <p className="text-gray-600">Trabalho remoto ou presencial</p>
            </div>

            <div className="group text-center p-6 hover:bg-white hover:shadow-lg rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <Star className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Sistema de reputação
              </h3>
              <p className="text-gray-600">Feedback transparente e confiável</p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso / Público-Alvo */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quem pode usar a Kiosferajobs?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop"
                  alt="Startups"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Startups</h3>
                <p className="text-gray-600 text-sm">
                  Encontre desenvolvedores, designers e especialistas para
                  impulsionar seu negócio
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=300&fit=crop"
                  alt="Pequenas empresas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Pequenas Empresas
                </h3>
                <p className="text-gray-600 text-sm">
                  Solucione demandas pontuais com profissionais especializados
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
                  alt="Profissionais autônomos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Profissionais Autônomos
                </h3>
                <p className="text-gray-600 text-sm">
                  Expanda sua carteira de clientes e encontre novos projetos
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                  alt="Freelancers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Freelancers</h3>
                <p className="text-gray-600 text-sm">
                  Monetize suas habilidades e construa uma carreira sólida
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Escrow - Pagamento Seguro */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pagamento Seguro com <span className="text-primary">Escrow</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            O sistema de escrow da Kiosferajobs garante que seu dinheiro fique
            protegido até a conclusão satisfatória do projeto. Segurança total
            para empresas e profissionais, com transparência em cada etapa do
            processo.
          </p>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
              alt="Pagamento seguro e protegido"
              className="rounded-2xl shadow-xl max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Como Funciona o Escrow - Passo a Passo */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona o Sistema Escrow
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um processo simples e seguro em 4 etapas que protege tanto
              empresas quanto profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Etapa 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                  <CreditCard className="w-10 h-10 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Empresa Deposita o Valor
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A empresa realiza o depósito do valor acordado em nossa conta
                  escrow segura. O dinheiro fica protegido até a conclusão do
                  projeto.
                </p>
              </CardContent>
            </Card>

            {/* Etapa 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all">
                  <Wrench className="w-10 h-10 text-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Profissional Realiza o Projeto
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  O freelancer desenvolve o trabalho com total tranquilidade,
                  sabendo que o pagamento está garantido após a entrega
                  aprovada.
                </p>
              </CardContent>
            </Card>

            {/* Etapa 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all">
                  <CheckCircle className="w-10 h-10 text-green-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Entrega e Aprovação</h3>
                <p className="text-gray-600 leading-relaxed">
                  A empresa avalia o trabalho entregue. Após aprovação, o
                  pagamento é liberado automaticamente para o profissional.
                </p>
              </CardContent>
            </Card>

            {/* Etapa 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                4
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 group-hover:scale-110 transition-all">
                  <Scale className="w-10 h-10 text-purple-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Proteção para Disputas
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Em caso de conflitos, nossa equipe de mediação atua de forma
                  imparcial para resolver questões e proteger ambas as partes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios do Escrow */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefícios do Sistema Escrow
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Por que milhares de empresas e profissionais confiam no nosso
              sistema de pagamento seguro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 hover:bg-white hover:shadow-xl rounded-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                <Shield className="w-8 h-8 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Segurança</h3>
              <p className="text-gray-600 leading-relaxed">
                Seus recursos ficam protegidos em conta segregada até a
                conclusão satisfatória do projeto
              </p>
            </div>

            <div className="group text-center p-8 hover:bg-white hover:shadow-xl rounded-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all">
                <Zap className="w-8 h-8 text-green-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Agilidade</h3>
              <p className="text-gray-600 leading-relaxed">
                Processo automatizado que libera pagamentos rapidamente após
                aprovação das entregas
              </p>
            </div>

            <div className="group text-center p-8 hover:bg-white hover:shadow-xl rounded-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500 group-hover:scale-110 transition-all">
                <Heart className="w-8 h-8 text-red-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Confiança</h3>
              <p className="text-gray-600 leading-relaxed">
                Relacionamento mais sólido entre empresas e profissionais com
                garantias mútuas
              </p>
            </div>

            <div className="group text-center p-8 hover:bg-white hover:shadow-xl rounded-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 group-hover:scale-110 transition-all">
                <Eye className="w-8 h-8 text-purple-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Transparência</h3>
              <p className="text-gray-600 leading-relaxed">
                Acompanhamento em tempo real do status dos pagamentos e projetos
                na plataforma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Garantias Adicionais */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Proteção Total com Escrow
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold">100%</div>
                <div className="text-lg opacity-90">Seguro contra fraudes</div>
              </div>
              <div>
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-lg opacity-90">Suporte especializado</div>
              </div>
              <div>
                <div className="text-4xl font-bold">R$ 0</div>
                <div className="text-lg opacity-90">
                  Taxa para usar o escrow
                </div>
              </div>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nossa tecnologia de ponta e equipe especializada garantem que suas
              transações sejam sempre seguras, rápidas e transparentes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comece agora na Kiosferajobs
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de empresas e profissionais que já confiam no
            nosso sistema de pagamento seguro
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Para Empresas</h3>
              <p className="text-lg opacity-90">
                Contrate com total segurança e pague apenas após aprovação do
                trabalho
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="w-full group hover:scale-105 transition-transform duration-200 text-lg py-4"
              >
                Publicar Projeto Seguro
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Para Profissionais</h3>
              <p className="text-lg opacity-90">
                Trabalhe com tranquilidade sabendo que seu pagamento está
                garantido
              </p>
              <Button
                size="lg"
                variant="outline"
                className="w-full group hover:scale-105 transition-transform duration-200 border-white text-white hover:bg-white hover:text-primary text-lg py-4"
              >
                Encontrar Projetos Seguros
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
