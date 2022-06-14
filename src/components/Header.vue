<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: {
    msg: String
  }
}
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  color: orangered;
  text-transform: capitalize;
}
</style>
