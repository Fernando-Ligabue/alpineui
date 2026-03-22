<template>
  <div class="component-tabs">
    <div class="component-tabs-header">
      <button 
        v-for="tab in tabs" 
        :key="tab"
        :class="{ active: activeTab === tab }"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="component-tabs-content">
      <div v-show="activeTab === 'Preview'">
        <slot name="preview"></slot>
      </div>
      <div v-show="activeTab === 'Code'" ref="codeContainer">
        <slot name="code"></slot>
      </div>
      <div v-show="activeTab === 'CLI'">
        <slot name="cli"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  tabs?: string[]
}>()

const tabs = props.tabs || ['Preview', 'Code', 'CLI']
const activeTab = ref('Preview')
const codeContainer = ref<HTMLElement | null>(null)
</script>

<style scoped>
.component-tabs {
  border: 1px solid var(--au-border);
  border-radius: var(--au-radius);
  overflow: hidden;
  margin: 1.5rem 0;
}

.component-tabs-header {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--au-border);
  background-color: var(--au-background-secondary);
}

.component-tabs-header button {
  padding: 0.75rem 1.25rem;
  border: none;
  background: transparent;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--au-muted-foreground);
  cursor: pointer;
  transition: all 0.15s ease;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}

.component-tabs-header button:hover {
  color: var(--au-foreground);
  background-color: var(--au-accent);
}

.component-tabs-header button.active {
  color: var(--au-primary);
  border-bottom-color: var(--au-primary);
}

.component-tabs-content {
  padding: 0;
}

.component-tabs-content > div {
  padding: 1rem;
}
</style>
