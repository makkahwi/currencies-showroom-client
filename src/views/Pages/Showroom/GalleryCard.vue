<template>
  <b-col xs="12" xl="3" class="collapse-brand">
    <b-card-group class="pricing flex-column flex-md-row">
      <card header-classes="m-0 p-0" class="card-pricing border-0 text-center text-sm my-2">
        <a href="#" class="text-light">
          <div slot="header">
            <img :src="imgF" width="100%" />

            <img :src="imgB" width="100%" />
          </div>

          <b-col class="text-default my-2">
            <span class="font-weight-bold ">
              {{ `${currency} ${value} of ${nation}` }}
            </span>
          </b-col>

          <b-col class="text-default mt-2">
            {{ circability ? "Circuable" : "Outdated" }} ({{ issueyear }}) {{ dissolved ?
                "DISSOLVED" : ""
            }}
          </b-col>
        </a>
      </card>
    </b-card-group>
  </b-col>
</template>

<script>
export default {
  name: 'GalleryCard',
  props: {
    imgF: {
      type: String,
      default: 'https://wadirumclassictours.webnode.com/_files/200020389-979919987d/jordanian-money-1-dinar01.jpg',
    },
    imgB: {
      type: String,
      default: 'https://wadirumclassictours.webnode.com/_files/200020390-5432d552e0/jordanian-money-1-dinar02.jpg',
    },
    nation: {
      type: String,
      default: 'Jordan',
    },
    currency: {
      type: String,
      default: 'JOD',
    },
    value: {
      type: Number,
      default: 0,
    },
    issueyear: {
      type: Number,
      default: 2000,
    },
    circability: {
      type: Boolean,
      default: true,
    },
    dissolved: {
      type: Boolean,
      default: false,
    },
  }
};
</script>

<style>
</style>
