<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Contact logic
const emailAddress = 'sunkeeperstudiolab@gmail.com';
const mailtoLink = `mailto:${emailAddress}`;

const changeLang = (lang) => {
  locale.value = lang;
};
</script>

<template>
  <div class="lang-switcher">
    <button :class="{ active: locale === 'zh-TW' }" @click="changeLang('zh-TW')">繁</button>
    <span class="divider">|</span>
    <button :class="{ active: locale === 'zh-CN' }" @click="changeLang('zh-CN')">简</button>
    <span class="divider">|</span>
    <button :class="{ active: locale === 'en' }" @click="changeLang('en')">EN</button>
  </div>

  <div class="container">
    <div class="card">
      <div class="logo-container">
        <!-- 這裡會讀取 public/sunkeeper_studio_logo.svg 檔案 -->
        <img src="/sunkeeper_studio_logo.svg" alt="Sunkeeper Studio Logo" class="logo-icon" />
      </div>
      
      <p>{{ $t('description') }}</p>
      
      <a :href="mailtoLink" class="contact-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        {{ emailAddress }}
      </a>
      
    </div>
  </div>
</template>
