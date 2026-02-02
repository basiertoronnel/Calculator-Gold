<template>
  <div class="calculator-card">
    <div class="calculator-header">
      <h3>{{ karat.name }} Gold</h3>
      <div class="rate">Rate: ₱{{ karat.rate.toLocaleString() }}/gram</div>
    </div>

    <div class="input-group">
      <label>Weight (grams)</label>
      <input 
        type="number" 
        step="0.01" 
        v-model.number="karat.grams"
        placeholder="Enter grams"
      >
    </div>

    <div class="input-group">
      <label>Making Charge (₱)</label>
      <input 
        type="number" 
        step="0.01" 
        v-model.number="karat.makingCharge"
        placeholder="Enter making charge"
      >
    </div>

    <div class="result">
      <div class="result-label">Total Price (with 12% tax)</div>
      <div class="result-value">₱{{ calculateTotal.toLocaleString() }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'CalculatorCard',
  props: {
    karat: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const calculateTotal = computed(() => {
      if (!props.karat.grams || props.karat.grams <= 0) return 0
      
      // Formula: (gold rate × grams + making charge) + 12% tax
      const basePrice = (props.karat.rate * props.karat.grams) + (props.karat.makingCharge || 0)
      const totalWithTax = basePrice * 1.12
      
      return Math.round(totalWithTax * 100) / 100
    })

    return {
      calculateTotal
    }
  }
}
</script>

<style scoped>
.calculator-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s;
}

.calculator-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3);
  border-color: rgba(212, 175, 55, 0.5);
}

.calculator-header {
  background: linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%);
  color: #1a1a2e;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
}

.calculator-header h3 {
  font-size: 24px;
  font-weight: 700;
}

.calculator-header .rate {
  font-size: 14px;
  margin-top: 5px;
  opacity: 0.8;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  color: #d4af37;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
}

.input-group input {
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
}

.input-group input:focus {
  outline: none;
  border-color: #d4af37;
  background: rgba(255, 255, 255, 0.15);
}

.result {
  background: linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%);
  color: #1a1a2e;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
}

.result-label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
}

.result-value {
  font-size: 32px;
  font-weight: 700;
}
</style>
