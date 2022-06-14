<template>
  <section class="section section-lg pt-lg-0 mt--7">
    <b-container>
      <b-row class="justify-content-center">
        <Card v-for="(feature, i) in features" :key="i" :count="features.length" :title="feature.title"
          :content="feature.content" :color="feature.color" :badges="feature.badges" />
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Card from "./Card"

export default {
  name: 'FeaturesComp',
  components: {
    Card
  },
  data() {
    return {
      features: [{
        title: "Full-Detail Listing",
        content: "You may enlist all the details you could imagine about your collections.",
        color: "default",
        badges: ["listing", "filtering", "analyzing"]
      }, {
        title: "Automated Market Evaluation",
        content: "Once you enlist a currency, the system added up its circular value to total value estimation.",
        color: "default",
        badges: ["automated", "evaluation"]
      }]
    };
  },
};
</script>
