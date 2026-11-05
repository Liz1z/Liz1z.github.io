<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import { siteConfig } from '../config/site'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const github = siteConfig.socials.find((s) => s.icon === 'github')
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a href="#top" class="brand" aria-label="回到顶部">
        <span class="brand-mark">S</span>
        <span class="brand-name">{{ siteConfig.name }}</span>
      </a>
      <nav class="nav-links" aria-label="主导航">
        <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
      </nav>
      <a
        v-if="github"
        :href="github.href"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-github"
        :aria-label="github.label"
      >
        <AppIcon name="github" :size="18" />
      </a>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(10, 10, 11, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-mark {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 14px;
  color: var(--accent);
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--card);
  transition: border-color 0.18s;
}

.brand:hover .brand-mark {
  border-color: var(--accent-line);
}

.brand-name {
  color: var(--text);
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.01em;
}

.nav-links {
  display: flex;
  gap: 4px;
}

.nav-links a {
  font-family: var(--font-mono);
  color: var(--muted);
  font-size: 13.5px;
  padding: 6px 12px;
  border-radius: 8px;
  transition:
    color 0.18s,
    background-color 0.18s;
}

.nav-links a:hover {
  color: var(--text);
  background: var(--accent-dim);
}

.nav-github {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--muted);
  transition:
    color 0.18s,
    border-color 0.18s;
}

.nav-github:hover {
  color: var(--text);
  border-color: var(--accent-line);
}

@media (max-width: 640px) {
  .nav-links {
    display: none;
  }
}
</style>
