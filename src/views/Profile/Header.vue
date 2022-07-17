<template>
  <div class="header pb-6 d-flex align-items-center profile-header">
    <span class="mask bg-gradient-default opacity-8"></span>

    <b-container fluid class="d-flex align-items-center">
      <b-row>
        <b-col lg="7" md="10">
          <h1 class="display-2 text-white">
            {{ name }}
          </h1>

          <p class="text-white">
            {{ email }}
          </p>

          <p class="text-white">
            Money collection enthusiast since {{ oldest }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Suhaib',
      oldest: new Date().getFullYear(),
      email: "SuhaibAhmadAi@hotmail.com"
    }
  }
};
</script>

<style>
.profile-header {
  background-image: url(/img/theme/profile-cover.jpg);
  background-size: cover;
  background-position: center top;
  min-height: 500px;
}
</style>
