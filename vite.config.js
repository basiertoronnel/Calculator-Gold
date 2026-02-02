import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages: repo name in URL is case-sensitive (Calculator-Gold)
const base = '/Calculator-Gold/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base
})
