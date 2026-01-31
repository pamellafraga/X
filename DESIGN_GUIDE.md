# Guia de Estilo - WORLD Software Solutions

## 📐 Design Guide Completo

### 1. Tipografia

#### Hierarquia de Títulos
- **H1**: 3.5rem | 56px | Font-weight: 800 | Linha: Home Hero
- **H2**: 3rem | 48px | Font-weight: 700 | Seções principais
- **H3**: 2rem | 32px | Font-weight: 700 | Subseções
- **H4**: 1.5rem | 24px | Font-weight: 600 | Cards e boxes
- **H5**: 1.25rem | 20px | Font-weight: 600 | Labels
- **H6**: 1.125rem | 18px | Font-weight: 600 | Pequenos títulos

#### Estilos de Texto
- **Body Text**: 1rem | 16px | Font-weight: 400 | Line-height: 1.6
- **Small Text**: 0.875rem | 14px | Font-weight: 400 | Line-height: 1.5
- **Labels**: 0.75rem | 12px | Font-weight: 600 | Uppercase

### 2. Espaçamento

#### Margens Padrão
- **Seções**: 6rem (96px)
- **Componentes**: 2rem (32px)
- **Itens em grupo**: 1.5rem (24px)

#### Padding Interno
- **Container Principal**: 1.5rem (24px)
- **Cards**: 2rem (32px)
- **Botões**: 1rem (16px) vertical | 2rem (32px) horizontal

### 3. Cores em Contexto

#### Hierarquia Visual
- **Primária**: CTAs, Links, Destaques
- **Primária Clara**: Backgrounds suaves, Bordas
- **Primária Escura**: Hover, Active states
- **Escura**: Backgrounds, Bases
- **Clara**: Textos principais
- **Cinza**: Textos secundários, Descriptions

#### Gradientes Sugeridos
```css
/* Hero gradient */
background: linear-gradient(135deg, rgba(111, 53, 187, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%);

/* Card gradient */
background: linear-gradient(135deg, rgba(111, 53, 187, 0.05) 0%, rgba(111, 53, 187, 0.05) 100%);

/* Text gradient */
background: linear-gradient(135deg, #FFFFFF 0%, #6F35BB 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### 4. Componentes

#### Botão Primário
```css
background: #6F35BB;
color: #FFFFFF;
padding: 1rem 2rem;
border-radius: 9999px;
border: none;
cursor: pointer;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
box-shadow: 0 0 20px rgba(111, 53, 187, 0.3);
```

**Hover**: 
```css
background: #5a2a8f;
box-shadow: 0 0 30px rgba(111, 53, 187, 0.5);
transform: translateY(-3px);
```

#### Botão Secundário
```css
background: rgba(111, 53, 187, 0.1);
color: #6F35BB;
border: 1px solid #6F35BB;
padding: 1rem 2rem;
border-radius: 9999px;
cursor: pointer;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
```

**Hover**:
```css
background: #6F35BB;
color: #FFFFFF;
box-shadow: 0 0 20px rgba(111, 53, 187, 0.4);
```

#### Card
```css
padding: 2rem;
background: rgba(111, 53, 187, 0.05);
border: 1px solid rgba(111, 53, 187, 0.2);
border-radius: 1rem;
transition: all 250ms ease-in-out;
```

**Hover**:
```css
background: rgba(111, 53, 187, 0.1);
border-color: #6F35BB;
box-shadow: 0 0 20px rgba(111, 53, 187, 0.3);
transform: translateY(-10px);
```

### 5. Ícones

#### Tamanhos Padrão
- **Small**: 16x16px (labels, badges)
- **Medium**: 24x24px (padrão)
- **Large**: 32x32px (featured)
- **XL**: 48x48px (hero)
- **2XL**: 80x80px (highlights)

#### Cores de Ícone
- **Primários**: Usar cor primária
- **Secundários**: Usar cinza
- **Success**: #10B981
- **Warning**: #F59E0B
- **Error**: #EF4444

### 6. Shadows (Sombras)

```css
/* Small */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Medium */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Large */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

/* Glow (especial) */
box-shadow: 0 0 20px rgba(111, 53, 187, 0.3);
```

### 7. Bordas (Borders)

#### Radius
- **Small**: 4px (inputs, badges)
- **Medium**: 8px (padrão)
- **Large**: 16px (cards)
- **Full**: 9999px (buttons)

#### Cores de Borda
- **Primária**: 1px solid rgba(111, 53, 187, 0.2)
- **Strong**: 1px solid #6F35BB
- **Light**: 1px solid #E5E5E5

### 8. Backgrounds

#### Cores Sólidas
- **Primary BG**: #000000
- **Light BG**: #FFFFFF
- **Overlay**: rgba(0, 0, 0, 0.5)
- **Tint**: rgba(111, 53, 187, 0.05)

#### Gradientes Sugeridos
```css
/* Diagonal Light */
background: linear-gradient(135deg, rgba(111, 53, 187, 0.1) 0%, rgba(0, 0, 0, 0) 100%);

/* Diagonal Dark */
background: linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(111, 53, 187, 0.05) 100%);

/* Vertical */
background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 100%);
```

### 9. Animações Principais

#### Timing Functions
- **Fast**: 150ms ease-in-out (hovers)
- **Base**: 250ms ease-in-out (padrão)
- **Slow**: 350ms ease-in-out (grandes mudanças)

#### Easing Recommendations
```css
/* Smooth */
transition-timing-function: ease-in-out;

/* Quick Feedback */
transition-timing-function: ease-out;

/* Natural */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

### 10. Espaçamento de Grid

#### Container
```css
max-width: 1400px;
margin: 0 auto;
padding: 0 1.5rem;
```

#### Grid Responsivo
```css
/* 4 colunas */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* 3 colunas */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

/* 2 colunas */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

### 11. Breakpoints

```css
/* Desktop */
1024px+

/* Tablet */
768px - 1023px

/* Mobile */
480px - 767px

/* Small Mobile */
-479px
```

### 12. Estados de Componentes

#### Link
- **Normal**: color: inherit
- **Hover**: color: #6F35BB
- **Active**: color: #5a2a8f

#### Input
- **Normal**: border: 1px solid rgba(111, 53, 187, 0.2)
- **Focus**: border: 1px solid #6F35BB; box-shadow: 0 0 20px rgba(111, 53, 187, 0.2)
- **Error**: border: 1px solid #EF4444; color: #EF4444
- **Disabled**: opacity: 0.5; cursor: not-allowed

---

## 🎨 Paleta de Cores Expandida

### Purples
- Roxo Escuro: #5a2a8f
- Roxo Primário: #6F35BB
- Roxo Claro: #8B5FBF
- Roxo Muito Claro: #CCA8FA

### Grays
- Preto: #000000
- Cinza Escuro: #0F0F0F
- Cinza Médio: #666666
- Cinza: #C7C7D6
- Cinza Claro: #E5E5E5
- Branco: #FFFFFF

### Semantic
- Success: #10B981
- Warning: #F59E0B
- Error: #EF4444
- Info: #3B82F6

---

## 📋 Checklist de Qualidade

- [ ] Todos os textos em pt-BR
- [ ] Imagens otimizadas e comprimidas
- [ ] Links internos funcionam em todas as páginas
- [ ] Formulários validam dados
- [ ] Mobile responsivo (teste em 480px)
- [ ] Contraste de cores atende WCAG
- [ ] Performance > 90 no Lighthouse
- [ ] Sem console errors
- [ ] Cross-browser compatível

---

**Versão**: 1.0.0  
**Atualizado**: 31 de Janeiro de 2026
