# Dicas de Desenvolvimento - WORLD Software Solutions

## 🎯 Manutenção e Melhorias

### 1. Adicionar Nova Funcionalidade

#### Passo 1: Planejar
- Defina o escopo
- Crie um arquivo nova-feature.md
- Desenhe a interface

#### Passo 2: Implementar HTML
- Adicione na página correta
- Use classes semânticas
- Mantenha a estrutura consistente

#### Passo 3: Estilizar (CSS)
- Adicione em `pages.css` ou `home.css`
- Use variáveis de cores
- Teste em todos os breakpoints

#### Passo 4: Adicionar Lógica (JS)
- Crie função em `main.js`
- Adicione event listeners
- Teste no console

#### Passo 5: Documentar
- Adicione comentários no código
- Atualize a documentação
- Crie screenshot/gif


### 2. Performance Tips

#### CSS
```css
/* ✅ BOM - Usa classes */
.button { color: blue; }

/* ❌ RUIM - Seletores muito específicos */
div.container > ul > li a.button { color: blue; }
```

#### JavaScript
```javascript
/* ✅ BOM - Função reutilizável */
function handleClick(e) {
    // ...
}
element.addEventListener('click', handleClick);

/* ❌ RUIM - Função anônima inline */
element.addEventListener('click', function(e) {
    // ...
});
```

#### Imagens
```html
<!-- ✅ BOM - Otimizado -->
<img src="image-optimized.png" alt="Descrição">

<!-- ❌ RUIM - Arquivo grande -->
<img src="image-original-uncompressed.png" alt="">
```


### 3. Boas Práticas de Código

#### HTML
```html
✅ Sempre use alt em imagens
✅ Use headings em ordem (H1 > H2 > H3)
✅ Use labels para inputs
✅ Use ids únicos
✅ Use classes para estilo
```

#### CSS
```css
✅ Use variáveis CSS
✅ Mobile-first approach
✅ Media queries no final
✅ Organize por componentes
✅ Use abbreviations (mb para margin-bottom)
```

#### JavaScript
```javascript
✅ Use const/let, nunca var
✅ Nomes descritivos
✅ Funções pequenas e focadas
✅ Comments apenas para lógica complexa
✅ Evite globals
```


### 4. Debugging

#### Console Commands
```javascript
// Verificar elemento
console.log(document.querySelector('.selector'));

// Verificar todas as classes aplicadas
console.log(element.className);

// Verificar estilos computados
console.log(window.getComputedStyle(element));

// Listar event listeners
getEventListeners(element);
```

#### Chrome DevTools
1. **F12** - Abrir DevTools
2. **Console** - Ver erros e usar JavaScript
3. **Elements** - Inspecionar HTML
4. **Styles** - Ver CSS aplicado
5. **Network** - Monitorar requisições
6. **Performance** - Medir velocidade


### 5. Testes

#### Testes Manual
```
- [ ] Todos os links funcionam
- [ ] Formulários validam
- [ ] Responsive em 3 tamanhos
- [ ] Sem console errors
- [ ] Imagens carregam
- [ ] Animações funcionam
- [ ] Modal abre/fecha
- [ ] Menu mobile funciona
```

#### Teste de Performance
```
Google Lighthouse:
1. Abra DevTools (F12)
2. Aba "Lighthouse"
3. Clique "Analyze page load"
4. Alvo: Score > 90 em todas as seções
```

#### Teste de Acessibilidade
```
Verificar:
- Contraste de cores (WCAG AA mínimo)
- Alt text em imagens
- Keyboard navigation
- Screen reader compatibility
```


### 6. Refatoração

#### Código Duplicado
```javascript
// ❌ Ruim
function handleButton1() { }
function handleButton2() { }
function handleButton3() { }

// ✅ Bom
function handleButton(type) { }
```

#### Variáveis Confusas
```javascript
// ❌ Ruim
const d = new Date();
const x = el.offsetTop;

// ✅ Bom
const currentDate = new Date();
const elementTop = element.offsetTop;
```


### 7. Versionamento

#### Versioning Scheme (Semver)
```
MAJOR.MINOR.PATCH

v1.0.0 - Release inicial
v1.1.0 - Nova feature (backwards compatible)
v1.1.1 - Bug fix (backwards compatible)
v2.0.0 - Breaking changes
```

