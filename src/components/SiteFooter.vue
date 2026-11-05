<script setup lang="ts">
import { siteConfig } from '../config/site'
</script>

<template>
  <footer class="footer">
    <div class="container inner">
      <p>© {{ siteConfig.footer.year }} {{ siteConfig.name }} · 用 {{ siteConfig.footer.builtWith }} 构建</p>
      <p class="mono">Designed in {{ siteConfig.footer.designedIn }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 13px;
  color: var(--muted-2);
}

.mono {
  font-family: var(--font-mono);
}

@media (max-width: 640px) {
  .inner {
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }
}
</style>
