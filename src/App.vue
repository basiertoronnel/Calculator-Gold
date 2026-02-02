<template>
  <div class="app">
    <AuthPage 
      v-if="!isLoggedIn" 
      @login="handleLogin"
    />
    <Dashboard 
      v-else 
      @logout="handleLogout"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import AuthPage from './views/AuthPage.vue'
import Dashboard from './views/Dashboard.vue'

export default {
  name: 'App',
  components: {
    AuthPage,
    Dashboard
  },
  setup() {
    const isLoggedIn = ref(false)

    onMounted(() => {
      // Check if user is logged in
      const loggedInUser = localStorage.getItem('goldCalcLoggedIn')
      if (loggedInUser) {
        isLoggedIn.value = true
      }
    })

    const handleLogin = () => {
      isLoggedIn.value = true
    }

    const handleLogout = () => {
      isLoggedIn.value = false
      localStorage.removeItem('goldCalcLoggedIn')
    }

    return {
      isLoggedIn,
      handleLogin,
      handleLogout
    }
  }
}
</script>

<style scoped>
.app {
  min-height: 100vh;
}
</style>
