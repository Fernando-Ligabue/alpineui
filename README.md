<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Fernando-Ligabue/alpineui/main/src/app/icon.svg">
    <img alt="AlpineUI" src="https://raw.githubusercontent.com/Fernando-Ligabue/alpineui/main/src/app/icon.svg" width="80" height="80">
  </picture>
</p>

<h1 align="center">AlpineUI</h1>

<p align="center">
  <strong>Beautiful, copy-paste components for Alpine.js + Tailwind CSS</strong>
  <br>
  <em>Inspirado por shadcn/ui. Construído para a web real.</em>
  <br>
  <em>Inspired by shadcn/ui. Built for the real web.</em>
</p>

<p align="center">
  <a href="#-sobre">Português</a> •
  <a href="#-about">English</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Alpine.js-3.x-77C1D2?style=flat&logo=alpine.js&logoColor=black" alt="Alpine.js">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/52%20componentes-8A2BE2?style=flat" alt="52 components">
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat" alt="MIT">
</p>

---

<br>

# 🇧🇷 AlpineUI

<table>
<tr>
<td width="50%">

## 📋 Sobre

**AlpineUI** é uma coleção de componentes UI reutilizáveis, bonitos e prontos para uso, construídos com **Alpine.js** e **Tailwind CSS**.

Diferente de bibliotecas tradicionais, você não instala nada — basta copiar o HTML e colar no seu projeto. O código é **100% seu**, sem caixas-pretas, sem dependências ocultas, sem bloat.

</td>
<td width="50%">

## ✨ Filosofia

| Princípio | Motivo |
|-----------|--------|
| **Copy-paste** | Você mantém controle total do código |
| **Zero dependências** | Apenas Alpine.js + Tailwind CSS |
| **Acessível** | Componentes seguem WAI-ARIA |
| **Leve** | Importe só o que usar |
| **Customizável** | Tailwind puro, sem abstrações |

</td>
</tr>
</table>

## 🚀 Começar em 30 segundos

```html
<!-- 1. Adicione Alpine.js e Tailwind ao seu HTML -->
<script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x/dist/cdn.min.js" defer></script>
<script src="https://cdn.tailwindcss.com"></script>

<!-- 2. Copie qualquer componente do AlpineUI -->
<div x-data="{ count: 0 }" class="text-center">
  <p class="text-lg mb-4">
    Count: <span x-text="count">0</span>
  </p>
  <button @click="count++"
    class="inline-flex items-center justify-center gap-2 h-10 px-4 py-2
           rounded-md bg-black text-white text-sm font-medium
           hover:opacity-90 transition-opacity">
    Incrementar
  </button>
</div>
```

### 🎯 Modo de uso

