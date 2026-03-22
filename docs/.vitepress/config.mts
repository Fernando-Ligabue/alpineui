import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AlpineUI',
  description: 'Beautiful and copy-paste components for Alpine.js',
  
  lang: 'en-US',
  
  appearance: 'dark',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Docs', link: '/getting-started/' },
      { text: 'Components', link: '/components/' },
      { 
        text: 'GitHub',
        link: 'https://github.com/Fernando-Ligabue/alpineui'
      }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Theming', link: '/getting-started/theming' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' }
        ]
      },
      {
        text: 'Coming Soon',
        items: [
          { text: 'Card', link: '/components#card' },
          { text: 'Badge', link: '/components#badge' },
          { text: 'Dialog', link: '/components#dialog' },
          { text: 'Dropdown', link: '/components#dropdown' },
          { text: 'Tabs', link: '/components#tabs' },
          { text: 'Accordion', link: '/components#accordion' },
          { text: 'Toast', link: '/components#toast' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Fernando-Ligabue/alpineui' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present AlpineUI Contributors'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  vite: {
    ssr: {
      noExternal: ['alpinejs']
    }
  }
})
