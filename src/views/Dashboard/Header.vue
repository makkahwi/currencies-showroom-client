<template>
  <base-header type="info" class="pb-6">
    <b-row aling-v="center" class="py-4">
      <b-col cols="7" lg="6">
        <h6 class="h2 text-white d-inline-block mb-0">Dashboard</h6>
        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
          <route-bread-crumb />
        </nav>
      </b-col>

      <b-col cols="5" lg="6" class="text-right">
        <base-button size="sm" type="neutral">Shortcut 1</base-button>
        <base-button size="sm" type="neutral">Shortcut 2</base-button>
      </b-col>
    </b-row>

    <b-row>
      <StatsCard v-for="(stat, i) in stats" :key="i" :data="stat" :count="stats.length" />
    </b-row>
  </base-header>
</template>

<script>
import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb';
import StatsCard from './StatCard';

export default {
  name: "Header",
  components: {
    RouteBreadCrumb,
    StatsCard
  },
  data() {
    return {
      stats: [{
        title: "Pieces Counts",
        count: "350",
        color: "green",
        icon: "chart-bar-32",
        subcount: "3.48%",
        subtitle: "Since last year",
        up: true
      },
      {
        title: "Total traffic",
        count: "2,356",
        color: "orange",
        icon: "chart-pie-35",
        subcount: "12.18%",
        subtitle: "Since last year",
        up: true
      },
      {
        title: "Sales",
        count: "924",
        color: "green",
        icon: "money-coins",
        subcount: "5.72%",
        subtitle: "Since last month",
        up: false
      },
      {
        title: "Performance",
        count: "49.65%",
        color: "info",
        icon: "chart-bar-32",
        subcount: "54.8%",
        subtitle: "Since last month",
        up: true
      }],
    };
  },
};
</script>

<style>
</style>
