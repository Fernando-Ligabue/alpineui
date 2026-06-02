# AlpineUI

> **Beautiful, copy-paste components for Alpine.js**

AlpineUI is a collection of beautifully designed, copy-paste UI components built for [Alpine.js](https://alpinejs.dev/) and [Tailwind CSS](https://tailwindcss.com/). Inspired by [shadcn/ui](https://ui.shadcn.com).

## Features

| Feature | Description |
|---------|-------------|
| 🎯 **Copy-Paste First** | No black box components. You own the code. |
| ⚡ **Lightweight** | Only import what you use. Zero bloat. |
| 🎨 **Tailwind CSS** | Utility-first styling with full customization. |
| ♿ **Accessible** | WAI-ARIA compliant components. |
| 🔌 **Zero Dependencies** | Just HTML, Tailwind, and Alpine.js. |

## Quick Start

1. Go to any [component page](https://alpineui.dev/components)
2. Click the "Code" tab
3. Copy the HTML
4. Paste it into your project

That's it. No CLI, no npm install, no CSS files.

## Example

```html
<div x-data="{ count: 0 }" class="text-center">
  <p class="text-lg mb-4">Count: <span x-text="count">0</span></p>
  <button @click="count++"
    class="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:opacity-90">
    Increment
  </button>
</div>
```

## 27 Components Available

**Forms:** Button, Input, Textarea, Checkbox, Switch, Radio Group, Select, Slider, Date Picker
**Layout:** Card, Accordion, Tabs, Table
**Navigation:** Breadcrumb, Pagination, Dropdown, Context Menu, Navigation Menu, Sidebar
**Overlay:** Dialog, Toast, Tooltip, Popover, Alert Dialog, Drawer
**Data Display:** Badge, Avatar, Progress

## Tech Stack

- **Alpine.js** — Interactivity
- **Tailwind CSS** — Styling
- **Heroicons** — Icons
