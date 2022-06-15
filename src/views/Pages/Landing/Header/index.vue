<template>
  <div class="header bg-gradient-default pt-7 pb-7 min-vh-100">
    <b-container>
      <div class="header-body">
        <b-row align-v="center">
          <b-col lg="6">
            <div class="pr-5">
              <h1 class="display-2 text-white font-weight-bold mb-0">
                Currencies Showroom
              </h1>

              <h2 class="display-4 text-white font-weight-light text-justify">
                A web app to publish my collection of currencies from all over the world to all over the world
              </h2>

              <p class="text-white mt-4">
                Collectors could clone this project & deploy it to enlist their currencies. The public could just browse
                their showrooms right away.
              </p>

              <div class="mt-5">
                <a href="#" class="btn btn-info my-2">
                  Browse My Collection
                </a>

                <a href="#" class="btn btn-neutral my-2">
                  Build Your Showroom
                </a>
              </div>
            </div>
          </b-col>

          <b-col lg="6">
            <b-row class="pt-5">
              <b-col md="6">
                <Card v-for="(feature, i) in featuresLeft" :title="feature.title" :content="feature.content"
                  :color="feature.color" :icon="feature.icon" :key="i" />
              </b-col>

              <b-col md="6" class="pt-lg-5 pt-4">
                <Card v-for="(feature, i) in featuresRight" :title="feature.title" :content="feature.content"
                  :color="feature.color" :icon="feature.icon" :key="i" />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>

    <div class="separator separator-bottom separator-skew zindex-100">
      <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <polygon class="fill-info" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'HeaderComp',
  data() {
    return {
      featuresLeft: [{ title: "FULL-DETAIL LISTING", content: "You may enlist all the details you could imagine about your collections.", color: "info" }],
      featuresRight: [{ title: "AUTOMATED MARKET EVALUATION", content: "Once you enlist a currency, the system cutshort & add up its circular value to total value estimation.", icon: "scissors" }]
    };
  },
  components: {
    Card
  }
};
</script>
