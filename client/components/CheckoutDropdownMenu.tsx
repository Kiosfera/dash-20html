import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  CreditCard,
  Smartphone,
  FileText,
  Gift,
  Percent,
  Clock,
  CheckCircle,
  Settings,
  HelpCircle,
  Phone,
  Mail,
} from "lucide-react";

interface PaymentOption {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  badge?: string;
  discount?: string;
  isRecommended?: boolean;
}

interface CheckoutDropdownMenuProps {
  onPaymentSelect: (paymentId: string) => void;
  selectedPayment?: string;
}

export function CheckoutDropdownMenu({
  onPaymentSelect,
  selectedPayment,
}: CheckoutDropdownMenuProps) {
  const paymentMethods: PaymentOption[] = [
    {
      id: "pix",
      name: "PIX",
      description: "Pagamento instantâneo",
      icon: Smartphone,
      badge: "Instantâneo",
      discount: "5% OFF",
      isRecommended: true,
    },
    {
      id: "credit-card",
      name: "Cartão de Crédito",
      description: "Visa, Mastercard, Elo",
      icon: CreditCard,
      badge: "12x sem juros",
      discount: "Sem juros",
    },
    {
      id: "boleto",
      name: "Boleto Bancário",
      description: "3 dias úteis",
      icon: FileText,
      badge: "3 dias",
      discount: "2% OFF",
    },
  ];

  const promotions = [
    {
      id: "first-purchase",
      name: "Primeira Compra",
      description: "10% de desconto extra",
      icon: Gift,
    },
    {
      id: "newsletter",
      name: "Newsletter",
      description: "5% para assinantes",
      icon: Mail,
    },
  ];

  const selectedMethod = paymentMethods.find(
    (method) => method.id === selectedPayment,
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <div className="flex items-center gap-2">
            {selectedMethod ? (
              <>
                <selectedMethod.icon className="w-4 h-4" />
                <span>{selectedMethod.name}</span>
                {selectedMethod.isRecommended && (
                  <Badge variant="secondary" className="text-xs">
                    Recomendado
                  </Badge>
                )}
              </>
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                <span>Selecionar Pagamento</span>
              </>
            )}
          </div>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <DropdownMenuLabel className="flex items-center gap-2">
          <CreditCard className="w-4 h-4" />
          Métodos de Pagamento
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {paymentMethods.map((method) => {
          const Icon = method.icon;
          return (
            <DropdownMenuItem
              key={method.id}
              onClick={() => onPaymentSelect(method.id)}
              className="flex items-center justify-between p-3 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-full ${
                    method.isRecommended ? "bg-green-100" : "bg-gray-100"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      method.isRecommended ? "text-green-600" : "text-gray-600"
                    }`}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{method.name}</span>
                    {method.isRecommended && (
                      <Badge variant="secondary" className="text-xs">
                        Recomendado
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-600">{method.description}</p>
                  {method.discount && (
                    <p className="text-xs text-green-600 font-medium">
                      {method.discount}
                    </p>
                  )}
                </div>
              </div>
              <Badge variant="outline">{method.badge}</Badge>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />

        {/* Promoções Sub-menu */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center gap-2">
            <Percent className="w-4 h-4" />
            <span>Promoções Disponíveis</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-64">
            <DropdownMenuLabel>Descontos Especiais</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {promotions.map((promo) => {
              const Icon = promo.icon;
              return (
                <DropdownMenuItem
                  key={promo.id}
                  className="flex items-center gap-3 p-3"
                >
                  <div className="p-2 rounded-full bg-orange-100">
                    <Icon className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <span className="font-medium">{promo.name}</span>
                    <p className="text-xs text-gray-600">{promo.description}</p>
                  </div>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Status Sub-menu */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Status de Pagamento</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-56">
            <DropdownMenuLabel>Tempos de Processamento</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-3 p-3">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <div>
                <span className="font-medium">PIX</span>
                <p className="text-xs text-gray-600">Aprovação instantânea</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-3 p-3">
              <Clock className="w-4 h-4 text-blue-600" />
              <div>
                <span className="font-medium">Cartão</span>
                <p className="text-xs text-gray-600">Até 5 minutos</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-3 p-3">
              <Clock className="w-4 h-4 text-orange-600" />
              <div>
                <span className="font-medium">Boleto</span>
                <p className="text-xs text-gray-600">1-3 dias úteis</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        {/* Configurações */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            <span>Configurações</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-56">
            <DropdownMenuItem className="flex items-center gap-3">
              <CreditCard className="w-4 h-4" />
              <span>Cartões Salvos</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-3">
              <Smartphone className="w-4 h-4" />
              <span>Chaves PIX</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              <span>Notificações</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        {/* Ajuda */}
        <DropdownMenuItem className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4" />
          <span>Central de Ajuda</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>Suporte: (11) 1234-5678</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Componente auxiliar para seleção rápida de parcelas
interface InstallmentDropdownProps {
  onInstallmentSelect: (installments: number) => void;
  selectedInstallment?: number;
}

export function InstallmentDropdown({
  onInstallmentSelect,
  selectedInstallment,
}: InstallmentDropdownProps) {
  const installmentOptions = [
    { value: 1, label: "1x de R$ 284,91 à vista" },
    { value: 2, label: "2x de R$ 142,46 sem juros" },
    { value: 3, label: "3x de R$ 94,97 sem juros" },
    { value: 4, label: "4x de R$ 71,23 sem juros" },
    { value: 5, label: "5x de R$ 56,98 sem juros" },
    { value: 6, label: "6x de R$ 47,49 sem juros" },
    { value: 7, label: "7x de R$ 40,70 sem juros" },
    { value: 8, label: "8x de R$ 35,61 sem juros" },
    { value: 9, label: "9x de R$ 31,66 sem juros" },
    { value: 10, label: "10x de R$ 28,49 sem juros" },
    { value: 11, label: "11x de R$ 25,90 sem juros" },
    { value: 12, label: "12x de R$ 23,74 sem juros" },
  ];

  const selectedOption = installmentOptions.find(
    (option) => option.value === selectedInstallment,
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <span>
            {selectedOption ? selectedOption.label : "Selecionar Parcelamento"}
          </span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <DropdownMenuLabel className="flex items-center gap-2">
          <CreditCard className="w-4 h-4" />
          Opções de Parcelamento
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {installmentOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onInstallmentSelect(option.value)}
            className="flex items-center justify-between p-3 cursor-pointer"
          >
            <span className="font-medium">{option.label}</span>
            {option.value === 1 && (
              <Badge variant="secondary" className="text-xs">
                À vista
              </Badge>
            )}
            {option.value <= 6 && option.value > 1 && (
              <Badge variant="outline" className="text-xs">
                Popular
              </Badge>
            )}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <div className="p-3 text-xs text-gray-600">
          <p>• Todas as parcelas são sem juros</p>
          <p>• Aprovação sujeita à análise do cartão</p>
          <p>• Parcelas mínimas de R$ 20,00</p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Componente para menu suspenso de bancos (para PIX/Boleto)
interface BankDropdownProps {
  onBankSelect: (bankCode: string) => void;
  selectedBank?: string;
}

export function BankDropdown({
  onBankSelect,
  selectedBank,
}: BankDropdownProps) {
  const banks = [
    { code: "001", name: "Banco do Brasil", shortName: "BB" },
    { code: "104", name: "Caixa Econômica Federal", shortName: "CEF" },
    { code: "237", name: "Bradesco", shortName: "Bradesco" },
    { code: "341", name: "Itaú Unibanco", shortName: "Itaú" },
    { code: "033", name: "Santander", shortName: "Santander" },
    { code: "745", name: "Citibank", shortName: "Citi" },
    { code: "422", name: "Banco Safra", shortName: "Safra" },
    { code: "070", name: "BRB", shortName: "BRB" },
    { code: "756", name: "Banco Cooperativo do Brasil", shortName: "Bancoob" },
    { code: "748", name: "Banco Cooperativo Sicredi", shortName: "Sicredi" },
  ];

  const selectedBankData = banks.find((bank) => bank.code === selectedBank);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <span>
            {selectedBankData ? selectedBankData.name : "Selecionar Banco"}
          </span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel>Bancos Disponíveis</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {banks.map((bank) => (
          <DropdownMenuItem
            key={bank.code}
            onClick={() => onBankSelect(bank.code)}
            className="flex items-center justify-between p-3 cursor-pointer"
          >
            <span className="font-medium">{bank.name}</span>
            <Badge variant="outline" className="text-xs">
              {bank.shortName}
            </Badge>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <div className="p-3 text-xs text-gray-600">
          <p>Todos os bancos aceitam PIX e boleto bancário</p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
