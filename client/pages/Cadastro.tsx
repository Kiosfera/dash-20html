import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User,
  Phone,
  ArrowRight,
  Home,
  Shield,
  CheckCircle,
  AlertCircle,
  Loader2,
  Star,
  Briefcase,
  Users
} from "lucide-react";

const cadastroSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string(),
  userType: z.enum(["client", "freelancer"], {
    required_error: "Selecione o tipo de usuário"
  }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Você deve aceitar os termos de uso"
  }),
  acceptNewsletter: z.boolean().optional()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas não coincidem",
  path: ["confirmPassword"]
});

type CadastroFormData = z.infer<typeof cadastroSchema>;

export default function Cadastro() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema)
  });

  const acceptTerms = watch('acceptTerms');
  const acceptNewsletter = watch('acceptNewsletter');
  const userType = watch('userType');

  const onSubmit = async (data: CadastroFormData) => {
    setIsLoading(true);
    
    try {
      // Simular criação de conta
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Simular sucesso em 90% dos casos
      if (Math.random() > 0.1) {
        toast.success("Conta criada com sucesso!");
        
        setTimeout(() => {
          navigate('/completar-perfil', { 
            state: { 
              userType: data.userType,
              name: data.name,
              email: data.email 
            }
          });
        }, 1500);
      } else {
        toast.error("Email já está em uso. Tente outro email.");
      }
    } catch (error) {
      toast.error("Erro ao criar conta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    toast.info(`Cadastro com ${provider} em desenvolvimento`);
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Home className="w-6 h-6" />
            <span className="text-xl font-bold">Homeflip</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-2">Crie sua conta</h1>
          <p className="text-gray-600">Junte-se à nossa comunidade de profissionais</p>
        </div>

        {/* User Type Selection */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div 
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              userType === 'client' 
                ? 'border-primary bg-primary/5' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setValue('userType', 'client')}
          >
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <h3 className="font-semibold">Cliente</h3>
              <p className="text-xs text-gray-600">Contrato profissionais</p>
            </div>
          </div>
          <div 
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              userType === 'freelancer' 
                ? 'border-primary bg-primary/5' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setValue('userType', 'freelancer')}
          >
            <div className="text-center">
              <Briefcase className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold">Profissional</h3>
              <p className="text-xs text-gray-600">Ofereço serviços</p>
            </div>
          </div>
        </div>

        {/* Signup Card */}
        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Cadastrar</CardTitle>
            <CardDescription className="text-center">
              Preencha os dados para criar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    placeholder="João Silva"
                    className="pl-10"
                    {...register('name')}
                  />
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                </div>
                {errors.name && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="pl-10"
                    {...register('email')}
                  />
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <div className="relative">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="pl-10"
                    {...register('phone')}
                    onChange={(e) => {
                      const formatted = formatPhone(e.target.value);
                      setValue('phone', formatted);
                    }}
                  />
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                </div>
                {errors.phone && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    {...register('password')}
                  />
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar senha</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    {...register('confirmPassword')}
                  />
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* User Type Error */}
              {errors.userType && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.userType.message}
                </p>
              )}

              {/* Terms and Newsletter */}
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="acceptTerms" 
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setValue('acceptTerms', checked as boolean)}
                    className="mt-0.5"
                  />
                  <Label htmlFor="acceptTerms" className="text-sm leading-relaxed">
                    Aceito os{" "}
                    <Link to="/termos" className="text-primary hover:text-primary/80">
                      termos de uso
                    </Link>{" "}
                    e{" "}
                    <Link to="/privacidade" className="text-primary hover:text-primary/80">
                      política de privacidade
                    </Link>
                  </Label>
                </div>
                {errors.acceptTerms && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.acceptTerms.message}
                  </p>
                )}

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="acceptNewsletter" 
                    checked={acceptNewsletter}
                    onCheckedChange={(checked) => setValue('acceptNewsletter', checked as boolean)}
                  />
                  <Label htmlFor="acceptNewsletter" className="text-sm">
                    Desejo receber ofertas e novidades por email
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Criando conta...
                  </>
                ) : (
                  <>
                    Criar conta
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou cadastre-se com
                </span>
              </div>
            </div>

            {/* Social Signup */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                onClick={() => handleSocialSignup('Google')}
                className="w-full"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleSocialSignup('Facebook')}
                className="w-full"
              >
                <svg className="w-4 h-4 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Já tem uma conta?{" "}
            <Link 
              to="/login" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Fazer login
            </Link>
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Por que se cadastrar?
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Acesso a milhares de profissionais qualificados</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Sistema de avaliações e reviews</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Pagamentos seguros e protegidos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Suporte especializado 24/7</span>
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-4 p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Shield className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-medium text-gray-900">Seus dados estão seguros</p>
              <p>Criptografia SSL e compliance com LGPD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
