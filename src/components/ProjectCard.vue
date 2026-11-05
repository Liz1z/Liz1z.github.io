<script setup lang="ts">
import type { Project } from '../config/site'
import AppIcon from './AppIcon.vue'

defineProps<{ project: Project }>()
</script>

<template>
  <a :href="project.link" target="_blank" rel="noopener noreferrer" class="card">
    <div class="card-top">
      <h3 class="title">{{ project.name }}</h3>
      <span class="arrow" aria-hidden="true"><AppIcon name="arrow" :size="16" /></span>
    </div>
    <p class="desc">{{ project.description }}</p>
    <ul class="tags">
      <li v-for="t in project.tags" :key="t">{{ t }}</li>
    </ul>
  </a>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px 24px;
  transition:
    border-color 0.2s,
    transform 0.2s,
    box-shadow 0.2s;
}

.card:hover {
  border-color: var(--accent-line);
  transform: translateY(-3px);
  box-shadow: 0 16px 32px -20px rgba(0, 0, 0, 0.7);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.01em;
}

.arrow {
  color: var(--muted-2);
  transition:
    color 0.2s,
    transform 0.2s;
}

.card:hover .arrow {
  color: var(--accent);
  transform: translate(2px, -2px);
}

.desc {
  font-size: 14.5px;
  color: var(--muted);
  flex: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tags li {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 3px 10px;
}
</style>
