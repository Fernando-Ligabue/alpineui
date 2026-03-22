# Theming

Customize AlpineUI components to match your design system.

## CSS Variables

AlpineUI uses CSS variables for theming. Define these variables in your CSS to customize the appearance.

```css
:root {
  /* Colors */
  --au-background: #ffffff;
  --au-foreground: #0a0a0a;
  --au-primary: #0a0a0a;
  --au-primary-foreground: #ffffff;
  --au-secondary: #f5f5f5;
  --au-secondary-foreground: #0a0a0a;
  --au-muted: #f5f5f5;
  --au-muted-foreground: #737373;
  --au-accent: #f5f5f5;
  --au-accent-foreground: #0a0a0a;
  --au-destructive: #ef4444;
  --au-destructive-foreground: #ffffff;
  --au-border: #e5e5e5;
  --au-ring: #0a0a0a;
  
  /* Border Radius */
  --au-radius: 0.5rem;
}
```

## Dark Mode

To enable dark mode, override the variables under the `.dark` class or `media (prefers-color-scheme: dark)`:

```css
.dark {
  --au-background: #0a0a0a;
  --au-foreground: #fafafa;
  --au-primary: #fafafa;
  --au-primary-foreground: #0a0a0a;
  --au-secondary: #262626;
  --au-secondary-foreground: #fafafa;
  --au-muted: #404040;
  --au-muted-foreground: #a3a3a3;
  --au-accent: #262626;
  --au-accent-foreground: #fafafa;
  --au-destructive: #ef4444;
  --au-destructive-foreground: #ffffff;
  --au-border: #2e2e2e;
  --au-ring: #fafafa;
}
```

## Custom Colors

### Primary Color

```css
:root {
  --au-primary: #6366f1; /* Indigo */
  --au-primary-foreground: #ffffff;
}
```

### Destructive Color

```css
:root {
  --au-destructive: #dc2626; /* Red 600 */
  --au-destructive-foreground: #ffffff;
}
```

## Border Radius

Adjust the border radius for all components:

```css
:root {
  /* Rounded corners */
  --au-radius: 0.5rem;
  
  /* Pill buttons */
  --au-radius: 9999px;
  
  /* Sharp corners */
  --au-radius: 0;
}
```

## Example: Custom Theme

Here's a complete example of a custom purple theme:

```css
:root {
  --au-background: #ffffff;
  --au-foreground: #1f2937;
  --au-primary: #7c3aed;
  --au-primary-foreground: #ffffff;
  --au-secondary: #f3e8ff;
  --au-secondary-foreground: #7c3aed;
  --au-muted: #f3e8ff;
  --au-muted-foreground: #6b7280;
  --au-accent: #f3e8ff;
  --au-accent-foreground: #7c3aed;
  --au-destructive: #ef4444;
  --au-destructive-foreground: #ffffff;
  --au-border: #e5e7eb;
  --au-ring: #7c3aed;
  --au-radius: 0.5rem;
}

.dark {
  --au-background: #0f172a;
  --au-foreground: #f1f5f9;
  --au-primary: #a78bfa;
  --au-primary-foreground: #1f2937;
  --au-secondary: #4c1d95;
  --au-secondary-foreground: #f1f5f9;
  --au-muted: #1e293b;
  --au-muted-foreground: #94a3b8;
  --au-accent: #4c1d95;
  --au-accent-foreground: #f1f5f9;
  --au-destructive: #f87171;
  --au-destructive-foreground: #1f2937;
  --au-border: #334155;
  --au-ring: #a78bfa;
}
```

## Tailwind Configuration

To use CSS variables with Tailwind, add them to your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'var(--au-background)',
        foreground: 'var(--au-foreground)',
        primary: {
          DEFAULT: 'var(--au-primary)',
          foreground: 'var(--au-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--au-secondary)',
          foreground: 'var(--au-secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--au-destructive)',
          foreground: 'var(--au-destructive-foreground)',
        },
        border: 'var(--au-border)',
        ring: 'var(--au-ring)',
      },
      borderRadius: {
        DEFAULT: 'var(--au-radius)',
      },
    },
  },
}
```
