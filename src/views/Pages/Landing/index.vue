<template>
  <div>
    <Header />

    <About />

    <Features />

    <MultiImages />

    <Links id="haveYourShowroom" />
  </div>
</template>

<script>
import Header from './Header/index'
import About from './About/index'
import Features from './Features/index'
import MultiImages from "./Images/index"
import Links from "./Links/index"

export default {
  name: 'HomePage',
  components: {
    Header,
    About,
    Features,
    MultiImages,
    Links,
  },
};
</script>
