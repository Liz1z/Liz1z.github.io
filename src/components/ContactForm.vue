<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { siteConfig } from '../config/site'

type Field = 'name' | 'email' | 'message'
const FIELDS: Field[] = ['name', 'email', 'message']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const form = reactive<Record<Field, string>>({ name: '', email: '', message: '' })
const errors = reactive<Partial<Record<Field, string>>>({})
const touched = reactive<Partial<Record<Field, boolean>>>({})
const submitted = ref(false)
const sent = ref(false)

function validateField(field: Field): string | undefined {
  const value = form[field].trim()
  if (field === 'name') {
    if (!value) return '请输入称呼'
    if (value.length < 2 || value.length > 30) return '称呼需为 2–30 个字符'
    return undefined
  }
  if (field === 'email') {
    if (!value) return '请输入邮箱'
    if (!EMAIL_RE.test(value)) return '邮箱格式不正确'
    return undefined
  }
  if (field === 'message') {
    if (!value) return '请输入留言内容'
    if (value.length < 10) return '留言至少 10 个字符'
    if (value.length > 1000) return '留言不能超过 1000 个字符'
    return undefined
  }
  return undefined
}

function onInput(field: Field): void {
  // 已触碰或已提交过的字段实时校验，其余字段等失焦后再提示，避免打扰输入
  if (touched[field] || submitted.value) {
    errors[field] = validateField(field)
  }
}

function onBlur(field: Field): void {
  touched[field] = true
  errors[field] = validateField(field)
}

function handleSubmit(event: Event): void {
  event.preventDefault()
  submitted.value = true
  for (const field of FIELDS) {
    errors[field] = validateField(field)
  }
  const firstInvalid = FIELDS.find((f) => errors[f])
  if (firstInvalid) {
    document.getElementById(`contact-${firstInvalid}`)?.focus()
    return
  }
  try {
    const subject = `[个人主页] 来自 ${form.name.trim()} 的留言`
    const body = `${form.message.trim()}\n\n——\n${form.name.trim()}（${form.email.trim()}）`
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    sent.value = true
    window.setTimeout(() => {
      sent.value = false
    }, 8000)
  } catch {
    errors.message = `无法打开邮件客户端，请直接写信至 ${siteConfig.email}`
  }
}
</script>

<template>
  <form class="form" novalidate @submit="handleSubmit">
    <div class="field">
      <label for="contact-name">称呼</label>
      <input
        id="contact-name"
        v-model="form.name"
        type="text"
        placeholder="怎么称呼你？"
        autocomplete="name"
        :aria-invalid="!!errors.name"
        @input="onInput('name')"
        @blur="onBlur('name')"
      />
      <p v-if="errors.name" class="error" role="alert">{{ errors.name }}</p>
    </div>

    <div class="field">
      <label for="contact-email">邮箱</label>
      <input
        id="contact-email"
        v-model="form.email"
        type="email"
        placeholder="you@example.com"
        autocomplete="email"
        :aria-invalid="!!errors.email"
        @input="onInput('email')"
        @blur="onBlur('email')"
      />
      <p v-if="errors.email" class="error" role="alert">{{ errors.email }}</p>
    </div>

    <div class="field">
      <label for="contact-message">
        留言
        <span class="count">{{ form.message.length }}/1000</span>
      </label>
      <textarea
        id="contact-message"
        v-model="form.message"
        rows="4"
        placeholder="想说的话（至少 10 个字符）"
        :aria-invalid="!!errors.message"
        @input="onInput('message')"
        @blur="onBlur('message')"
      />
      <p v-if="errors.message" class="error" role="alert">{{ errors.message }}</p>
    </div>

    <button type="submit" class="submit" :disabled="sent">
      <AppIcon name="send" :size="15" />
      {{ sent ? '已打开邮件草稿' : '发送留言' }}
    </button>

    <p v-if="sent" class="sent-tip" role="status">
      已在你的邮件客户端中打开草稿。如未自动打开，请直接写信至 {{ siteConfig.email }}。
    </p>
    <p class="privacy">提交仅调用本机邮件客户端（mailto），不会向任何服务器发送数据。</p>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 12.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.count {
  font-size: 11.5px;
  color: var(--muted-2);
  text-transform: none;
  letter-spacing: 0;
}

input,
textarea {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 11px 14px;
  font-size: 14.5px;
  color: var(--text);
  outline: none;
  transition:
    border-color 0.18s,
    box-shadow 0.18s;
}

textarea {
  resize: vertical;
  min-height: 96px;
}

input::placeholder,
textarea::placeholder {
  color: var(--muted-2);
}

input:focus,
textarea:focus {
  border-color: var(--accent-line);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

input[aria-invalid='true'],
textarea[aria-invalid='true'] {
  border-color: var(--danger);
}

.error {
  font-size: 13px;
  color: var(--danger);
}

.submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: flex-start;
  background: var(--accent);
  color: var(--bg);
  font-weight: 600;
  font-size: 14.5px;
  padding: 11px 22px;
  border-radius: var(--radius-sm);
  transition:
    filter 0.18s,
    transform 0.18s,
    opacity 0.18s;
}

.submit:hover:not(:disabled) {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.submit:disabled {
  opacity: 0.7;
  cursor: default;
}

.sent-tip {
  font-size: 13.5px;
  color: var(--accent);
}

.privacy {
  font-size: 12.5px;
  color: var(--muted-2);
}
</style>
