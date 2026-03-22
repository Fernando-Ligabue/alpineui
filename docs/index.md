---
layout: home

hero:
  name: "AlpineUI"
  text: "Beautiful components for Alpine.js"
  tagline: "Copy and paste beautifully designed components into your projects. Built with Alpine.js and Tailwind CSS."
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/
    - theme: alt
      text: View Components
      link: /components/

features:
  - icon: 🎨
    title: Copy & Paste
    details: Just copy the component code and paste it into your project. Full control, no dependencies.
  - icon: ⚡
    title: Lightweight
    details: Built on Alpine.js, the JavaScript framework that prioritizes size and performance.
  - icon: 🎯
    title: Customizable
    details: Each component is styled with Tailwind CSS. Modify styles directly to match your design.
  - icon: 🔧
    title: TypeScript Ready
    details: Full TypeScript support with type definitions for all components.
  - icon: 🌙
    title: Dark Mode
    details: All components support dark mode out of the box.
  - icon: 📦
    title: Package Manager
    details: Install individual components via npm or use our CLI tool.
---

<script setup>
import { ref, onMounted } from 'vue'

const components = [
  {
    name: 'Button',
    description: 'A clickable button component with multiple variants and sizes.',
    status: 'complete',
    preview: 'Button',
    link: '/components/button'
  },
  {
    name: 'Input',
    description: 'Form input component with validation, icons, and various states.',
    status: 'complete',
    preview: 'Input',
    link: '/components/input'
  },
  {
    name: 'Card',
    description: 'A flexible card container for grouping content.',
    status: 'development',
    preview: 'Card',
    link: '/components#card'
  },
  {
    name: 'Badge',
    description: 'Small status indicators and labels.',
    status: 'development',
    preview: 'Badge',
    link: '/components#badge'
  },
  {
    name: 'Dialog',
    description: 'Modal dialog component for focused interactions.',
    status: 'development',
    preview: 'Dialog',
    link: '/components#dialog'
  },
  {
    name: 'Dropdown',
    description: 'Collapsible menu for navigation and actions.',
    status: 'development',
    preview: 'Dropdown',
    link: '/components#dropdown'
  },
  {
    name: 'Tabs',
    description: 'Tabbed interface for organizing content.',
    status: 'development',
    preview: 'Tabs',
    link: '/components#tabs'
  },
  {
    name: 'Accordion',
    description: 'Expandable content sections.',
    status: 'development',
    preview: 'Accordion',
    link: '/components#accordion'
  }
]
</script>

<div class="home">
  <section class="components-section">
    <h2 class="section-title">Components</h2>
    <p class="section-description">Beautiful, accessible components ready to use in your projects.</p>
    
    <div class="component-grid">
      <a 
        v-for="component in components" 
        :key="component.name"
        :href="component.link"
        class="component-card"
        :class="{ 'disabled': component.status === 'development' }"
      >
        <div class="component-card-header">
          <span class="component-card-title">{{ component.name }}</span>
          <span 
            class="component-card-badge"
            :class="component.status === 'complete' ? 'complete' : 'development'"
          >
            {{ component.status === 'complete' ? '✓ Complete' : 'Coming Soon' }}
          </span>
        </div>
        <p class="component-card-description">{{ component.description }}</p>
        <div class="component-card-preview">
          <span v-if="component.status === 'complete'" class="preview-placeholder">{{ component.preview }}</span>
          <span v-else class="preview-soon">🔜</span>
        </div>
      </a>
    </div>
  </section>
</div>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.components-section {
  margin-top: 4rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.section-description {
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.component-card {
  display: block;
  border: 1px solid var(--au-border);
  border-radius: var(--au-radius);
  padding: 1.25rem;
  background-color: var(--au-background);
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;
}

.component-card:hover {
  border-color: var(--au-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.component-card.disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.component-card.disabled:hover {
  transform: none;
  box-shadow: none;
  border-color: var(--au-border);
}

.component-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.component-card-title {
  font-size: 1rem;
  font-weight: 600;
}

.component-card-badge {
  font-size: 0.625rem;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-weight: 600;
  text-transform: uppercase;
}

.component-card-badge.complete {
  background-color: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

.component-card-badge.development {
  background-color: rgba(234, 179, 8, 0.1);
  color: #eab308;
}

.component-card-description {
  font-size: 0.875rem;
  color: var(--au-muted-foreground);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.component-card-preview {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--au-background-secondary);
  border-radius: calc(var(--au-radius) - 2px);
}

.preview-placeholder {
  font-size: 0.75rem;
  color: var(--au-muted-foreground);
  font-weight: 500;
}

.preview-soon {
  font-size: 1.5rem;
}

@media (max-width: 640px) {
  .component-grid {
    grid-template-columns: 1fr;
  }
}
</style>