#### Em README.md
```markdown
## Changelog

### v1.1.0 (2026-02-15)
- Adicionado: Seletor de idioma
- Corrigido: Link de contato
- Melhorado: Performance das animações

### v1.0.0 (2026-01-31)
- Release inicial
```


### 8. Git Best Practices

```bash
# Commits descritivos
git commit -m "feat: adicionar seletor de idioma"
git commit -m "fix: corrigir modal de contato"
git commit -m "refactor: reorganizar CSS"

# Branches para features
git checkout -b feature/novo-produto
git commit -m "feat: novo produto SaaS"
git push origin feature/novo-produto

# Merge
git checkout main
git merge feature/novo-produto
```


### 9. Checklist de Produção

```
Antes de fazer deploy:
- [ ] Todos os links testados
- [ ] Formulários funcionam
- [ ] Sem console errors
- [ ] Imagens otimizadas
- [ ] SEO meta tags adicionadas
- [ ] Lighthouse score > 90
- [ ] Cache headers configurados
- [ ] HTTPS ativado
- [ ] Backup realizado
- [ ] Documentação atualizada
```


### 10. Troubleshooting Comum

#### "CSS não está sendo aplicado"
```javascript
// Limpar cache
// Ctrl + Shift + Delete

// Ou via JavaScript
document.body.style.cssText = '';
```

#### "JavaScript não funciona"
```javascript
// Verificar se script está carregado
console.log('Script carregado');

// Verificar elemento existe
if (element) { /* ... */ }

// Usar try-catch
try { /* ... */ } catch (e) { console.error(e); }
```

#### "Imagem não carrega"
```html
<!-- Verificar caminho -->
<!-- De index.html: imagens/nome.png -->
<!-- De src/pages/: ../../imagens/nome.png -->

<!-- Usar console para debug -->
<img src="imagens/test.png" onerror="console.log('Erro ao carregar imagem')">
```


### 11. Recursos Úteis

**Validadores Online:**
- HTML Validator: https://validator.w3.org/
- CSS Validator: https://jigsaw.w3.org/css-validator/
- JSON Validator: https://jsonlint.com/

**Performance:**
- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/
- GTmetrix: https://gtmetrix.com/

**Design:**
- Color Picker: https://htmlcolorcodes.com/
- Font Checker: https://www.fontfaceobserver.com/
- Icon Library: https://fontawesome.com/

**Development:**
- Can I Use: https://caniuse.com/
- MDN: https://developer.mozilla.org/
- Stack Overflow: https://stackoverflow.com/


### 12. Documentação em Código

```javascript
/**
 * Carrega dados do servidor
 * @param {string} endpoint - URL do endpoint
 * @returns {Promise} Promessa com os dados
 * @example
 * loadData('/api/products')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error))
 */
async function loadData(endpoint) {
    try {
        const response = await fetch(endpoint);
        return await response.json();
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}
```


### 13. Estrutura de Pastas Expandida

Quando o projeto crescer:
```
src/
├── css/
│   ├── base/
│   │   ├── reset.css
│   │   └── typography.css
│   ├── components/
│   │   ├── button.css
│   │   ├── card.css
│   │   └── modal.css
│   ├── layout/
│   │   ├── header.css
│   │   ├── footer.css
│   │   └── grid.css
│   ├── pages/
│   │   ├── home.css
│   │   ├── products.css
│   │   └── contact.css
│   └── main.css (imports todos)
│
├── js/
│   ├── components/
│   │   ├── navigation.js
│   │   └── modal.js
│   ├── utils/
│   │   ├── helpers.js
│   │   └── validators.js
│   ├── pages/
│   │   ├── home.js
│   │   └── contact.js
│   └── main.js
│
└── pages/
    └── (como está)
```


### 14. Automação de Tarefas

Instale ferramentas para otimização:
```bash
# Instalar Node.js
# npm install -g gulp

# Criar gulpfile.js para:
# - Minificar CSS
# - Minificar JS
# - Otimizar imagens
# - Live reload
```


### 15. Monitoramento

Depois de fazer deploy:
```javascript
// Monitorar erros
window.addEventListener('error', (e) => {
    console.error('Erro capturado:', e);
    // Enviar para serviço de logging
});

// Monitorar performance
if (window.performance) {
    const perf = window.performance.timing;
    console.log('Tempo de carregamento:', perf.loadEventEnd - perf.navigationStart);
}
```


---

**Última atualização**: 31 de Janeiro de 2026
**Nível**: Intermediário/Avançado
**Status**: Referência Contínua
