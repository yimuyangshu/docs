import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  output: {
    // 排除 .user.ini 文件
    exclude: ['.user.ini']
  }
})