1. Aceda a **[alpineui.netlify.app](https://alpineui.netlify.app)**
2. Navegue até o componente desejado
3. Clique no separador **Code** para ver o código
4. **Copie e cole** no seu projeto

> ✅ Não precisa de npm, CLI, bundler, ou ficheiros CSS adicionais.

---

## 📦 Componentes Disponíveis

### Formulários
| Componente | Descrição |
|-----------|-----------|
| `Button` | Botões com variantes (default, secondary, outline, ghost, destructive) e tamanhos |
| `Input` | Campo de texto com label, placeholder e estados de foco |
| `Textarea` | Área de texto redimensionável |
| `Checkbox` | Checkbox estilizado com estados checked/indeterminate |
| `Switch` | Interruptor toggle animado |
| `Radio Group` | Grupo de opções exclusivas |
| `Select` | Select personalizado com Alpine.js |
| `Slider` | Controlo deslizante com valores dinâmicos |
| `Date Picker` | Seletor de data interativo |

### Navegação
| Componente | Descrição |
|-----------|-----------|
| `Breadcrumb` | Migalhas de pão para navegação hierárquica |
| `Pagination` | Paginação completa com números e setas |
| `Dropdown Menu` | Menu dropdown com itens clicáveis |
| `Context Menu` | Menu de contexto ao clique direito |
| `Navigation Menu` | Menu de navegação com submenus |
| `Sidebar` | Barra lateral responsiva |

### Overlays & Feedback
| Componente | Descrição |
|-----------|-----------|
| `Dialog` | Modal acessível com focus trap |
| `Alert Dialog` | Diálogo de confirmação destrutivo |
| `Drawer` | Painel deslizante (top/bottom/left/right) |
| `Toast` | Notificações temporárias com variantes |
| `Tooltip` | Dica contextual ao hover |
| `Popover` | Contentor flutuante com posicionamento |

### Layout & Data
| Componente | Descrição |
|-----------|-----------|
| `Card` | Cartão versátil com cabeçalho e conteúdo |
| `Accordion` | Secções expansíveis com animação |
| `Tabs` | Abas de conteúdo com múltiplos estilos |
| `Table` | Tabela responsiva com cabeçalho fixo |
| `Badge` | Etiquetas de estado com cores |
| `Avatar` | Avatar com fallback a iniciais |
| `Progress` | Barra de progresso animada |
| `Skeleton` | Placeholder de carregamento |
| `Spinner` | Indicador de carregamento |
| `Separator` | Linha separadora horizontal/vertical |
| `Resizable` | Painéis redimensionáveis |
| `Scroll Area` | Área com scroll personalizado |
| `Carousel` | Carrossel de imagens/ conteúdo |
| `Button Group` | Grupo de botões agrupados |
| `Toggle Group` | Grupo de toggles |
| `KBD` | Atalhos de teclado estilizados |
| `Aspect Ratio` | Contentor com proporção fixa |
| `Collapsible` | Secção recolhível |
| `Label` | Label estilizado para formulários |
| `Native Select` | Select nativo estilizado |
| `Toggle` | Botão toggle liga/desliga |

---

## 🎨 Tema Escuro

AlpineUI suporta **dark mode nativamente**. Todos os componentes estão disponíveis com classes `dark:`:

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-lg">
  <h2 class="text-lg font-semibold">Modo escuro</h2>
  <p class="text-gray-600 dark:text-gray-400">
    Funciona com classe `.dark` no `<html>` ou `prefers-color-scheme`.
  </p>
</div>
```

Basta adicionar a classe `.dark` ao elemento `<html>` e os componentes adaptam-se automaticamente.

---

## 🛠 Stack Tecnológica

| Tecnologia | Versão | Função |
|-----------|--------|--------|
| [Alpine.js](https://alpinejs.dev/) | 3.x | Interatividade reativa |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização utility-first |
| [Heroicons](https://heroicons.com/) | — | Ícones SVG |

> AlpineUI **não requer build step**. Funciona diretamente via CDN.

---

## 🤝 Como Contribuir

1. Faça um **fork** do repositório
2. Crie uma branch: `git checkout -b feature/minha-feature`
3. Faça commit: `git commit -m 'feat: adicionar novo componente'`
4. Push: `git push origin feature/minha-feature`
5. Abra um **Pull Request**

Veja a lista de issues em aberto para ideias de contribuição.

---

## 📄 Licença

**MIT** © [Fernando Ligabue](https://github.com/Fernando-Ligabue)

---

> **Nota:** AlpineUI é uma biblioteca de referência. Copie os componentes que precisa, adapte ao seu projeto, e construa algo incrível. 🏔️

---

<br>
<br>

---

<br>

# 🇺🇸 AlpineUI

<table>
<tr>
<td width="50%">

## 📋 About

**AlpineUI** is a collection of reusable, beautifully designed UI components built with **Alpine.js** and **Tailwind CSS**.

Unlike traditional libraries, you don't install anything — just copy the HTML and paste it into your project. The code is **100% yours**, no black boxes, no hidden dependencies, no bloat.

</td>
<td width="50%">

## ✨ Philosophy

| Principle | Reason |
|-----------|--------|
| **Copy-paste** | You own the code. Full control. |
| **Zero deps** | Only Alpine.js + Tailwind CSS |
| **Accessible** | WAI-ARIA compliant components |
| **Lightweight** | Import only what you use |
| **Customizable** | Pure Tailwind, no abstraction layers |

</td>
</tr>
</table>

## 🚀 Quick Start in 30 seconds

```html
<!-- 1. Add Alpine.js and Tailwind to your HTML -->
<script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x/dist/cdn.min.js" defer></script>
<script src="https://cdn.tailwindcss.com"></script>

<!-- 2. Copy any AlpineUI component -->
<div x-data="{ count: 0 }" class="text-center">
  <p class="text-lg mb-4">
    Count: <span x-text="count">0</span>
  </p>
  <button @click="count++"
    class="inline-flex items-center justify-center gap-2 h-10 px-4 py-2
           rounded-md bg-black text-white text-sm font-medium
           hover:opacity-90 transition-opacity">
    Increment
  </button>
</div>
```

### 🎯 How to use

1. Go to **[alpineui.netlify.app](https://alpineui.netlify.app)**
2. Browse to the component you need
3. Click the **Code** tab to show the source
4. **Copy and paste** into your project

> ✅ No npm, CLI, bundler, or extra CSS files required.

---

## 📦 Available Components

### Forms
| Component | Description |
|-----------|-------------|
| `Button` | Buttons with variants (default, secondary, outline, ghost, destructive) and sizes |
| `Input` | Text input with label, placeholder and focus states |
| `Textarea` | Resizable textarea |
| `Checkbox` | Styled checkbox with checked/indeterminate states |
| `Switch` | Animated toggle switch |
| `Radio Group` | Exclusive option group |
| `Select` | Custom select with Alpine.js |
| `Slider` | Range slider with dynamic values |
| `Date Picker` | Interactive date picker |

### Navigation
| Component | Description |
|-----------|-------------|
| `Breadcrumb` | Hierarchical breadcrumb navigation |
| `Pagination` | Full pagination with numbers and arrows |
| `Dropdown Menu` | Clickable dropdown menu |
| `Context Menu` | Right-click context menu |
| `Navigation Menu` | Navigation menu with submenus |
| `Sidebar` | Responsive sidebar |

### Overlays & Feedback
| Component | Description |
|-----------|-------------|
| `Dialog` | Accessible modal with focus trap |
| `Alert Dialog` | Destructive confirmation dialog |
| `Drawer` | Sliding panel (top/bottom/left/right) |
| `Toast` | Temporary notifications with variants |
| `Tooltip` | Contextual tooltip on hover |
| `Popover` | Floating positioned container |

### Layout & Data
| Component | Description |
|-----------|-------------|
| `Card` | Versatile card with header and content |
| `Accordion` | Expandable sections with animation |
| `Tabs` | Content tabs with multiple styles |
| `Table` | Responsive table with fixed header |
| `Badge` | Status badges with colors |
| `Avatar` | Avatar with initials fallback |
| `Progress` | Animated progress bar |
| `Skeleton` | Loading placeholder |
| `Spinner` | Loading indicator |
| `Separator` | Horizontal/vertical divider |
| `Resizable` | Resizable panels |
| `Scroll Area` | Styled custom scroll area |
| `Carousel` | Image/content carousel |
| `Button Group` | Grouped button set |
| `Toggle Group` | Toggle button group |
| `KBD` | Styled keyboard shortcuts |
| `Aspect Ratio` | Fixed ratio container |
| `Collapsible` | Collapsible section |
| `Label` | Styled form label |
| `Native Select` | Styled native select |
| `Toggle` | On/off toggle button |

---

## 🎨 Dark Mode

AlpineUI has **native dark mode support**. Every component is available with `dark:` classes:

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-lg">
  <h2 class="text-lg font-semibold">Dark Mode</h2>
  <p class="text-gray-600 dark:text-gray-400">
    Works with `.dark` class on `<html>` or `prefers-color-scheme`.
  </p>
</div>
```

Just add the `.dark` class to `<html>` and all components adapt automatically.

---

## 🛠 Tech Stack

| Technology | Version | Role |
|-----------|---------|------|
| [Alpine.js](https://alpinejs.dev/) | 3.x | Reactive interactivity |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [Heroicons](https://heroicons.com/) | — | SVG icons |

> AlpineUI **requires no build step**. Works directly via CDN.

---

## 🤝 Contributing

1. **Fork** the repository
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit: `git commit -m 'feat: add new component'`
4. Push: `git push origin feature/my-feature`
5. Open a **Pull Request**

Check the open issues for contribution ideas.

---

## 📄 License

**MIT** © [Fernando Ligabue](https://github.com/Fernando-Ligabue)

---

> **Note:** AlpineUI is a reference library. Copy the components you need, adapt them to your project, and build something amazing. 🏔️
