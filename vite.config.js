import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 這裡的名稱必須和您 GitHub 儲存庫 (Repository) 的名稱完全一致！
  // 如果您的 Repo 名稱是 sunkeeper_studio_website，就保留這樣。
  // 如果是其他的，請改成 '/您的Repo名稱/'
  base: '/sunkeeper_studio_website/',
})
