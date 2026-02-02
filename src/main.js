import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Error handling for production
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error)
  const app = document.getElementById('app')
  if (app && !app.innerHTML.includes('Error loading')) {
    app.innerHTML = `
      <div style="padding: 20px; text-align: center; color: #d4af37;">
        <h2>Error loading application</h2>
        <p>Please check the browser console for details.</p>
        <p style="font-size: 12px; color: #999;">Error: ${event.error?.message || 'Unknown error'}</p>
      </div>
    `
  }
})

try {
  const app = createApp(App)
  app.mount('#app')
} catch (error) {
  console.error('Failed to mount Vue app:', error)
  const appEl = document.getElementById('app')
  if (appEl) {
    appEl.innerHTML = `
      <div style="padding: 20px; text-align: center; color: #d4af37;">
        <h2>Failed to load application</h2>
        <p>${error.message || 'Unknown error occurred'}</p>
        <p style="font-size: 12px; color: #999;">Check browser console for details.</p>
      </div>
    `
  }
}
