# AlpineUI

<p align="center">
  <img src="https://img.shields.io/npm/v/@Fernando-Ligabue/button?style=for-the-badge" alt="npm version">
  <img src="https://img.shields.io/npm/dt/@Fernando-Ligabue/button?style=for-the-badge" alt="npm downloads">
  <img src="https://img.shields.io/github/stars/Fernando-Ligabue/alpineui?style=for-the-badge" alt="GitHub stars">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License">
</p>

> **Beautiful, accessible components for Alpine.js**

AlpineUI is a collection of beautifully designed, copy-paste UI components built for [Alpine.js](https://alpinejs.dev/). Inspired by [shadcn/ui](https://ui.shadcn.com), we bring the same philosophy to the Alpine.js ecosystem.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 **Copy-Paste First** | No black box components. You own the code. |
| ⚡ **Lightweight** | Only import what you use. Zero bloat. |
| 🎨 **Tailwind CSS** | Utility-first styling with full customization. |
| ♿ **Accessible** | WAI-ARIA compliant out of the box. |
| 📦 **TypeScript Ready** | Full TypeScript support for better DX. |
| 🤖 **CLI Tool** | Easy installation with `alpineui add`. |

---

## 🚀 Quick Start

### Using CLI (Recommended)

```bash
# Install AlpineUI CLI
npm install -g @Fernando-Ligabue/cli

# Initialize in your project
alpineui init

# Add components
alpineui add button
alpineui add dialog tabs accordion
```

### Using NPM

```bash
# Install individual components
npm install @Fernando-Ligabue/button
npm install @Fernando-Ligabue/input
npm install @Fernando-Ligabue/card

# Or install all components
npm install @Fernando-Ligabue/ui
```

### Using CDN

```html
<!-- Alpine.js -->
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

<!-- AlpineUI Components -->
<script defer src="https://npm.pkg.github.com/@Fernando-Ligabue/button"></script>
<link rel="stylesheet" href="https://npm.pkg.github.com/@Fernando-Ligabue/button/styles.css">
```

---

## 📦 Available Components

### Forms (9)
| Component | Status |
|-----------|--------|
| Button | ✅ |
| Input | ✅ |
| Textarea | ✅ |
| Checkbox | ✅ |
| Switch | ✅ |
| Radio Group | ✅ |
| Select | ✅ |
| Slider | ✅ |
| Date Picker | ✅ |

### Layout (4)
| Component | Status |
|-----------|--------|
| Card | ✅ |
| Accordion | ✅ |
| Tabs | ✅ |
| Table | ✅ |

### Navigation (6)
| Component | Status |
|-----------|--------|
| Breadcrumb | ✅ |
| Pagination | ✅ |
| Dropdown | ✅ |
| Context Menu | ✅ |
| Navigation Menu | ✅ |

### Overlay (4)
| Component | Status |
|-----------|--------|
| Dialog | ✅ |
| Toast | ✅ |
| Tooltip | ✅ |
| Popover | ✅ |

### Data Display (3)
| Component | Status |
|-----------|--------|
| Badge | ✅ |
| Avatar | ✅ |
| Progress | ✅ |

---

## 🎨 Design System

AlpineUI uses CSS custom properties for easy customization:

```css
:root {
  --au-background: #ffffff;
  --au-foreground: #0a0a0a;
  --au-primary: #0a0a0a;
  --au-primary-foreground: #ffffff;
  --au-secondary: #f5f5f5;
  --au-muted: #f5f5f5;
  --au-muted-foreground: #737373;
  --au-accent: #f5f5f5;
  --au-destructive: #ef4444;
  --au-border: #e5e5e5;
  --au-radius: 0.5rem;
}
```

---

## 💻 CLI Reference

```bash
alpineui init          # Initialize AlpineUI
alpineui add <comp>    # Add components
alpineui add --all     # Add all components
alpineui list          # List components
alpineui upgrade       # Upgrade components
```

---

## 📖 Documentation

- **Live Demo**: [alpineui.dev](https://alpineui.dev)
- **GitHub**: [github.com/Fernando-Ligabue/alpineui](https://github.com/Fernando-Ligabue/alpineui)
- **Packages**: [github.com/Fernando-Ligabue/alpineui/packages](https://github.com/Fernando-Ligabue/alpineui/packages)

---

## 🤝 Contributing

1. Fork the repository
2. Create your branch: `git checkout -b feature/amazing-component`
3. Commit your changes: `git commit -m 'Add amazing component'`
4. Push to the branch: `git push origin feature/amazing-component`
5. Open a Pull Request

---

## 📄 License

MIT © [AlpineUI Contributors](https://github.com/Fernando-Ligabue/alpineui/graphs/contributors)

---

<p align="center">
  Made with ❤️ for the Alpine.js community
</p>