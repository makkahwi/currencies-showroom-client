<template>
  <b-card no-body class="widget-calendar">
    <b-card-header>
      <b-row align-v="center">
        <b-col cols="8">
          <h5 class="h3 mb-0">Collected Currencies Map</h5>
        </b-col>
      </b-row>
    </b-card-header>

    <b-card-body>
      <world-map class="vector-map vector-map-sm" :map-data="mapData">
      </world-map>
    </b-card-body>
  </b-card>
</template>

<script>
import WorldMap from '@/components/WorldMap.vue';
import listingData from '@/listingData';
import countryCodes from '@/countryCodes';

export default {
  name: 'map-card',
  components: {
    WorldMap
  },
  data() {
    return {
      mapData: {
        AUS: 10,
        BRA: 5,
        CAN: 10,
        DEU: 12,
        FRA: 20,
        GBR: 11,
        GEO: 5,
        IND: 6,
        ROU: 15,
        RUS: 22,
        USA: 5
      },
    }
  },
  methods: {
    countryCode(name) {
      return countryCodes.find(country => country.name === name)["code"]
    }
  },
  mounted() {
    const cleanData = listingData.map(({ count, nation }) => ({ count, nation }))
    const objectsData = [...new Set(cleanData.map(({ nation }) => nation))].map(nation => ({ [this.countryCode(nation)]: cleanData.filter(record => record.nation === nation).reduce((total, nation) => total += nation.count, 0) }))
    const finalData = Object.assign({}, ...objectsData);
    this.mapData = finalData
  }

}
</script>
