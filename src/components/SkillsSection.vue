<script setup lang="ts">
import { siteConfig } from '../config/site'
</script>

<template>
  <section id="skills">
    <div class="section-head">
      <p class="section-eyebrow">Skills</p>
      <h2 class="section-title">技能栈</h2>
    </div>
    <div class="grid">
      <div v-for="c in siteConfig.skills" :key="c.label" class="skill-card">
        <p class="label">{{ c.label }}</p>
        <ul class="chips">
          <li v-for="s in c.skills" :key="s">{{ s }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.skill-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px 24px;
  transition: border-color 0.2s;
}

.skill-card:hover {
  border-color: var(--accent-line);
}

.label {
  font-family: var(--font-mono);
  font-size: 12.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chips li {
  font-size: 13.5px;
  color: var(--body);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 4px 12px;
  transition:
    color 0.18s,
    border-color 0.18s;
}

.chips li:hover {
  color: var(--text);
  border-color: var(--accent-line);
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
