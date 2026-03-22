# Installation

Get started with AlpineUI by setting up Alpine.js and Tailwind CSS in your project.

## Prerequisites

- Node.js 18+ installed
- A code editor (VS Code recommended)
- Basic knowledge of HTML and JavaScript

## Option 1: Quick Start (CDN)

The fastest way to try AlpineUI is using the CDN. Add these scripts to your HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <!-- Your content -->
  
  <!-- Alpine.js -->
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
  
  <!-- AlpineUI Component -->
  <script src="https://unpkg.com/@Fernando-Ligabue/button"></script>
</body>
</html>
```

## Option 2: Install via npm

### Step 1: Install Dependencies

```bash
npm install alpinejs
```

### Step 2: Initialize Alpine.js

```javascript
import Alpine from 'alpinejs'

window.Alpine = Alpine

import '@Fernando-Ligabue/button'

Alpine.start()
```

### Step 3: Add Tailwind CSS

Follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).

## Option 3: Use CLI (Recommended)

The AlpineUI CLI helps you add components to your project with a single command.

### Install CLI

```bash
npm install -g @Fernando-Ligabue/cli
```

### Add Components

```bash
# Add a single component
npx alpineui add button

# Add multiple components
npx alpineui add button input card

# Skip prompts with --yes
npx alpineui add button --yes
```

## Copy & Paste

The simplest approach is to copy the component code directly into your project.

1. Find the component you want in the [Components](/components/) section
2. Click the **Copy** button to copy the code
3. Paste it into your HTML file
4. Add the component's CSS to your stylesheet

## Next Steps

- Learn about [Theming](/getting-started/theming) to customize colors and styles
- Browse available [Components](/components/)
