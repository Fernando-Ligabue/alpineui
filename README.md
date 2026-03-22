# AlpineUI

> A collection of re-usable components built with Alpine.js and Tailwind CSS.

[![npm version](https://img.shields.io/npm/v/alpineui)](https://www.npmjs.com/package/alpineui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Why AlpineUI?

AlpineUI is inspired by [shadcn/ui](https://ui.shadcn.com) and brings the same copy-paste component philosophy to Alpine.js. Instead of installing dependencies, you pick and copy components directly into your project.

### Key Features

- **Copy-Paste First** - No black box components. You own the code.
- **Lightweight** - Only import what you use.
- **TypeScript Ready** - CLI with full TypeScript support.
- **Tailwind CSS** - Utility-first styling, easy to customize.
- **Accessible** - WAI-ARIA compliant out of the box.

## Quick Start

### 1. Initialize your project

```bash
npx @alpineui/cli init
```

### 2. Add components

```bash
npx @alpineui/cli add button
npx @alpineui/cli add dialog tabs
```

### 3. Use in your HTML

```html
<div x-data="button">
  <button class="au-button au-button-primary">
    Click me
  </button>
</div>
```

## Available Components

| Component | Status |
|-----------|--------|
| Button | ✅ Available |
| Input | 🔜 Coming soon |
| Card | 🔜 Coming soon |
| Badge | 🔜 Coming soon |
| Dialog | 🔜 Coming soon |
| Dropdown | 🔜 Coming soon |
| Tabs | 🔜 Coming soon |
| Accordion | 🔜 Coming soon |
| Toast | 🔜 Coming soon |

## Installation Options

### CLI (Recommended)

```bash
npx @alpineui/cli init
npx @alpineui/cli add button
```

### NPM

```bash
npm install @alpineui/button
```

### CDN

```html
<script defer src="https://cdn.alpineui.dev/all.js"></script>
```

## Documentation

Full documentation available at [alpineui.dev](https://alpineui.dev) (coming soon).

## Contributing

Contributions are welcome! Please read our [contributing guide](CONTRIBUTING.md) first.

## License

MIT © AlpineUI Contributors
