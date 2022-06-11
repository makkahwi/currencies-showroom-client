<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'WelcomingComp',
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
