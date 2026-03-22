<template>
  <div class="component-preview">
    <div class="component-preview-header" v-if="title">
      <span class="component-preview-title">{{ title }}</span>
    </div>
    <div class="component-preview-content" ref="previewContainer">
      <!-- Alpine.js components will be rendered here -->
      <div x-data="previewComponent" v-html="renderedContent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = defineProps<{
  title?: string
  code?: string
}>()

const previewContainer = ref<HTMLElement | null>(null)
const renderedContent = computed(() => props.code || '')

onMounted(async () => {
  // Alpine.js will be loaded and initialized by the theme
  // Components are registered via alpine:init in the component code
})
</script>

<style scoped>
.component-preview {
  border: 1px solid var(--au-border);
  border-radius: var(--au-radius);
  overflow: hidden;
  margin: 1.5rem 0;
}

.component-preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: var(--au-background-secondary);
  border-bottom: 1px solid var(--au-border);
}

.component-preview-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--au-muted-foreground);
}

.component-preview-content {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  min-height: 120px;
  background-color: var(--au-background);
}
</style>
