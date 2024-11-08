<template>
  <div class="calculator">
    <h2>Calculadora</h2>
    <div class="display">
      <input type="text" v-model="currentInput" disabled />
    </div>
    <div class="buttons">
      <button @click="appendToInput('7')">7</button>
      <button @click="appendToInput('8')">8</button>
      <button @click="appendToInput('9')">9</button>
      <button @click="appendToInput('+')">+</button>
      <button @click="appendToInput('4')">4</button>
      <button @click="appendToInput('5')">5</button>
      <button @click="appendToInput('6')">6</button>
      <button @click="appendToInput('-')">-</button>
      <button @click="appendToInput('1')">1</button>
      <button @click="appendToInput('2')">2</button>
      <button @click="appendToInput('3')">3</button>
      <button @click="appendToInput('*')">*</button>
      <button @click="appendToInput('0')">0</button>
      <button @click="clearInput">C</button>
      <button @click="appendToInput('.')">.</button>
      <button @click="appendToInput('/')">/</button>
      <button @click="calculateResult">=</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculatorPage",
  data() {
    return {
      currentInput: ''
    };
  },
  methods: {
    appendToInput(value) {
      this.currentInput += value;
    },
    clearInput() {
      this.currentInput = '';
    },
    calculateResult() {
      try {
        this.currentInput = eval(this.currentInput).toString();
      } catch (error) {
        this.currentInput = 'Error';
      }
    }
  }
};
</script>

<style scoped>
.calculator {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 320px;
  margin: 30px auto;
}

.display input {
  width: 100%;
  height: 50px;
  font-size: 24px;
  text-align: right;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  width: 50px;
  height: 50px;
  font-size: 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #007bff;
  color: white;
}
</style>
