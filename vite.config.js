import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages project site URL: https://username.github.io/REPO-NAME/
// Use absolute base path - must match repo name exactly (case-sensitive)
const base = '/Calculator-Gold/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base
})
