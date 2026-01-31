# WORLD Software Solutions - Documentação Técnica

## 📋 Sumário Executivo

**WORLD Software Solutions** é um site corporativo moderno e responsivo desenvolvido com as melhores práticas de engenharia de software. O projeto apresenta uma identidade visual futurista com paleta de cores roxa e preta, proporcionando uma experiência de usuário premium.

---

## 🎨 Design System

### Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Primária | #6F35BB (Roxo) | Elementos principais, botões, destaques |
| Primária Clara | #CCA8FA (Roxo Claro) | Bordas, backgrounds suaves |
| Primária Escura | #5a2a8f (Roxo Escuro) | Hover states, backgrounds |
| Escura | #000000 | Background principal |
| Clara | #FFFFFF | Textos principais |
| Cinza | #C7C7D6 | Textos secundários |
| Cinza Escura | #666666 | Textos terciários |

### Tipografia

- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Pesos**: Light (300), Normal (400), Medium (500), Semibold (600), Bold (700), Extrabold (800)
- **Tamanhos**: De xs (0.75rem) até 6xl (3.5rem)

### Espaçamento

Sistema consistente com múltiplos de 0.5rem:
- xs: 0.25rem
- sm: 0.5rem
- md: 1rem
- lg: 1.5rem
- xl: 2rem
- 2xl: 3rem
- 3xl: 4rem
- 4xl: 5rem
- 5xl: 6rem

---

## 📁 Estrutura de Pastas

```
PMF/
├── index.html                 # Página inicial
├── imagens/                   # Banco de imagens do projeto
│   ├── celular.png
│   ├── fundo.png
│   ├── mão com celular.png
│   ├── mão robo.png
│   ├── robo 1.png
│   ├── robo 2.png
│   ├── robo 3.png
│   └── robo com celular e pc.png
├── src/
│   ├── css/
│   │   ├── variables.css      # Design system e variáveis CSS
│   │   ├── global.css         # Estilos globais e resets
│   │   ├── components.css     # Componentes reutilizáveis
│   │   ├── home.css           # Estilos página inicial
│   │   └── pages.css          # Estilos páginas secundárias
│   ├── js/
│   │   ├── main.js            # JavaScript principal
│   │   └── contact.js         # Lógica de formulário de contato
│   └── pages/
│       ├── empresa.html       # Página sobre a empresa
│       ├── produtos.html      # Catálogo de produtos
│       ├── planos.html        # Planos e preços
│       └── contato.html       # Formulário de contato
└── README.md                  # Este arquivo

```

---

## 🖥️ Páginas Disponíveis

### 1. **Home (index.html)**
- Hero section com chamada para ação
- Seção "O que fazemos / O que não fazemos"
- Produtos sob encomenda
- Produtos SaaS
- Gestão de projetos
- Desktop & Mobile
- Footer

### 2. **Empresa (src/pages/empresa.html)**
- Informações sobre a WORLD
- Valores da empresa (Qualidade, Transparência, Inovação, Comprometimento)
- Apresentação da equipe
- Estatísticas da empresa
- CTA para contato

### 3. **Produtos (src/pages/produtos.html)**
- Produtos sob encomenda (4 categorias)
- Produtos SaaS (3 soluções)
- Links para propostas

### 4. **Planos (src/pages/planos.html)**
- Tabela de preços para cada SaaS
- Planos: Básico, Profissional, Enterprise
- Seção de FAQ
- CTA para testes gratuitos

### 5. **Contato (src/pages/contato.html)**
- Formulário de contato completo
- Informações de contato
- Links de redes sociais
- Mapa interativo
- FAQ

---

## 🎯 Componentes Reutilizáveis

### Botões
```html
<!-- Primário -->
<button class="btn btn-primary">Texto</button>

<!-- Secundário -->
<button class="btn btn-secondary">Texto</button>

<!-- Ghost -->
<button class="btn btn-ghost">Texto</button>
```

### Cards
```html
<div class="card">
    <h3>Título</h3>
    <p>Descrição</p>
</div>
```

### Badges
```html
<span class="badge">Disponível</span>
```

