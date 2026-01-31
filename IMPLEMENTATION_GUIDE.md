# Instruções de Implementação - WORLD Software Solutions

## 🚀 Como Começar

### 1. Abrir o Projeto

```bash
# Navegue até a pasta do projeto
cd c:\Users\Pamella\Documents\PMF

# Abra em um navegador (recomendado usar um servidor local)
# Opção 1: Com Python 3
python -m http.server 8000

# Opção 2: Com Node.js
npx http-server

# Opção 3: Abra o arquivo index.html diretamente no navegador
# (menos recomendado, pode ter problemas com CORS)
```

### 2. Visualizar as Páginas

- **Home**: http://localhost:8000
- **Empresa**: http://localhost:8000/src/pages/empresa.html
- **Produtos**: http://localhost:8000/src/pages/produtos.html
- **Planos**: http://localhost:8000/src/pages/planos.html
- **Contato**: http://localhost:8000/src/pages/contato.html

---

## 🛠️ Customizações Comuns

### Adicionar Novo Produto

1. Abra `src/pages/produtos.html`
2. Encontre a seção `.products-showcase` ou `.saas-showcase`
3. Adicione um novo card:

```html
<div class="product-showcase-item">
    <div class="product-icon" style="background: linear-gradient(135deg, #6F35BB, #CCA8FA);">
        🎯
    </div>
    <h3>Seu Novo Produto</h3>
    <p>Descrição do produto aqui.</p>
    <a href="contato.html" class="btn btn-secondary">Solicitar Proposta</a>
</div>
```

### Mudar Cores Primárias

1. Abra `src/css/variables.css`
2. Altere os valores em `:root`:

```css
:root {
    --color-primary: #NNNNNNN; /* Nova cor aqui */
    --color-primary-light: #NNNNNNN;
    --color-primary-dark: #NNNNNNN;
    /* ... */
}
```

Todos os elementos que usam a cor primária serão atualizados automaticamente.

### Adicionar Nova Seção

Modelo básico para uma nova seção:

```html
<section class="nova-secao">
    <div class="container">
        <h2>Título da Seção</h2>
        <p class="section-subtitle">Subtítulo aqui</p>
        
        <div class="nova-grid">
            <div class="novo-item">
                <h3>Item 1</h3>
                <p>Conteúdo</p>
            </div>
        </div>
    </div>
</section>
```

CSS correspondente em `src/css/pages.css`:

```css
.nova-secao {
    padding: var(--spacing-5xl) var(--spacing-lg);
}

.nova-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-2xl);
}

.novo-item {
    padding: var(--spacing-2xl);
    background: rgba(111, 53, 187, 0.05);
    border: 1px solid rgba(111, 53, 187, 0.2);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
}

.novo-item:hover {
    background: rgba(111, 53, 187, 0.1);
    border-color: var(--color-primary);
    box-shadow: var(--shadow-glow);
    transform: translateY(-10px);
}
```

### Configurar Email de Contato

1. Abra `src/pages/contato.html`
2. Procure por `<a href="mailto:">`
3. Substitua pelo seu email:

```html
<a href="mailto:seu-email@example.com">seu-email@example.com</a>
```

4. Abra `src/pages/empresa.html` e `src/pages/planos.html` para atualizar também.

### Adicionar Redes Sociais

Em `src/pages/contato.html`, encontre a seção `.social-icons`:

```html
<div class="social-icons">
    <a href="https://linkedin.com/company/seu-empresa" class="social-icon" target="_blank">LinkedIn</a>
    <a href="https://github.com/seu-usuario" class="social-icon" target="_blank">GitHub</a>
    <a href="https://twitter.com/seu-usuario" class="social-icon" target="_blank">Twitter</a>
</div>
```

### Ativar Envio de Formulário

Atualmente, o formulário apenas simula envio. Para ativar:

1. Abra `src/js/contact.js`
2. Na função `handleFormSubmit`, substitua o `setTimeout`:

```javascript
// Enviar para um backend (exemplo com fetch)
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name,
        email,
        phone,
        company,
        subject,
        message
    })
})
.then(response => response.json())
.then(data => {
    showNotification('Mensagem enviada com sucesso!', 'success');
    this.reset();
})
.catch(error => {
    showNotification('Erro ao enviar. Tente novamente.', 'error');
});
```

---

## 🌐 Implementar Seletor de Idioma

### 1. Criar arquivos de tradução

Crie `src/js/translations.json`:

```json
{
  "pt": {
    "home": "Home",
    "empresa": "Empresa",
    "produtos": "Produtos",
    "planos": "Planos",
    "contato": "Contato"
  },
  "en": {
    "home": "Home",
    "empresa": "Company",
    "produtos": "Products",
    "planos": "Plans",
    "contato": "Contact"
  },
  "es": {
    "home": "Inicio",
    "empresa": "Empresa",
    "produtos": "Productos",
    "planos": "Planes",
    "contato": "Contacto"
  }
}
```

