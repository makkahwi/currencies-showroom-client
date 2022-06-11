<template>
  <h4 v-if="result > 0">
    Multiplying result is {{ result }}
  </h4>
</template>

<script>
export default {
  name: 'ResultComp',
  props: {
    result: Number
  }
}
</script>

<style scoped>
a {
  color: darkred;
}
</style>
