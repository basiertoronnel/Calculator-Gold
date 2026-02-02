<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>
      
      <div v-if="authError" class="error-message">
        {{ authError }}
      </div>

      <form @submit.prevent="handleAuth">
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="authForm.email" required>
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="authForm.password" required>
        </div>

        <div v-if="!isLogin" class="form-group">
          <label>Confirm Password</label>
          <input type="password" v-model="authForm.confirmPassword" required>
        </div>

        <button type="submit" class="auth-btn">
          {{ isLogin ? 'Login' : 'Register' }}
        </button>
      </form>

      <div class="toggle-auth">
        {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
        <a @click="toggleAuthMode">{{ isLogin ? 'Register' : 'Login' }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'

export default {
  name: 'AuthPage',
  emits: ['login'],
  setup(props, { emit }) {
    const isLogin = ref(true)
    const authError = ref('')
    const users = ref([])
    const authForm = reactive({
      email: '',
      password: '',
      confirmPassword: ''
    })

    onMounted(() => {
      // Load users from localStorage
      const savedUsers = localStorage.getItem('goldCalcUsers')
      if (savedUsers) {
        users.value = JSON.parse(savedUsers)
      }
    })

    const handleAuth = () => {
      authError.value = ''

      if (isLogin.value) {
        // Login
        const user = users.value.find(u => 
          u.email === authForm.email && 
          u.password === authForm.password
        )

        if (user) {
          localStorage.setItem('goldCalcLoggedIn', authForm.email)
          emit('login')
          resetAuthForm()
        } else {
          authError.value = 'Invalid email or password'
        }
      } else {
        // Register
        if (authForm.password !== authForm.confirmPassword) {
          authError.value = 'Passwords do not match'
          return
        }

        if (users.value.find(u => u.email === authForm.email)) {
          authError.value = 'Email already registered'
          return
        }

        // Add new user
        users.value.push({
          email: authForm.email,
          password: authForm.password
        })

        localStorage.setItem('goldCalcUsers', JSON.stringify(users.value))
        
        // Auto login after registration
        localStorage.setItem('goldCalcLoggedIn', authForm.email)
        emit('login')
        resetAuthForm()
      }
    }

    const toggleAuthMode = () => {
      isLogin.value = !isLogin.value
      authError.value = ''
      resetAuthForm()
    }

    const resetAuthForm = () => {
      authForm.email = ''
      authForm.password = ''
      authForm.confirmPassword = ''
    }

    return {
      isLogin,
      authError,
      authForm,
      handleAuth,
      toggleAuthMode
    }
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.auth-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.auth-card h2 {
  color: #d4af37;
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  color: #d4af37;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #d4af37;
  background: rgba(255, 255, 255, 0.15);
}

.auth-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 10px;
}

.auth-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
}

.toggle-auth {
  text-align: center;
  margin-top: 20px;
  color: #999;
}

.toggle-auth a {
  color: #d4af37;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
}

.toggle-auth a:hover {
  text-decoration: underline;
}

.error-message {
  background: rgba(231, 76, 60, 0.2);
  border: 1px solid rgba(231, 76, 60, 0.5);
  color: #ff6b6b;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
