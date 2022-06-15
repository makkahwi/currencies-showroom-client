<template>
  <b-col xs="12" xl="3" class="collapse-brand">
    <b-card-group class="pricing flex-column flex-md-row">
      <card header-classes="m-0 p-0" class="card-pricing border-0 text-center text-sm my-2">
        <a href="#" class="text-light">
          <div slot="header">
            <img :src="front" width="100%" />

            <img :src="back" width="100%" />
          </div>

          <b-row align-v="center">
            <b-col xs="6" class="text-default my-2">
              Nation
              <span class="font-weight-bold ">
                {{ nation }}
              </span>
            </b-col>

            <b-col xs="6" class="text-default my-2">
              Currency
              <span class="font-weight-bold ">
                {{ currency }}
              </span>
            </b-col>

            <b-col xs="12" class="text-default mt-2">
              {{ circuable ? "Circuable" : "Outdated" }} ({{ issueDate.toLocaleDateString() }}) {{ dissolved ?
                  "DISSOLVED" : ""
              }}
            </b-col>
          </b-row>
        </a>
      </card>
    </b-card-group>
  </b-col>
</template>

<script>
export default {
  name: 'GalleryCard',
  props: {
    front: {
      type: String,
      default: 'https://wadirumclassictours.webnode.com/_files/200020389-979919987d/jordanian-money-1-dinar01.jpg',
    },
    back: {
      type: String,
      default: 'https://wadirumclassictours.webnode.com/_files/200020390-5432d552e0/jordanian-money-1-dinar02.jpg',
    },
    nation: {
      type: String,
      default: 'Jordan',
    },
    currency: {
      type: String,
      default: 'Dinar',
    },
    circuable: {
      type: Boolean,
      default: true,
    },
    issueDate: {
      type: Date,
      default: new Date(),
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
