<script setup lang="ts">
import type { SocialLink } from '../config/site'
import AppIcon from './AppIcon.vue'

defineProps<{ link: SocialLink }>()
</script>

<template>
  <a
    :href="link.href"
    class="social-btn"
    :aria-label="link.label"
    :target="link.icon === 'mail' ? undefined : '_blank'"
    :rel="link.icon === 'mail' ? undefined : 'noopener noreferrer'"
  >
    <AppIcon :name="link.icon" :size="17" />
  </a>
</template>

<style scoped>
.social-btn {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--muted);
  transition:
    color 0.18s,
    border-color 0.18s,
    background-color 0.18s,
    transform 0.18s;
}

.social-btn:hover {
  color: var(--accent);
  border-color: var(--accent-line);
  background: var(--accent-dim);
  transform: translateY(-2px);
}
</style>
