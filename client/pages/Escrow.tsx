import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CreditCard,
  Wrench,
  CheckCircle,
  Scale,
  Shield,
  Zap,
  Heart,
  Eye,
  ArrowRight,
} from "lucide-react";

export default function Escrow() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Pagamento Seguro com{" "}
            <span className="text-primary">Escrow</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            O sistema de escrow da Kiosferajobs garante que seu dinheiro fique protegido até a conclusão 
            satisfatória do projeto. Segurança total para empresas e profissionais, com transparência em 
            cada etapa do processo.
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
              Um processo simples e seguro em 4 etapas que protege tanto empresas quanto profissionais
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
                <h3 className="text-xl font-bold mb-4">Empresa Deposita o Valor</h3>
                <p className="text-gray-600 leading-relaxed">
                  A empresa realiza o depósito do valor acordado em nossa conta escrow segura. 
                  O dinheiro fica protegido até a conclusão do projeto.
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
                <h3 className="text-xl font-bold mb-4">Profissional Realiza o Projeto</h3>
                <p className="text-gray-600 leading-relaxed">
                  O freelancer desenvolve o trabalho com total tranquilidade, sabendo que 
                  o pagamento está garantido após a entrega aprovada.
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
                  A empresa avalia o trabalho entregue. Após aprovação, o pagamento 
                  é liberado automaticamente para o profissional.
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
                <h3 className="text-xl font-bold mb-4">Proteção para Disputas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Em caso de conflitos, nossa equipe de mediação atua de forma imparcial 
                  para resolver questões e proteger ambas as partes.
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
              Por que milhares de empresas e profissionais confiam no nosso sistema de pagamento seguro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 hover:bg-white hover:shadow-xl rounded-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                <Shield className="w-8 h-8 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Segurança</h3>
              <p className="text-gray-600 leading-relaxed">
                Seus recursos ficam protegidos em conta segregada até a conclusão satisfatória do projeto
              </p>
            </div>

            <div className="group text-center p-8 hover:bg-white hover:shadow-xl rounded-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all">
                <Zap className="w-8 h-8 text-green-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Agilidade</h3>
              <p className="text-gray-600 leading-relaxed">
                Processo automatizado que libera pagamentos rapidamente após aprovação das entregas
              </p>
            </div>

            <div className="group text-center p-8 hover:bg-white hover:shadow-xl rounded-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500 group-hover:scale-110 transition-all">
                <Heart className="w-8 h-8 text-red-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Confiança</h3>
              <p className="text-gray-600 leading-relaxed">
                Relacionamento mais sólido entre empresas e profissionais com garantias mútuas
              </p>
            </div>

            <div className="group text-center p-8 hover:bg-white hover:shadow-xl rounded-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 group-hover:scale-110 transition-all">
                <Eye className="w-8 h-8 text-purple-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Transparência</h3>
              <p className="text-gray-600 leading-relaxed">
                Acompanhamento em tempo real do status dos pagamentos e projetos na plataforma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Garantias Adicionais */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Proteção Total com Escrow</h2>
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
                <div className="text-lg opacity-90">Taxa para usar o escrow</div>
              </div>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nossa tecnologia de ponta e equipe especializada garantem que suas transações sejam 
              sempre seguras, rápidas e transparentes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comece a usar o Escrow hoje mesmo
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de empresas e profissionais que já confiam no nosso sistema de pagamento seguro
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Para Empresas</h3>
              <p className="text-lg opacity-90">
                Contrate com total segurança e pague apenas após aprovação do trabalho
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
                Trabalhe com tranquilidade sabendo que seu pagamento está garantido
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
