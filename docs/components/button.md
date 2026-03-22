# Button

A clickable button component with multiple variants and sizes.

## Installation

```bash
npx alpineui add button
```

Or copy and paste the code from below.

## Basic Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
<script defer src="https://unpkg.com/@Fernando-Ligabue/button"></script>
<link rel="stylesheet" href="https://unpkg.com/@Fernando-Ligabue/button/styles.css">
```

## Variants

Buttons come in different variants to convey meaning:

```html
<!-- Default -->
<button x-data="button" class="au-button au-button-md au-button-default">
  Default
</button>

<!-- Destructive -->
<button x-data="button" class="au-button au-button-md au-button-destructive">
  Destructive
</button>

<!-- Outline -->
<button x-data="button" class="au-button au-button-md au-button-outline">
  Outline
</button>

<!-- Secondary -->
<button x-data="button" class="au-button au-button-md au-button-secondary">
  Secondary
</button>

<!-- Ghost -->
<button x-data="button" class="au-button au-button-md au-button-ghost">
  Ghost
</button>

<!-- Link -->
<button x-data="button" class="au-button au-button-md au-button-link">
  Link
</button>
```

## Sizes

Three sizes are available: small, medium (default), and large:

```html
<!-- Small -->
<button x-data="button" class="au-button au-button-sm au-button-default">
  Small
</button>

<!-- Medium (default) -->
<button x-data="button" class="au-button au-button-md au-button-default">
  Medium
</button>

<!-- Large -->
<button x-data="button" class="au-button au-button-lg au-button-default">
  Large
</button>

<!-- Icon (square) -->
<button x-data="button" class="au-button au-button-md au-button-icon au-button-default">
  Icon
</button>
```

## States

### Disabled

```html
<button x-data="button" class="au-button au-button-md au-button-default" disabled>
  Disabled
</button>
```

### Loading

The button supports a loading state through the Alpine.js component:

```html
<div x-data="{ loading: false }">
  <button 
    x-data="button" 
    class="au-button au-button-md au-button-default"
    :class="{ 'au-button-loading': loading }"
    @click="loading = true; setTimeout(() => loading = false, 2000)"
  >
    Click to Load
  </button>
</div>
```

## With Click Handler

```html
<div x-data="{ count: 0 }">
  <button 
    x-data="button" 
    class="au-button au-button-md au-button-default"
    @click="count++"
  >
    Count: <span x-text="count"></span>
  </button>
</div>
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `.au-button` | Base button class |
| `.au-button-sm` | Small size (height: 2rem) |
| `.au-button-md` | Medium size (default, height: 2.5rem) |
| `.au-button-lg` | Large size (height: 3rem) |
| `.au-button-icon` | Icon size (square) |
| `.au-button-default` | Default variant (black bg) |
| `.au-button-destructive` | Destructive variant (red bg) |
| `.au-button-outline` | Outline variant (transparent bg, border) |
| `.au-button-secondary` | Secondary variant (gray bg) |
| `.au-button-ghost` | Ghost variant (transparent bg) |
| `.au-button-link` | Link variant (no border, underline on hover) |

## CSS Variables

Customize the button appearance with CSS variables:

```css
:root {
  --au-primary: #0a0a0a;
  --au-primary-foreground: #ffffff;
  --au-destructive: #ef4444;
  --au-destructive-foreground: #ffffff;
  --au-secondary: #f5f5f5;
  --au-secondary-foreground: #0a0a0a;
  --au-radius: 0.5rem;
}
```
