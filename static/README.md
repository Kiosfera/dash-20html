# TalentHub - Plataforma de Freelancing

Uma plataforma completa de freelancing similar ao Workana, desenvolvida em HTML, CSS e JavaScript vanilla. A aplicação oferece dashboards separados para clientes e freelancers com funcionalidades completas de gerenciamento de projetos.

## 🚀 Características Principais

- **100% HTML/CSS/JS** - Sem frameworks ou dependências
- **Design Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- **Fonte Montserrat** - Tipografia moderna e profissional
- **Interface Moderna** - Design limpo inspirado em plataformas como Workana
- **Navegação Fluida** - Experiência de usuário otimizada

## 📁 Estrutura do Projeto

```
static/
├── index.html                     # Página inicial - seleção de dashboard
├── client-dashboard.html          # Dashboard do cliente
├── freelancer-dashboard.html      # Dashboard do freelancer
├── create-project.html            # Criação de projetos (cliente)
├── send-proposal.html            # Envio de propostas (freelancer)
├── complete-profile.html         # Completar perfil (freelancer)
├── messages.html                 # Sistema de mensagens
├── styles.css                    # Estilos da página inicial
├── client-dashboard-styles.css   # Estilos do dashboard do cliente
├── dashboard-styles.css          # Estilos do dashboard do freelancer
├── create-project-styles.css     # Estilos da criação de projetos
├── proposal-styles.css           # Estilos do envio de propostas
├── profile-styles.css            # Estilos do completar perfil
├── messages-styles.css           # Estilos do sistema de mensagens
└── README.md                     # Este arquivo
```

## 🎨 Páginas Implementadas

### 1. **Página Inicial** (`index.html`)

- Seleção entre Dashboard do Cliente e Dashboard do Freelancer
- Design com gradiente e cards interativos
- Estatísticas da plataforma
- Navegação responsiva

### 2. **Dashboard do Cliente** (`client-dashboard.html`)

- ✅ Estatísticas: Projetos ativos, freelancers, gastos, avaliações
- ✅ **Meus Projetos**: Gestão completa de projetos (Ativo, Em Andamento, Concluído)
- ✅ **Freelancers**: Lista de freelancers contratados com status
- ✅ **Propostas**: Gerenciamento de propostas recebidas
- ✅ **Configurações**: Edição de perfil da empresa
- ✅ Filtros e busca avançada
- ✅ Link para criar novo projeto

### 3. **Dashboard do Freelancer** (`freelancer-dashboard.html`)

- ✅ Perfil resumido com avaliações e projetos concluídos
- ✅ Estatísticas: Receita mensal, projetos ativos, propostas, taxa de sucesso
- ✅ **Meus Projetos**: Projetos em andamento com barra de progresso
- ✅ **Minhas Propostas**: Propostas enviadas
- ✅ **Meu Perfil**: Configurações básicas do perfil
- ✅ Link para completar perfil
- ❌ **Removido**: Aba "Buscar Trabalhos" (conforme solicitado)

### 4. **Criar Projeto** (`create-project.html`)

- ✅ Formulário completo com validação
- ✅ Informações básicas: título, categoria, descrição
- ✅ Sistema de habilidades com tags dinâmicas
- ✅ Opções de orçamento: fixo, por hora, faixa de preço
- ✅ Preferências de freelancer
- ✅ Upload de arquivos
- ✅ Interface responsiva

### 5. **Enviar Proposta** (`send-proposal.html`)

- ✅ **Página independente** (fora do menu do freelancer)
- ✅ Layout em 2 colunas: sidebar com detalhes do projeto + formulário
- ✅ Carta de apresentação personalizada
- ✅ Definição de preço e prazo
- ✅ Plano de trabalho detalhado
- ✅ Exemplos do portfólio
- ✅ Perguntas para o cliente
- ✅ Sistema de anexos

### 6. **Completar Perfil** (`complete-profile.html`)

