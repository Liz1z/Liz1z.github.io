<script setup lang="ts">
import CodeCard from './CodeCard.vue'
import SocialButton from './SocialButton.vue'
import { siteConfig } from '../config/site'
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">{{ siteConfig.role }}</p>
        <h1 class="name">{{ siteConfig.name }}</h1>
        <p class="tagline">{{ siteConfig.tagline }}</p>
        <p class="bio">{{ siteConfig.bio }}</p>
        <p class="status"><span class="dot" aria-hidden="true" />{{ siteConfig.status }}</p>
        <div class="socials">
          <SocialButton v-for="s in siteConfig.socials" :key="s.label" :link="s" />
        </div>
      </div>
      <CodeCard :file-name="siteConfig.codeCard.fileName" :lines="siteConfig.codeCard.lines" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  border-top: none;
  padding-block: 88px 64px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
}

.hero-copy {
  min-width: 0;
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

.name {
  font-size: clamp(38px, 6vw, 54px);
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin-bottom: 12px;
}

.tagline {
  font-size: 20px;
  color: var(--body);
  margin-bottom: 16px;
}

.bio {
  font-size: 15.5px;
  color: var(--muted);
  max-width: 48ch;
  margin-bottom: 20px;
}

.status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--muted-2);
  margin-bottom: 28px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2.2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(79, 209, 197, 0.4);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(79, 209, 197, 0);
  }
}

.socials {
  display: flex;
  gap: 12px;
}

@media (max-width: 860px) {
  .hero {
    padding-block: 56px 48px;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>
