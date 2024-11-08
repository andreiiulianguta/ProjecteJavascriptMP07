<template>
  <div>
    <h2>Calculadora</h2>
    <input v-model="display" type="text" readonly />
    <div class="buttons">
      <button v-for="button in buttons" :key="button" @click="appendToDisplay(button)">
        {{ button }}
      </button>
      <button @click="clearDisplay">Esborrar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: '',
      buttons: [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '.', 0, '=', '/'],
    };
  },
  methods: {
    appendToDisplay(value) {
      if (value === '=') {
        this.display = eval(this.display);
      } else {
        this.display += value;
      }
    },
    clearDisplay() {
      this.display = '';
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px;
  margin: 5px;
  font-size: 18px;
}

input {
  width: 100%;
  font-size: 24px;
  padding: 10px;
  margin-bottom: 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
