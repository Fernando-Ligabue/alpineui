import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'
import ComponentPreview from './components/ComponentPreview.vue'
import ComponentTabs from './components/ComponentTabs.vue'
import CopyButton from './components/CopyButton.vue'

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Slot para enhance o layout se necessário
    })
  },

  enhanceApp({ app, router, siteData }) {
    // Registar componentes globais
    app.component('ComponentPreview', ComponentPreview)
    app.component('ComponentTabs', ComponentTabs)
    app.component('CopyButton', CopyButton)
  }
}
