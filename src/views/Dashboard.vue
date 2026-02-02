<template>
  <div class="container">
    <div class="header">
      <h1>🏆 Gold Calculator Philippines</h1>
      <button @click="$emit('logout')" class="logout-btn">Logout</button>
    </div>

    <div class="calculator-grid">
      <CalculatorCard
        v-for="karat in karats"
        :key="karat.name"
        :karat="karat"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import CalculatorCard from '../components/CalculatorCard.vue'

export default {
  name: 'Dashboard',
  components: {
    CalculatorCard
  },
  emits: ['logout'],
  setup() {
    const karats = ref([
      { name: '24K', rate: 4250, grams: 0, makingCharge: 0 },
      { name: '22K', rate: 3896, grams: 0, makingCharge: 0 },
      { name: '21K', rate: 3719, grams: 0, makingCharge: 0 },
      { name: '18K', rate: 3188, grams: 0, makingCharge: 0 },
      { name: '14K', rate: 2479, grams: 0, makingCharge: 0 },
      { name: '10K', rate: 1771, grams: 0, makingCharge: 0 },
      { name: '8K', rate: 1417, grams: 0, makingCharge: 0 }
    ])

    return {
      karats
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  background: linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%);
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  color: #1a1a2e;
  font-size: 28px;
  font-weight: 700;
}

.logout-btn {
  background: #1a1a2e;
  color: #d4af37;
  border: none;
  padding: 10px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.logout-btn:hover {
  background: #0f0f1e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.calculator-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .calculator-grid {
    grid-template-columns: 1fr;
  }

  .header h1 {
    font-size: 20px;
  }
}
</style>
