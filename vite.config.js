import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Ensure assets load for everyone on GitHub Pages (any device, incognito, with or without trailing slash)
    {
      name: 'html-base',
      apply: 'build',
      transformIndexHtml(html) {
        return html.replace(
          /<head>/i,
          '<head>\n    <base href="https://basiertoronnel.github.io/Calculator-Gold/">'
        )
      }
    }
  ],
  base: './'
})
