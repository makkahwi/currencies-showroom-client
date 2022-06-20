<template>
  <card>
    <h5 class="h3 mb-0" slot="header">Edge Numbers</h5>

    <b-list-group>
      <b-row align-v="center">
        <b-col xs="6" md="4" v-for="(casee, i) in cases" :key="i">
          <b-row align-v="center">
            <b-col cols="auto">
              <span class="avatar rounded-circle bg-default">
                <i :class="`ni ni-${casee.icon}`"></i>
              </span>
            </b-col>

            <b-col class="ml--2">
              <h4 class="mb-0">
                <a href="#!">{{ casee.title }}</a>
              </h4>

              <small v-for="(key, i) in Object.keys(casee.details)" :key="i">
                {{ label(key) }}: <b>{{ casee.details[key] }}</b>
                <br />
              </small>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-list-group>
  </card>
</template>

<script>
import listingData from '@/listingData';

export default {
  name: 'Edge-Numbers',
  data() {
    return {
      cases: [
        {
          icon: "diamond",
          title: 'Most Recent Collected',
          details: [listingData.sort((a, b) => new Date(b.collection) - new Date(a.collection))[0]].map(({ currency, value, nation, type, collection }) => ({ currency: `${currency} ${value} of ${nation}`, type, collection }))[0],
        },
        {
          icon: "watch-time",
          title: 'Oldest Currency Acquired',
          details: [listingData.sort((a, b) => new Date(a.issueyear) - new Date(b.issueyear))[0]].map(({ currency, value, nation, type, issueyear }) => ({ currency: `${currency} ${value} of ${nation}`, type, issueyear }))[0],
        },
        {
          icon: "money-coins",
          title: 'Highest Currency Value',
          details: [listingData.sort((a, b) => new Date(b.value) - new Date(a.value))[0]].map(({ currency, value, nation, type }) => ({ currency: `${currency} ${value} of ${nation}`, type, value }))[0],
        }
      ]
    };
  },
  methods: {
    capitalize(text) {
      return text && text[0].toUpperCase() + text.slice(1)
    },
    label(text) {
      switch (text) {
        case "collection": return "Collection Date";
        case "issueyear": return "Issue Year";
        default: return this.capitalize(text);
      }
    }
  }
};
</script>

<style>
</style>
