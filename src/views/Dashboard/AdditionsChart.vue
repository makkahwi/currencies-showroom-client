<template>
  <card type="default" header-classes="bg-transparent">
    <b-row align-v="center" slot="header">
      <b-col>
        <!-- <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6> -->
        <h5 class="h3 text-white mb-0">Pieces Counts Per Collection Dates</h5>
      </b-col>

      <b-col>
        <b-nav class="nav-pills justify-content-end">
          <b-nav-item link-classes="py-2 px-3" :active="activeIndex === 'monthly'" class="mr-2 mr-md-0"
            @click.prevent="getMonthlyData()">
            <span class="d-none d-md-block">This Year</span>
            <span class="d-md-none">{{ new Date().getFullYear() }}</span>
          </b-nav-item>

          <b-nav-item link-classes="py-2 px-3" :active="activeIndex === 'yearly'" @click.prevent="getYearlyData()">
            <span class="d-none d-md-block">Yearly</span>
            <span class="d-md-none">Y</span>
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>

    <LineChart :height="350" ref="bigChart" :chart-data="chartData" :extra-options="extraOptions" />
  </card>
</template>

<script>
import * as chartConfigs from '@/components/Charts/config';
import LineChart from '@/components/Charts/LineChart';
import listingData from '@/listingData';

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      activeIndex: "monthly",
      chartData: {
        datasets: [
          {
            label: 'Pieces Collected',
            data: this.monthlyData(listingData.filter(({ collection }) => new Date(collection).getFullYear() === new Date().getFullYear()).map(({ count, collection }) => ({ count, month: new Date(collection).getMonth() })))
          }
        ],
        labels: new Array(new Date().getMonth() + 1).fill().map((_, i) => this.months(i)),
      },
      extraOptions: chartConfigs.blueChartOptions,
    };
  },
  methods: {
    getMonthlyData() {
      this.chartData = {
        datasets: [
          {
            label: 'Pieces Collected',
            data: this.monthlyData(listingData.filter(({ collection }) => new Date(collection).getFullYear() === new Date().getFullYear()).map(({ count, collection }) => ({ count, month: new Date(collection).getMonth() })))
          }
        ],
        labels: new Array(new Date().getMonth() + 1).fill().map((_, i) => this.months(i)),
      };
      this.activeIndex = "monthly";
    },
    monthlyData(data) {
      return new Array(12).fill(0).map((_, month) => data.filter(record => record.month === month).reduce((final, { count }) => final += count, 0))
    },
    months(month) {
      switch (month) {
        case 0: return `Jan`;
        case 1: return "Feb";
        case 2: return "Mar";
        case 3: return "Apr";
        case 4: return "May";
        case 5: return "Jun";
        case 6: return "Jul";
        case 7: return "Aug";
        case 8: return "Sep";
        case 9: return "Oct";
        case 10: return "Nov";
        case 11: return "Dec";
        default: return "-";
      }
    },
    getYearlyData() {
      this.chartData = {
        datasets: [
          {
            label: 'Pieces Collected',
            data: this.yearlyData(listingData.map(({ count, collection }) => ({ count, year: new Date(collection).getFullYear() })))
          }
        ],
        labels: [...new Set(listingData.map(({ count, collection }) => ({ count, year: new Date(collection).getFullYear() })).map(({ year }) => year))].sort(),
      };
      this.activeIndex = "yearly";
    },
    yearlyData(data) {
      return [...new Set(data.map(({ year }) => year))].sort().map(year => data.filter(record => record.year === year).reduce((final, { count }) => final += count, 0))
    },
  },
  mounted() {
    this.getMonthlyData();
  }
};
</script>

<style>
</style>
