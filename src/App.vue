<script setup>
import { onBeforeUnmount, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Contact logic
const emailAddress = 'sunkeeperstudiolab@gmail.com';
const mailtoLink = `mailto:${emailAddress}`;
const facebookLink = 'https://www.facebook.com/share/19U4ECRsCo/?mibextid=wwXIfr';
const instagramLink = 'https://www.instagram.com/sunkeeperstudio?stkn=Y2p1ZXBzeWxxMm0w&utm_source=qr';
const discordLink = 'https://discord.gg/qy7Gmp7h3';
const picClipAppStoreLink = 'https://apps.apple.com/app/id6793762269';
const picClipGooglePlayLink = 'https://play.google.com/store/apps/details?id=com.sun.photo_clip';
const picGridsAppStoreLink = 'https://apps.apple.com/app/id6799643223';
const picGridsGooglePlayLink = 'https://play.google.com/store/apps/details?id=com.sun.pic_grid';
const superBanqiAppStoreLink = 'https://apps.apple.com/us/app/%E8%B6%85%E7%B4%9A%E6%9A%97%E6%A3%8B/id6805352882';
const superBanqiGooglePlayLink = 'https://play.google.com/store/apps/details?id=studio.sunkeeper.happydarkchess';
const thunderForceAppStoreLink = 'https://apps.apple.com/us/app/thunderforce/id6802530155';
const thunderForceGooglePlayLink = 'https://play.google.com/store/apps/details?id=studio.sunkeeper.thunderbolt_robot';
const webLayoutMediaQuery = window.matchMedia('(min-width: 600px)');
const forceWebView = new URLSearchParams(window.location.search).get('view') === 'web';
const isWebView = ref(forceWebView || webLayoutMediaQuery.matches);

const updateWebView = (event) => {
  isWebView.value = forceWebView || event.matches;
};

webLayoutMediaQuery.addEventListener('change', updateWebView);
onBeforeUnmount(() => webLayoutMediaQuery.removeEventListener('change', updateWebView));

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

  <div class="container" :class="{ 'web-layout': isWebView }">
    <div class="card">
      <div class="logo-container">
        <!-- 這裡會讀取 public/sunkeeper_studio_logo.svg 檔案 -->
        <img src="/sunkeeper_studio_logo.svg" alt="Sunkeeper Studio Logo" class="logo-icon" />
      </div>

      <p class="brand-tagline">{{ $t('brand_tagline') }}</p>
      <p class="brand-description">{{ $t('description') }}</p>

      <section class="app-download" aria-labelledby="tools-title">
        <h2 id="tools-title" class="section-title">{{ $t('tools_title') }}</h2>
        <article class="app-item">
          <img src="/picclip.png" alt="PicClip App icon" class="app-icon" />
          <div class="app-info">
            <h2>PicClip</h2>
            <span>{{ $t('download_app') }}</span>
          </div>
          <div v-if="isWebView" class="app-description">{{ $t('picclip_description') }}</div>
          <div class="store-links">
            <a :href="picClipAppStoreLink" class="store-btn" target="_blank" rel="noopener noreferrer" aria-label="PicClip on the App Store（在新分頁開啟）">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.32.03-1.75-.79-3.27-.79-1.53 0-2 .77-3.25.82-1.3.05-2.29-1.32-3.13-2.54C4.31 17 3 12.5 4.79 9.39a4.86 4.86 0 0 1 4.14-2.5c1.29-.03 2.51.87 3.27.87.75 0 2.17-1.08 3.66-.92a4.71 4.71 0 0 1 3.7 2.01 4.6 4.6 0 0 0-2.18 3.83 4.48 4.48 0 0 0 2.7 4.1 11.05 11.05 0 0 1-1.37 2.72ZM13.08 3.21A4.4 4.4 0 0 1 15.93 1a4.22 4.22 0 0 1-1 3.09 3.69 3.69 0 0 1-2.92 1.4 4.18 4.18 0 0 1 1.07-2.28Z" /></svg>
              App Store
            </a>
            <a :href="picClipGooglePlayLink" class="store-btn" target="_blank" rel="noopener noreferrer" aria-label="PicClip on Google Play（在新分頁開啟）">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.18 2.14a1.8 1.8 0 0 0-.68 1.42v16.88c0 .56.25 1.06.66 1.39l9.49-9.85-9.47-9.84Zm10.7 8.57 2.42-2.51L5.79 2.35l8.09 8.36Zm3.92-1.67-2.69 2.79 2.71 2.8 3.27-1.82c1.21-.67 1.21-1.77 0-2.45L17.8 9.04ZM5.76 21.67l10.56-5.87-2.44-2.52-8.12 8.39Z" /></svg>
              Google Play
            </a>
          </div>
        </article>

        <article class="app-item">
          <img src="/picgrids.png" alt="PicGrids App icon" class="app-icon" />
          <div class="app-info">
            <h2>PicGrids</h2>
            <span>{{ $t('download_app') }}</span>
          </div>
          <div v-if="isWebView" class="app-description">{{ $t('picgrids_description') }}</div>
          <div class="store-links">
            <a :href="picGridsAppStoreLink" class="store-btn" target="_blank" rel="noopener noreferrer" aria-label="PicGrids on the App Store（在新分頁開啟）">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.32.03-1.75-.79-3.27-.79-1.53 0-2 .77-3.25.82-1.3.05-2.29-1.32-3.13-2.54C4.31 17 3 12.5 4.79 9.39a4.86 4.86 0 0 1 4.14-2.5c1.29-.03 2.51.87 3.27.87.75 0 2.17-1.08 3.66-.92a4.71 4.71 0 0 1 3.7 2.01 4.6 4.6 0 0 0-2.18 3.83 4.48 4.48 0 0 0 2.7 4.1 11.05 11.05 0 0 1-1.37 2.72ZM13.08 3.21A4.4 4.4 0 0 1 15.93 1a4.22 4.22 0 0 1-1 3.09 3.69 3.69 0 0 1-2.92 1.4 4.18 4.18 0 0 1 1.07-2.28Z" /></svg>
              App Store
            </a>
            <a :href="picGridsGooglePlayLink" class="store-btn" target="_blank" rel="noopener noreferrer" aria-label="PicGrids on Google Play（在新分頁開啟）">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.18 2.14a1.8 1.8 0 0 0-.68 1.42v16.88c0 .56.25 1.06.66 1.39l9.49-9.85-9.47-9.84Zm10.7 8.57 2.42-2.51L5.79 2.35l8.09 8.36Zm3.92-1.67-2.69 2.79 2.71 2.8 3.27-1.82c1.21-.67 1.21-1.77 0-2.45L17.8 9.04ZM5.76 21.67l10.56-5.87-2.44-2.52-8.12 8.39Z" /></svg>
              Google Play
            </a>
          </div>
        </article>
      </section>

      <section class="app-download game-download" aria-labelledby="games-title">
        <h2 id="games-title" class="section-title">{{ $t('games_title') }}</h2>
        <article class="app-item">
          <img src="/superbanqi.png" :alt="`${$t('super_banqi_name')} App icon`" class="app-icon" />
          <div class="app-info">
            <h2>{{ $t('super_banqi_name') }}</h2>
            <span>{{ $t('download_game') }}</span>
          </div>
          <div v-if="isWebView" class="app-description">{{ $t('super_banqi_description') }}</div>
          <div class="store-links">
            <a :href="superBanqiAppStoreLink" class="store-btn" target="_blank" rel="noopener noreferrer" aria-label="超級暗棋 on the App Store（在新分頁開啟）">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.32.03-1.75-.79-3.27-.79-1.53 0-2 .77-3.25.82-1.3.05-2.29-1.32-3.13-2.54C4.31 17 3 12.5 4.79 9.39a4.86 4.86 0 0 1 4.14-2.5c1.29-.03 2.51.87 3.27.87.75 0 2.17-1.08 3.66-.92a4.71 4.71 0 0 1 3.7 2.01 4.6 4.6 0 0 0-2.18 3.83 4.48 4.48 0 0 0 2.7 4.1 11.05 11.05 0 0 1-1.37 2.72ZM13.08 3.21A4.4 4.4 0 0 1 15.93 1a4.22 4.22 0 0 1-1 3.09 3.69 3.69 0 0 1-2.92 1.4 4.18 4.18 0 0 1 1.07-2.28Z" /></svg>
              App Store
            </a>
            <a :href="superBanqiGooglePlayLink" class="store-btn" target="_blank" rel="noopener noreferrer" aria-label="超級暗棋 on Google Play（在新分頁開啟）">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.18 2.14a1.8 1.8 0 0 0-.68 1.42v16.88c0 .56.25 1.06.66 1.39l9.49-9.85-9.47-9.84Zm10.7 8.57 2.42-2.51L5.79 2.35l8.09 8.36Zm3.92-1.67-2.69 2.79 2.71 2.8 3.27-1.82c1.21-.67 1.21-1.77 0-2.45L17.8 9.04ZM5.76 21.67l10.56-5.87-2.44-2.52-8.12 8.39Z" /></svg>
              Google Play
            </a>
          </div>
        </article>

        <article class="app-item">
          <img src="/thunderforce.png" alt="ThunderForce App icon" class="app-icon" />
          <div class="app-info">
            <h2>ThunderForce</h2>
            <span>{{ $t('download_game') }}</span>
          </div>
          <div v-if="isWebView" class="app-description">{{ $t('thunderforce_description') }}</div>
          <div class="store-links">
            <a :href="thunderForceAppStoreLink" class="store-btn" target="_blank" rel="noopener noreferrer" aria-label="ThunderForce on the App Store（在新分頁開啟）">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.32.03-1.75-.79-3.27-.79-1.53 0-2 .77-3.25.82-1.3.05-2.29-1.32-3.13-2.54C4.31 17 3 12.5 4.79 9.39a4.86 4.86 0 0 1 4.14-2.5c1.29-.03 2.51.87 3.27.87.75 0 2.17-1.08 3.66-.92a4.71 4.71 0 0 1 3.7 2.01 4.6 4.6 0 0 0-2.18 3.83 4.48 4.48 0 0 0 2.7 4.1 11.05 11.05 0 0 1-1.37 2.72ZM13.08 3.21A4.4 4.4 0 0 1 15.93 1a4.22 4.22 0 0 1-1 3.09 3.69 3.69 0 0 1-2.92 1.4 4.18 4.18 0 0 1 1.07-2.28Z" /></svg>
              App Store
            </a>
            <a :href="thunderForceGooglePlayLink" class="store-btn" target="_blank" rel="noopener noreferrer" aria-label="ThunderForce on Google Play（在新分頁開啟）">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.18 2.14a1.8 1.8 0 0 0-.68 1.42v16.88c0 .56.25 1.06.66 1.39l9.49-9.85-9.47-9.84Zm10.7 8.57 2.42-2.51L5.79 2.35l8.09 8.36Zm3.92-1.67-2.69 2.79 2.71 2.8 3.27-1.82c1.21-.67 1.21-1.77 0-2.45L17.8 9.04ZM5.76 21.67l10.56-5.87-2.44-2.52-8.12 8.39Z" /></svg>
              Google Play
            </a>
          </div>
        </article>
      </section>
      
      <section
        class="contact-section"
        :class="{ 'contact-section-priority': !isWebView }"
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title" class="section-title">{{ $t('contact_title') }}</h2>
        <div class="contact-links">
        <a :href="mailtoLink" class="contact-btn" :aria-label="`Email: ${emailAddress}`">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email
        </a>

        <a
          :href="facebookLink"
          class="contact-btn facebook-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook（在新分頁開啟）"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.698 4.533-4.698 1.312 0 2.686.236 2.686.236v2.974h-1.513c-1.49 0-1.956.932-1.956 1.888v2.26h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
          </svg>
          Facebook
        </a>

        <a
          :href="instagramLink"
          class="contact-btn instagram-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram（在新分頁開啟）"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.162c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848s.013-3.583.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.849-.07ZM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
          </svg>
          Instagram
        </a>

        <a
          :href="discordLink"
          class="contact-btn discord-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord（在新分頁開啟）"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.534 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027 14.2 14.2 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.1.246.198.373.293a.077.077 0 0 1-.007.128 12.299 12.299 0 0 1-1.873.891.077.077 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.418 0 1.334-.946 2.419-2.157 2.419Z" />
          </svg>
          Discord
        </a>
        </div>
      </section>
      
    </div>
  </div>
</template>
