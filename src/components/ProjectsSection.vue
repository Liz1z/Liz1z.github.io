<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import { siteConfig } from '../config/site'
</script>

<template>
  <section id="projects">
    <div class="section-head">
      <p class="section-eyebrow">Projects</p>
      <h2 class="section-title">项目展示</h2>
    </div>
    <div class="grid">
      <ProjectCard v-for="p in siteConfig.projects" :key="p.name" :project="p" />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (max-width: 800px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
