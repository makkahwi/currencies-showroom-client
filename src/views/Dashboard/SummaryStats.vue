<template>
  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">Statistics</h3>
        </b-col>

        <b-col class="text-right">
          <a class="btn btn-sm btn-default" @click="setType">Type</a>

          <div class="btn-group">
            <a class="btn btn-sm btn-info" @click="setTarget">Targets</a>
            <a class="btn btn-sm btn-default" @click="setTarget(true)">See all</a>
          </div>
        </b-col>
      </b-row>
    </template>

    <div class="mx-5 mb-3">
      <table class="table table-responsive table-sm table-striped table-hover text-center">
        <thead>
          <tr class="bg-info text-default">
            <th rowspan="100%"> Circability </th>
            <th rowspan="100%"> Continent </th>
            <th colspan="3"> {{ dataShow.coins ? 'Coins' : 'Banknotes' }} </th>
          </tr>

          <tr class="bg-info text-default">
            <th> Pieces </th>
            <th> Unique Pieces </th>
            <th> Countries </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(continent, i) in continents" :key="i">
            <td> Circuable </td>
            <td> {{ continent }} </td>
            <td> {{ statData().filter(data => data.circuable && data.continent === continent).length }} </td>

            <td>
              <div v-if="dataShow.target" class="d-flex align-items-center">
                <span class="mx-1">{{ statData().filter(data => data.circuable && data.continent === continent).length
                }}/{{ statData().filter(data => data.circuable).length }}</span>
                <BaseProgress type="gradient-default"
                  :value="statData().filter(data => data.circuable && data.continent === continent).length / statData().length * 100" />
                <span class="mx-1">{{ statData().filter(data => data.circuable && data.continent === continent).length
                    / statData().filter(data => data.circuable).length * 100
                }}%</span>
              </div>

              <span v-else>
                {{ statData().filter(data => data.circuable && data.continent === continent).length }}
              </span>
            </td>

            <td>
              <div v-if="dataShow.target" class="d-flex align-items-center">
                <span class="mx-1">12/50</span>
                <BaseProgress type="gradient-info" :value="25" />
                <span class="mx-1">25%</span>
              </div>
              <span v-else>
                12
              </span>
            </td>
          </tr>

          <tr v-for="(continent, i) in continents" :key="i">
            <td> Outdated </td>
            <td> {{ continent }} </td>
            <td> {{ statData().filter(data => !data.circuable && data.continent === continent).length }} </td>

            <td>
              <div v-if="dataShow.target" class="d-flex align-items-center">
                <span class="mx-1">{{ statData().filter(data => !data.circuable && data.continent === continent).length
                }}/{{ statData().filter(data => !data.circuable).length }}</span>
                <BaseProgress type="gradient-default"
                  :value="statData().filter(data => !data.circuable && data.continent === continent).length / statData().length * 100" />
                <span class="mx-1">{{ statData().filter(data => !data.circuable && data.continent === continent).length
                    / statData().filter(data => !data.circuable).length * 100
                }}%</span>
              </div>

              <span v-else>
                {{ statData().filter(data => !data.circuable && data.continent === continent).length }}
              </span>
            </td>

            <td>
              <div v-if="dataShow.target" class="d-flex align-items-center">
                <span class="mx-1">12/50</span>
                <BaseProgress type="gradient-info" :value="25" />
                <span class="mx-1">25%</span>
              </div>
              <span v-else>
                12
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </b-card>
</template>

<script>
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown } from 'element-ui'
import { BaseProgress } from '@/components';
import listingData from "@/listingData"
import currenciesData from "@/currenciesData"

export default {
  name: 'SummaryStats',
  components: {
    BaseProgress,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
  },
  data() {
    return {
      listingData,
      currenciesData,
      continents: [null],
      dataShow: {
        target: true,
        coins: true
      },
      tableData: [
        {
          page: '/argon/',
          visitors: '4,569',
          unique: '340',
          bounceRate: '46,53%',
          bounceRateDirection: 'up'
        },
        {
          page: '/argon/index.html',
          visitors: '3,985',
          unique: '319',
          bounceRate: '46,53%',
          bounceRateDirection: 'down'
        },
        {
          page: '/argon/charts.html',
          visitors: '3,513',
          unique: '294',
          bounceRate: '36,49%',
          bounceRateDirection: 'down'
        },
        {
          page: '/argon/tables.html',
          visitors: '2,050',
          unique: '147',
          bounceRate: '50,87%',
          bounceRateDirection: 'up'
        },
        {
          page: '/argon/profile.html',
          visitors: '1,795',
          unique: '190',
          bounceRate: '46,53%',
          bounceRateDirection: 'down'
        }
      ]
    }
  },
  methods: {
    setTarget(input) {
      this.dataShow.target = input | !this.dataShow.target
    },
    setType(input) {
      this.dataShow.coins = input | !this.dataShow.coins
    },
    statData() {
      const data = listingData.map(listing => ({ ...listing, ...currenciesData.find(currency => currency.code === listing.currency) }));
      this.continents = data.map(dat => dat.continent).filter((value, i, final) => final.indexOf(value) === i)

      return data;
    }
  }
}
</script>

<style>
</style>
