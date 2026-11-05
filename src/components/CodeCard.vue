<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  fileName: string
  lines: string[]
}>()

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * 极简语法高亮：
 * - 关键字（const/let 等）→ 弱化灰
 * - 行首属性名（name:）→ 亮白
 * - 字符串值 → 强调色 teal
 * 配色克制，贴合全稿单强调色规范
 */
const highlighted = computed(() =>
  props.lines
    .map((line) =>
      escapeHtml(line)
        .replace(/"([^"]*)"/g, '<span class="tok-str">"$1"</span>')
        .replace(/\b(const|let|var|function|return|new)\b/g, '<span class="tok-kw">$1</span>')
        .replace(/^(\s*)([A-Za-z_$][\w$]*)(\s*:)/, '$1<span class="tok-key">$2</span>$3'),
    )
    .join('\n'),
)
</script>

<template>
  <figure class="code-card" aria-label="代码示例">
    <div class="code-head">
      <span class="dots" aria-hidden="true"><i /><i /><i /></span>
      <span class="file">{{ fileName }}</span>
    </div>
    <pre><code v-html="highlighted" /></pre>
  </figure>
</template>

<style scoped>
.code-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 24px 48px -24px rgba(0, 0, 0, 0.6);
}

.code-head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
}

.dots {
  display: flex;
  gap: 6px;
}

.dots i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--border);
}

.file {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--muted-2);
}

pre {
  padding: 20px 22px;
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: 13.5px;
  line-height: 1.75;
  color: var(--body);
}

:deep(.tok-kw) {
  color: var(--muted);
}

:deep(.tok-key) {
  color: var(--text);
}

:deep(.tok-str) {
  color: var(--accent);
}
</style>
