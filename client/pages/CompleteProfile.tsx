import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  Zap,
  Upload,
  X,
  Plus,
  User,
  Briefcase,
  DollarSign,
  MapPin,
  Award,
  FileText,
  Camera
} from "lucide-react";

export default function CompleteProfile() {
  const [skills, setSkills] = useState<string[]>(["React", "Node.js"]);
  const [newSkill, setNewSkill] = useState("");
  const [profileCompletion, setProfileCompletion] = useState(65);

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard/freelancer" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar ao Dashboard
              </Link>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">TalentHub</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>FR</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Completar Perfil</h1>
          <p className="text-gray-600">Complete seu perfil para aparecer melhor nas buscas e receber mais propostas</p>
          
          {/* Progress Bar */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Progresso do perfil</span>
                <span className="text-sm font-medium text-primary">{profileCompletion}%</span>
              </div>
              <Progress value={profileCompletion} className="w-full" />
              <p className="text-xs text-gray-500 mt-2">
                Complete mais campos para melhorar sua visibilidade
              </p>
            </CardContent>
          </Card>
        </div>

        <form className="space-y-8">
          {/* Foto e Informações Básicas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Informações Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-lg">MS</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                    type="button"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2">Foto do perfil</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Uma foto profissional aumenta suas chances de ser contratado
                  </p>
                  <Button variant="outline" size="sm" type="button">
                    <Upload className="w-4 h-4 mr-2" />
                    Fazer upload
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Nome completo *</label>
                  <Input defaultValue="Maria Santos" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email *</label>
                  <Input defaultValue="maria@email.com" className="mt-1" disabled />
                </div>
                <div>
                  <label className="text-sm font-medium">Telefone</label>
                  <Input placeholder="(11) 99999-9999" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Data de nascimento</label>
                  <Input type="date" className="mt-1" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Localização *</label>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sp">São Paulo</SelectItem>
                      <SelectItem value="rj">Rio de Janeiro</SelectItem>
                      <SelectItem value="mg">Minas Gerais</SelectItem>
                      <SelectItem value="pr">Paraná</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Cidade" defaultValue="São Paulo" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informações Profissionais */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Informações Profissionais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium">Título profissional *</label>
                <Input 
                  defaultValue="Desenvolvedora Full Stack | UI/UX Designer" 
                  placeholder="Ex: Desenvolvedor Front-end Sênior"
                  className="mt-1" 
                />
              </div>

              <div>
                <label className="text-sm font-medium">Categoria principal *</label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecione sua área principal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desenvolvimento-web">Desenvolvimento Web</SelectItem>
                    <SelectItem value="desenvolvimento-mobile">Desenvolvimento Mobile</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="design-grafico">Design Gráfico</SelectItem>
                    <SelectItem value="marketing-digital">Marketing Digital</SelectItem>
                    <SelectItem value="redacao">Redação e Conteúdo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Sobre você *</label>
                <Textarea 
                  placeholder="Conte sobre sua experiência, especialidades e o que te motiva..."
                  className="mt-1 min-h-[120px]"
                  defaultValue="Sou uma desenvolvedora full stack apaixonada por criar soluções inovadoras. Tenho 5 anos de experiência trabalhando com React, Node.js e design de interfaces. Especializada em aplicações web modernas e experiência do usuário."
                />
              </div>

              <div>
                <label className="text-sm font-medium">Habilidades *</label>
                <div className="mt-1 space-y-3">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Digite uma habilidade"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                    />
                    <Button type="button" onClick={addSkill} variant="outline">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                        {skill}
                        <X 
                          className="w-3 h-3 cursor-pointer hover:text-red-500" 
                          onClick={() => removeSkill(skill)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Nível de experiência *</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione seu nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Júnior (0-2 anos)</SelectItem>
                      <SelectItem value="pleno">Pleno (2-5 anos)</SelectItem>
                      <SelectItem value="senior">Sênior (5+ anos)</SelectItem>
                      <SelectItem value="especialista">Especialista (10+ anos)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Disponibilidade</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione sua disponibilidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tempo-integral">Tempo integral</SelectItem>
                      <SelectItem value="meio-periodo">Meio período</SelectItem>
                      <SelectItem value="projetos">Apenas projetos</SelectItem>
                      <SelectItem value="consultoria">Consultoria</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preços e Pagamento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Preços e Faturamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium">Taxa por hora (R$) *</label>
                  <Input 
                    type="number" 
                    defaultValue="55"
                    placeholder="50"
                    className="mt-1" 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Valor mínimo projeto (R$)</label>
                  <Input 
                    type="number" 
                    placeholder="1000"
                    className="mt-1" 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Moeda</label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="BRL" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brl">Real (BRL)</SelectItem>
                      <SelectItem value="usd">Dólar (USD)</SelectItem>
                      <SelectItem value="eur">Euro (EUR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Portfólio */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Portfólio e Experiência
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium">Link do portfólio</label>
                <Input 
                  placeholder="https://meuportfolio.com"
                  className="mt-1" 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">LinkedIn</label>
                <Input 
                  placeholder="https://linkedin.com/in/seuperfil"
                  className="mt-1" 
                />
              </div>

              <div>
                <label className="text-sm font-medium">GitHub</label>
                <Input 
                  placeholder="https://github.com/seuusuario"
                  className="mt-1" 
                />
              </div>

              <div>
                <label className="text-sm font-medium">Formação acadêmica</label>
                <Textarea 
                  placeholder="Ex: Bacharelado em Ciência da Computação - USP (2018-2022)"
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Certificações</label>
                <Textarea 
                  placeholder="Ex: AWS Certified Developer, Google Analytics, etc."
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex items-center justify-between pt-6 border-t">
            <Button variant="outline" type="button">
              <Link to="/dashboard/freelancer">Cancelar</Link>
            </Button>
            <div className="flex space-x-3">
              <Button variant="outline" type="button">
                Salvar Rascunho
              </Button>
              <Button type="submit">
                Salvar Perfil
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