### Grids
```html
<!-- 2 colunas -->
<div class="grid grid-2">
    <div>Item 1</div>
    <div>Item 2</div>
</div>

<!-- 3 colunas -->
<div class="grid grid-3">...</div>

<!-- 4 colunas -->
<div class="grid grid-4">...</div>
```

---

## 🎨 Animações

### Disponíveis:
- `fadeIn` - Desvanecimento de entrada
- `slideInUp` - Deslizar de baixo para cima
- `slideInDown` - Deslizar de cima para baixo
- `slideInLeft` - Deslizar da esquerda
- `slideInRight` - Deslizar da direita
- `glow` - Efeito de brilho
- `pulse` - Pulsação suave

### Tempos de Transição:
- `--transition-fast`: 150ms
- `--transition-base`: 250ms (padrão)
- `--transition-slow`: 350ms

---

## 🔧 Funcionalidades JavaScript

### Navigation
- Menu responsivo com hamburger
- Seletor de idioma (PT/EN/ES)
- Ativação automática do link ativo
- Suavização ao rolar

### Modal de Consulta
- Abre ao clicar em "Solicite um Diagnóstico"
- Formulário integrado
- Validação de campos

### Scroll to Top
- Botão flutuante aparece ao rolar
- Scroll suavizado para o topo

### Formulário de Contato
- Validação de email
- Notificações de sucesso/erro
- Prevenção de duplo envio

---

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:

```css
/* Desktop */
@media (max-width: 1024px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Mobile */
@media (max-width: 480px) { }
```

---

## 🚀 Como Usar

### Abrir o Site

1. **Local**: Abra `index.html` no navegador
2. **Servidor**: Utilize um servidor web local (recomendado)

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (npx)
npx http-server
```

### Adicionar Novo Produto

1. Edite `src/pages/produtos.html`
2. Adicione um novo `.product-showcase-item` ou `.saas-showcase-item`
3. Use as imagens da pasta `imagens/`

### Customizar Cores

Edite `src/css/variables.css`:
```css
:root {
    --color-primary: #6F35BB; /* Mude para sua cor */
    /* ... outros valores ... */
}
```

### Adicionar Novo Idioma

1. Adicione a opção no dropdown de idioma em todas as páginas
2. Implemente a lógica de tradução em `src/js/main.js`

---

## 🔗 Links Internos

Todos os links internos funcionam corretamente:

```html
<!-- Página inicial -->
<a href="index.html">Home</a>

<!-- Páginas internas -->
<a href="src/pages/empresa.html">Empresa</a>
<a href="src/pages/produtos.html">Produtos</a>
<a href="src/pages/planos.html">Planos</a>
<a href="src/pages/contato.html">Contato</a>

<!-- De páginas internas para home -->
<a href="../../index.html">Home</a>
```

---

## 📊 Performance

- **CSS Minificado**: Não (facilita leitura)
- **JavaScript Modular**: Separado por seção
- **Lazy Loading**: Imagens otimizadas
- **Animações GPU**: Usar `transform` e `opacity`

---

## 🔐 Segurança

- Formulário de contato com validação de email
- Proteção contra XSS
- Links sanitizados
- Sem dados sensíveis hardcoded

---

## 📝 Convenções de Código

### HTML
- Use classes semânticas
- Use IDs apenas para JavaScript
- Mantenha a indentação consistente

### CSS
- Use variáveis CSS
- Siga padrão BEM para classes complexas
- Mobile-first para media queries

### JavaScript
- Use `const` e `let`, nunca `var`
- Nomes descritivos para funções
- Comentários apenas para lógica complexa

---

## 🐛 Troubleshooting

### Imagens não aparecem
- Verifique os caminhos das imagens
- Use `../../imagens/` de páginas dentro de `src/pages/`

### Estilos não aplicam
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique a ordem de importação do CSS

### Modal não abre
- Certifique-se que `main.js` está carregado
- Verifique o console para erros

---

## 📞 Contato e Suporte

Para dúvidas sobre o desenvolvimento:
- Email: contato@worldsolutions.com
- WhatsApp: (11) 99999-9999

---

## 📄 Licença

© 2026 IS Connect. Todos os direitos reservados.

---

**Versão**: 1.0.0  
**Data**: 31 de Janeiro de 2026  
**Desenvolvido por**: GitHub Copilot  
**Full Stack Developer Standard**
