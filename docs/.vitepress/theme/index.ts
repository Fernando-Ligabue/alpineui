import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'
import ComponentPreview from './components/ComponentPreview.vue'
import ComponentTabs from './components/ComponentTabs.vue'
import CopyButton from './components/CopyButton.vue'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('ComponentPreview', ComponentPreview)
    app.component('ComponentTabs', ComponentTabs)
    app.component('CopyButton', CopyButton)
  }
}
