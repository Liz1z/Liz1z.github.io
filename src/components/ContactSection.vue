<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import ContactForm from './ContactForm.vue'
import SocialButton from './SocialButton.vue'
import { siteConfig } from '../config/site'
</script>

<template>
  <section id="contact">
    <div class="section-head">
      <p class="section-eyebrow">Contact</p>
      <h2 class="section-title">联系方式</h2>
    </div>
    <div class="contact-card">
      <div class="contact-info">
        <p class="lead">有项目想法、实习机会，或只是想聊聊技术？欢迎随时联系。</p>
        <a class="mail-btn" :href="'mailto:' + siteConfig.email">
          <AppIcon name="send" :size="16" />
          发邮件给我
        </a>
        <div class="socials">
          <SocialButton v-for="s in siteConfig.socials" :key="s.label" :link="s" />
        </div>
      </div>
      <ContactForm class="contact-form" />
    </div>
  </section>
</template>

<style scoped>
.contact-card {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 36px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.lead {
  font-size: 17px;
  color: var(--text);
  line-height: 1.6;
}

.mail-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  background: var(--accent);
  color: var(--bg);
  font-weight: 600;
  font-size: 14.5px;
  padding: 12px 22px;
  border-radius: var(--radius-sm);
  transition:
    filter 0.18s,
    transform 0.18s;
}

.mail-btn:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.socials {
  display: flex;
  gap: 12px;
}

@media (max-width: 860px) {
  .contact-card {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 28px 22px;
  }
}
</style>
