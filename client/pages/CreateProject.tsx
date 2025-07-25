import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft,
  Zap,
  Upload,
  X,
  Plus,
  DollarSign,
  Calendar,
  Users,
  FileText,
  Globe,
  MapPin
} from "lucide-react";

export default function CreateProject() {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [budgetType, setBudgetType] = useState("fixed");

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
              <Link to="/dashboard/cliente" className="flex items-center text-gray-600 hover:text-gray-900">
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
                <AvatarFallback>CL</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Criar Novo Projeto</h1>
          <p className="text-gray-600">Publique seu projeto e receba propostas de freelancers qualificados</p>
        </div>

        <form className="space-y-8">
          {/* Informações Básicas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Informações do Projeto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-sm font-medium">Título do projeto *</Label>
                <Input 
                  id="title"
                  placeholder="Ex: Desenvolvimento de site institucional"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="category" className="text-sm font-medium">Categoria *</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desenvolvimento-web">Desenvolvimento Web</SelectItem>
                    <SelectItem value="desenvolvimento-mobile">Desenvolvimento Mobile</SelectItem>
                    <SelectItem value="design-grafico">Design Gráfico</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="marketing-digital">Marketing Digital</SelectItem>
                    <SelectItem value="redacao">Redação e Conteúdo</SelectItem>
                    <SelectItem value="traducao">Tradução</SelectItem>
                    <SelectItem value="consultoria">Consultoria</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description" className="text-sm font-medium">Descrição detalhada *</Label>
                <Textarea 
                  id="description"
                  placeholder="Descreva seu projeto em detalhes. Inclua objetivos, funcionalidades esperadas, público-alvo e qualquer informação relevante..."
                  className="mt-1 min-h-[120px]"
                />
              </div>

              <div>
                <Label className="text-sm font-medium">Habilidades necessárias</Label>
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
            </CardContent>
          </Card>

          {/* Orçamento e Prazo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Orçamento e Prazo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-sm font-medium">Tipo de orçamento *</Label>
                <RadioGroup value={budgetType} onValueChange={setBudgetType} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fixed" id="fixed" />
                    <Label htmlFor="fixed">Preço fixo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hourly" id="hourly" />
                    <Label htmlFor="hourly">Por hora</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="range" id="range" />
                    <Label htmlFor="range">Faixa de preço</Label>
                  </div>
                </RadioGroup>
              </div>

              {budgetType === "fixed" && (
                <div>
                  <Label htmlFor="budget-fixed" className="text-sm font-medium">Valor do projeto (R$) *</Label>
                  <Input 
                    id="budget-fixed"
                    type="number"
                    placeholder="5000"
                    className="mt-1"
                  />
                </div>
              )}

              {budgetType === "hourly" && (
                <div>
                  <Label htmlFor="budget-hourly" className="text-sm font-medium">Valor por hora (R$) *</Label>
                  <Input 
                    id="budget-hourly"
                    type="number"
                    placeholder="50"
                    className="mt-1"
                  />
                </div>
              )}

              {budgetType === "range" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget-min" className="text-sm font-medium">Valor mínimo (R$) *</Label>
                    <Input 
                      id="budget-min"
                      type="number"
                      placeholder="3000"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="budget-max" className="text-sm font-medium">Valor máximo (R$) *</Label>
                    <Input 
                      id="budget-max"
                      type="number"
                      placeholder="8000"
                      className="mt-1"
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="deadline" className="text-sm font-medium">Prazo de entrega *</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecione o prazo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-week">1 semana</SelectItem>
                    <SelectItem value="2-weeks">2 semanas</SelectItem>
                    <SelectItem value="1-month">1 mês</SelectItem>
                    <SelectItem value="2-months">2 meses</SelectItem>
                    <SelectItem value="3-months">3 meses</SelectItem>
                    <SelectItem value="6-months">6 meses</SelectItem>
                    <SelectItem value="custom">Personalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Preferências */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Preferências do Freelancer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="location" className="text-sm font-medium">Localização preferencial</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Qualquer localização" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Qualquer localização</SelectItem>
                    <SelectItem value="brasil">Brasil</SelectItem>
                    <SelectItem value="sao-paulo">São Paulo</SelectItem>
                    <SelectItem value="rio-janeiro">Rio de Janeiro</SelectItem>
                    <SelectItem value="belo-horizonte">Belo Horizonte</SelectItem>
                    <SelectItem value="remote">Apenas remoto</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience" className="text-sm font-medium">Nível de experiência</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Qualquer nível" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Qualquer nível</SelectItem>
                    <SelectItem value="junior">Júnior</SelectItem>
                    <SelectItem value="pleno">Pleno</SelectItem>
                    <SelectItem value="senior">Sênior</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-medium">Requisitos adicionais</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="portfolio" />
                    <Label htmlFor="portfolio" className="text-sm">Portfólio obrigatório</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="verification" />
                    <Label htmlFor="verification" className="text-sm">Freelancer verificado</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rating" />
                    <Label htmlFor="rating" className="text-sm">Avaliação mínima 4.5</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Anexos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                Arquivos Anexos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Adicione arquivos ao projeto</h3>
                <p className="text-gray-600 mb-4">
                  Faça upload de briefings, mockups, documentos ou qualquer arquivo relevante
                </p>
                <Button variant="outline" type="button">
                  Selecionar Arquivos
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex items-center justify-between pt-6 border-t">
            <Button variant="outline" type="button">
              <Link to="/dashboard/cliente">Cancelar</Link>
            </Button>
            <div className="flex space-x-3">
              <Button variant="outline" type="button">
                Salvar Rascunho
              </Button>
              <Button type="submit">
                Publicar Projeto
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
