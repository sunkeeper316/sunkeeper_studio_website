import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    brand_tagline: 'Independent app studio creating simple, useful, and creative mobile apps.',
    description: 'Here are some friendly tools and little games. We hope you enjoy them. Get in touch with us for any project inquiries or technical support.',
    tools_title: 'Tools',
    download_app: 'Download the app',
    picclip_description: 'Crop and export photos quickly with a clean, intuitive workflow. Your photos are processed locally on your device and never uploaded to the cloud.',
    picgrids_description: 'Combine 2–12 photos in flexible grid layouts, then drag dividers to fine-tune every frame. Works offline and processes photos entirely on your device.',
    games_title: 'Games',
    contact_title: 'Contact & Support',
    super_banqi_name: 'SuperBanqi',
    super_banqi_description: 'Classic Taiwanese dark chess with a Super Piece mode that gives each piece unique abilities. Challenge the AI, play together on one device, or connect over the same Wi-Fi.',
    thunderforce_description: 'A fast-paced robot action shooter featuring multiple robots, primary and special weapons, lightning skills, upgrades, varied stages, and powerful boss battles.',
    download_game: 'Download the game',
    more_coming: 'More links coming soon...'
  },
  'zh-TW': {
    brand_tagline: '獨立應用程式工作室，打造簡單、實用且富有創意的行動 App。',
    description: '這裡有一些友善的小工具和小遊戲，希望你會喜歡。如有任何專案需求或技術支援，歡迎與我們聯繫。',
    tools_title: '小工具',
    download_app: '立即下載',
    picclip_description: '用乾淨直覺的操作快速裁切與匯出照片。所有相片都只在裝置本機處理，不會上傳到雲端。',
    picgrids_description: '支援 2～12 張照片快速拼貼，拖曳分隔線即可自由調整每個區塊；全程離線運作，照片只在裝置本機處理。',
    games_title: '小遊戲',
    contact_title: '聯絡與支援',
    super_banqi_name: '超級暗棋',
    super_banqi_description: '保留台灣經典暗棋玩法，並加入棋種特殊能力的超級兵模式。支援電腦 AI、同機雙人與相同 Wi-Fi 連線對戰。',
    thunderforce_description: '節奏明快的機器人動作射擊遊戲。搭配主武器、特殊武器與雷電技能，收集裝備、強化能力並挑戰多元關卡與強大頭目。',
    download_game: '立即下載',
    more_coming: '更多連結即將推出...'
  },
  'zh-CN': {
    brand_tagline: '独立应用程序工作室，打造简单、实用且富有创意的移动 App。',
    description: '这里有一些友善的小工具和小游戏，希望你会喜欢。如有任何项目需求或技术支持，欢迎与我们联系。',
    tools_title: '小工具',
    download_app: '立即下载',
    picclip_description: '通过干净直观的操作快速裁剪与导出照片。所有照片仅在设备本地处理，不会上传到云端。',
    picgrids_description: '支持 2～12 张照片快速拼贴，拖动分隔线即可自由调整每个区域；全程离线运行，照片仅在设备本地处理。',
    games_title: '小游戏',
    contact_title: '联系与支持',
    super_banqi_name: '超级暗棋',
    super_banqi_description: '保留台湾经典暗棋玩法，并加入棋种特殊能力的超级兵模式。支持电脑 AI、同机双人与相同 Wi-Fi 联机对战。',
    thunderforce_description: '节奏明快的机器人动作射击游戏。搭配主武器、特殊武器与雷电技能，收集装备、强化能力并挑战多样关卡与强大首领。',
    download_game: '立即下载',
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
