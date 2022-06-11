<template>
  <h4>
    This is a calculator which on button click returns the result of {{ first }} X {{ second }} to "result" seperated
    component. This is to test passing states / variables.
  </h4>

  <button @click="multiply(first, second), first++, second++">
    Calculate {{ first }} X {{ second }}
  </button>
</template>

<script>
export default {
  name: 'CalculatorComp',
  props: {
    multiply: Function
  },
  data() {
    return {
      first: 5,
      second: 6
    }
  },
}
</script>

<style scoped>
button {
  padding: 2vh 2vw;
  font-size: medium;
  background-color: #f4511e;
  color: white;
  border: 0;
}
</style>
