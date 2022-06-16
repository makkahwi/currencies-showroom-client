<template>
  <b-col xs="6" :md="list(count)">
    <stats-card :title="data.title" :type="data.color" :sub-title="data.count" :icon="`ni ni-${data.icon}`">
      <template slot="footer">
        <span class="text-success mr-2"><i :class="`fa fa-arrow-${data.up ? 'up' : 'down'}`"></i>
          {{ data.subcount }}</span>
        <span class="text-nowrap">{{ data.subtitle }}</span>
      </template>
    </stats-card>
  </b-col>
</template>

<script>
import StatsCard from '@/components/Cards/StatsCard';

export default {
  name: "StatCard",
  components: {
    StatsCard,
  },
  props: {
    count: {
      type: Number,
      default: 0,
    },
    data: {
      type: Object,
    },
  },
  methods: {
    list(c) {
      switch (c) {
        case 1:
          return 12
        case 2:
          return 6
        case 3:
          return 4
        default:
          return 3
      }
    }
  }
};
</script>
<style>
</style>