### 2. Implementar lógica em `src/js/main.js`:

```javascript
let currentLanguage = localStorage.getItem('preferredLanguage') || 'pt';

function changeLanguage(lang, element) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Carregar traduções
    fetch('../../src/js/translations.json')
        .then(response => response.json())
        .then(translations => {
            updatePageText(translations[lang]);
        });
}

function updatePageText(translations) {
    // Atualizar elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}
```

### 3. No HTML, adicione atributos `data-i18n`:

```html
<a href="index.html" class="nav-link" data-i18n="home">Home</a>
<a href="src/pages/empresa.html" class="nav-link" data-i18n="empresa">Empresa</a>
```

---

## 🔍 Otimização para SEO

### 1. Meta Tags em cada página:

```html
<meta name="description" content="Descrição da página (150-160 caracteres)">
<meta name="keywords" content="palavra1, palavra2, palavra3">
<meta name="author" content="WORLD Software Solutions">
<meta property="og:title" content="Título da página">
<meta property="og:description" content="Descrição">
<meta property="og:image" content="url-da-imagem">
<meta property="og:url" content="url-da-pagina">
```

### 2. Sitemap (crie `sitemap.xml`):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://worldsolutions.com/</loc>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://worldsolutions.com/src/pages/empresa.html</loc>
        <priority>0.8</priority>
    </url>
    <!-- ... outras páginas ... -->
</urlset>
```

### 3. Robots.txt (crie `robots.txt`):

```
User-agent: *
Allow: /
Disallow: /private/

Sitemap: https://worldsolutions.com/sitemap.xml
```

---

## 📊 Analytics (Google Analytics)

Adicione após `<head>` em todas as páginas:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Substitua `GA_MEASUREMENT_ID` pelo seu ID do Google Analytics.

---

## 🔒 Hospedagem

### Opções Recomendadas:

1. **Vercel** (ideal para front-end estático)
   - Integração GitHub automática
   - Deploy automático
   - CDN global

2. **Netlify** 
   - Drag & drop deployment
   - Formulários automáticos
   - Bom desempenho

3. **GitHub Pages** (gratuito)
   - Push automático
   - Domínio customizado
   - Sem backend

### Deploy no Vercel:

```bash
# Instalar CLI
npm i -g vercel

# Deploy
vercel

# Acompanhar produção
vercel prod
```

---

## 🧪 Testes

### Checklist de Testes:

- [ ] Todos os links funcionam
- [ ] Formulário valida dados
- [ ] Responsivo em 320px, 768px, 1024px
- [ ] Carregamento rápido (< 3s)
- [ ] Sem erros de console
- [ ] Contraste de cores OK
- [ ] Imagens otimizadas
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)

### Ferramentas Úteis:

- **Google Lighthouse**: https://web.dev/measure/
- **WebPageTest**: https://www.webpagetest.org/
- **Responsively**: https://responsively.app/
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/

---

## 📱 Progressive Web App (PWA)

Para tornar o site um PWA, crie `manifest.json`:

```json
{
  "name": "WORLD Software Solutions",
  "short_name": "WORLD",
  "description": "Engenharia de software para empresas que não podem errar",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#6F35BB",
  "icons": [
    {
      "src": "/assets/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

Adicione em cada página:

```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#6F35BB">
<link rel="apple-touch-icon" href="/assets/icon-180.png">
```

---

## 🐛 Debug e Troubleshooting

### Problema: Imagens não aparecem
```
Solução: Verifique os caminhos relativos
- De index.html: imagens/nome.png
- De src/pages/*.html: ../../imagens/nome.png
```

### Problema: CSS não aplica
```
Solução: 
1. Ctrl+Shift+Delete (limpar cache)
2. Verifique ordem de imports
3. Não use !important (a menos que necessário)
```

### Problema: Modal não abre
```
Solução: 
1. Console > Console.log()
2. Verifique se main.js está carregado
3. Verifique se existe elemento #consultButton
```

### Problema: Formulário não funciona
```
Solução:
1. Verifique validação em contact.js
2. Verifique console para erros
3. Implemente backend para envio
```

---

## 📚 Recursos Adicionais

- **MDN Web Docs**: https://developer.mozilla.org/
- **CSS-Tricks**: https://css-tricks.com/
- **Web.dev**: https://web.dev/
- **Figma**: Para design de mockups
- **ColorMind**: Para paletas de cores

---

## 📞 Suporte

Para dúvidas técnicas:
1. Consulte a documentação em `README.md`
2. Verifique o Design Guide em `DESIGN_GUIDE.md`
3. Entre em contato: contato@worldsolutions.com

---

**Última atualização**: 31 de Janeiro de 2026
**Status**: Pronto para Produção ✅
