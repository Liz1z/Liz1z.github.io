<script setup lang="ts">
/**
 * 统一的 SVG 图标组件（stroke 风格，颜色继承 currentColor，
 * 由父元素 CSS color 控制，天然适配深色主题）
 */
withDefaults(
  defineProps<{
    name: 'github' | 'mail' | 'x' | 'arrow' | 'send'
    size?: number
  }>(),
  { size: 18 },
)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <g v-if="name === 'github'">
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </g>
    <g v-else-if="name === 'mail'">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </g>
    <g v-else-if="name === 'x'">
      <path
        d="M22 4s-.7 7.5-3 10c-2.6 2.9-6.7 3-9.9 2.4L3 21c.9-4.5.3-8-2-11 3.4.5 5.8.3 7.4-1.2C10.9 4.6 11 2 11 2c1.2 3.2 3.4 4.4 6.5 4.7L22 4z"
      />
    </g>
    <g v-else-if="name === 'arrow'">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </g>
    <g v-else-if="name === 'send'">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </g>
  </svg>
</template>
