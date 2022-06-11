<template>
  <h6>
    What i'm trying to do here is to absorb the differences between working with <a href="https://vuejs.org/"
      target="_blank">Vue.Js</a> & <a href="https://reactjs.org/" target="_blank">React.Js</a>
  </h6>

  <h5 v-if="condition">
    This statement would show up if I now understand how conditional rendering works in Vue.Js
  </h5>
</template>

<script>
export default {
  name: 'ExplanationComp',
  props: {
    condition: Boolean
  }
}
</script>

<style scoped>
h6,
h5 {
  margin: 5vh 0;
}

a {
  color: darkred;
}
</style>
