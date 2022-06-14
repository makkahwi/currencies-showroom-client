<template>
  <img src="./assets/developer.png" class="img">
  <Header msg="Welcome To My Second Trial On Vue.Js" />
  <ExplanationComp :condition="true" />
  <Calculator :multiply="multiply" />
  <Result :result="result" />
  <FooterComp />
</template>

<script>
import Header from './components/Header.vue'
import ExplanationComp from './components/Explanation.vue'
import Calculator from './components/Calculator.vue'
import Result from './components/Result.vue'
import FooterComp from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    ExplanationComp,
    Calculator,
    Result,
    FooterComp
  },

  data() {
    return {
      result: 0
    }
  },
  methods: {
    multiply(first = 0, second = 0) {
      this.result = first * second
    }
  }
}
</script>

<style>
#app {
  font-family: Calibri, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.img {
  width: 25%;
  text-align: center;
}
</style>
