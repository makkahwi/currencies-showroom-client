<template>
  <card>
    <h5 class="h3 mb-0" slot="header">Edge Numbers</h5>

    <b-list-group flush class="my--3">
      <b-list-group-item class="px-0" v-for="(casee, i) in cases" :key="i">
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
      </b-list-group-item>
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
          icon: "like-2",
          title: 'Most Recent Collected',
          details: [listingData.sort((a, b) => new Date(b.collection) - new Date(a.collection))[0]].map(record => ({ currency: `${record.currency} ${record.value} of ${record.nation}`, type: record.type, collection: record.collection }))[0],
        },
        {
          icon: "like-2",
          title: 'Oldest Currency Acquired',
          details: [listingData.sort((a, b) => new Date(a.issueyear) - new Date(b.issueyear))[0]].map(record => ({ currency: `${record.currency} ${record.value} of ${record.nation}`, type: record.type, issueyear: record.issueyear }))[0],
        },
        {
          icon: "like-2",
          title: 'Highest Currency Value',
          details: [listingData.sort((a, b) => new Date(b.value) - new Date(a.value))[0]].map(record => ({ currency: `${record.currency} ${record.value} of ${record.nation}`, type: record.type, value: record.value }))[0],
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