- ✅ Upload de foto de perfil
- ✅ Informações pessoais e profissionais
- ✅ Sistema de habilidades dinâmico
- ✅ Configuração de preços
- ✅ Links para portfólio e redes sociais
- ✅ Barra de progresso do perfil (65%)

### 7. **Sistema de Mensagens** (`messages.html`)

- ✅ Interface de chat em tempo real
- ✅ Lista de conversas com status online
- ✅ Informações do freelancer/cliente
- ✅ Histórico de mensagens
- ✅ Envio de mensagens com timestamp
- ✅ Indicadores de leitura
- ✅ Interface responsiva

## 🎯 Funcionalidades JavaScript

### Dashboard do Freelancer

- Sistema de abas (Meus Projetos, Propostas, Perfil)
- Remoção da aba "Buscar Trabalhos"

### Criação de Projeto

- Toggle entre tipos de orçamento (fixo/hora/faixa)
- Sistema de habilidades dinâmico
- Validação de formulário

### Completar Perfil

- Sistema de habilidades com adição/remoção
- Upload simulado de foto
- Contador de caracteres

### Envio de Proposta

- Contador de caracteres na carta de apresentação
- Formulário multi-seção

### Sistema de Mensagens

- Seleção de conversas
- Envio de mensagens em tempo real
- Auto-resize do textarea
- Scroll automático

## 📱 Responsividade

Todas as páginas são totalmente responsivas com breakpoints:

- **Desktop**: > 1024px (layout completo)
- **Tablet**: 768px - 1024px (adaptações de grid)
- **Mobile**: < 768px (layout de coluna única)
- **Mobile Small**: < 480px (otimizações extras)

### Adaptações Mobile:

- Navegação colapsada
- Grids de 1 coluna
- Cards empilhados
- Botões expandidos
- Touch-friendly

## 🎨 Design System

### Cores

- **Primary**: `#2563eb` (Azul)
- **Accent**: `#22c55e` (Verde)
- **Background**: `#f9fafb` (Cinza claro)
- **Cards**: `#ffffff` (Branco)
- **Text**: `#111827` (Cinza escuro)

### Tipografia

- **Fonte**: Montserrat (Google Fonts)
- **Pesos**: 100-900 disponíveis
- **Hierarquia**: H1-H3, body, small

### Componentes

- Cards com hover effects
- Botões com estados (primary, outline, ghost)
- Badges de status coloridos
- Avatares com iniciais
- Barras de progresso
- Sistema de abas
- Formulários estruturados

## 🚀 Como Usar

1. **Abrir a aplicação**:

   ```bash
   # Servir os arquivos localmente
   python -m http.server 8000
   # ou
   npx serve .
   ```

2. **Navegar pela aplicação**:

   - Acesse `http://localhost:8000`
   - Escolha entre Cliente ou Freelancer
   - Explore todas as funcionalidades

3. **Testar responsividade**:
   - Use as ferramentas de desenvolvedor
   - Teste em diferentes tamanhos de tela
   - Verifique no mobile

## 🔄 Fluxo de Navegação

```
index.html (Seleção)
├── client-dashboard.html (Cliente)
│   ├── create-project.html (Criar Projeto)
│   └── messages.html (Mensagens)
└── freelancer-dashboard.html (Freelancer)
    ├── complete-profile.html (Completar Perfil)
    ├── send-proposal.html (Enviar Proposta)
    └── messages.html (Mensagens)
```

## 📝 Características Técnicas

- **Sem dependências**: Apenas HTML, CSS e JS vanilla
- **CSS Grid e Flexbox**: Layout moderno
- **CSS Custom Properties**: Variáveis para cores
- **Semantic HTML**: Estrutura acessível
- **Progressive Enhancement**: Funciona sem JS
- **Mobile First**: Design responsivo

## 🔮 Melhorias Futuras

- [ ] Modo escuro/claro
- [ ] Persistência de dados (LocalStorage)
- [ ] Sistema de notificações
- [ ] Integração com APIs reais
- [ ] Sistema de autenticação
- [ ] Upload real de arquivos

---

**TalentHub** - Conectando talentos com oportunidades 🚀
