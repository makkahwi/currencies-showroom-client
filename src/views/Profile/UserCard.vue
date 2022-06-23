<template>
  <b-card no-body class="card-profile" img-src="img/theme/img-1-1000x600.jpg" alt="Image placeholder" img-top>
    <b-row class="justify-content-center">
      <b-col lg="3" class="order-lg-2">
        <div class="card-profile-image">
          <a href="#">
            <b-img :src="img" rounded="circle" />
          </a>
        </div>
      </b-col>
    </b-row>

    <b-card-body class="pt-0 border-0 pt-7 pb-4">
      <div class="text-center">
        <h5 class="h3">
          {{ name }}
        </h5>

        <div class="h5 font-weight-300">
          <i class="ni location_pin mr-2"></i>{{ location }}
        </div>

        <div class="h5 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>{{ job }}
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {
      name: 'Name',
      email: '',
      img: "img/theme/team-4.jpg",
      job: "Software Developer",
      location: 'Malaysia',
      currency: 'MYR',
      value: true,
      username: 'SuhaibAhmadAi',
      password: 'Andrew',
    }
  }
};
</script>

<style>
</style>
