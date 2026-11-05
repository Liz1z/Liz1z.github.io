import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 相对路径：同时兼容 GitHub Pages 用户名仓库（user.github.io/）
  // 与项目仓库（user.github.io/repo/）两种部署方式
  base: './',
})
