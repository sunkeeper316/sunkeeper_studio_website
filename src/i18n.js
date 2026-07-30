import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    description: 'Here are some friendly tools, hope you like them. Get in touch with us for any project inquiries or technical support.',
    more_coming: 'More links coming soon...'
  },
  'zh-TW': {
    description: '這是一些友善小工具，希望你會喜歡。如有任何專案需求或技術支援，歡迎與我們聯繫。',
    more_coming: '更多連結即將推出...'
  },
  'zh-CN': {
    description: '这是一些友善小工具，希望你会喜欢。如有任何项目需求或技术支持，欢迎与我们联系。',
    more_coming: '更多链接即将推出...'
  }
};

const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage;
  if (!lang) return 'zh-TW';
  
  const lowerLang = lang.toLowerCase();
  if (lowerLang.includes('zh-cn') || lowerLang.includes('zh-hans')) {
    return 'zh-CN';
  }
  if (lowerLang.includes('zh')) {
    return 'zh-TW';
  }
  return 'en';
};

const i18n = createI18n({
  legacy: false, // use Composition API
  locale: getBrowserLanguage(), // auto detect locale
  fallbackLocale: 'en',
  messages
});

export default i18n;
