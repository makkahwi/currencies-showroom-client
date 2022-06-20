<template>
  <div>
    <Header />

    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="10">
          <b-card-group class="pricing flex-column flex-md-row mb-3">
            <card header-classes="bg-transparent" body-classes="px-3" class="card-pricing border-0 text-center mb-4">

              <span class="text-muted py-2">
                <base-switch @input="() => setView()" on-text="List" off-text="Gal" type="default" />
              </span>

              <b-row v-if="view === 'gallery'">
                <GalleryCard v-for="(currency, i) in currencies" :key="`currency${i}`" :imgF="currency.imgF"
                  :back="currency.imgB" :nation="currency.nation" :currency="currency.currency" :value="currency.value"
                  :circuable="currency.circuable" :issueyear="currency.issueyear" :dissolved="currency.dissolved" />
              </b-row>

              <b-row v-else-if="view === 'list'">
                <b-col xs="12" v-for="(currency, i) in currencies" :key="`currency${i}`">
                  <ListCard :imgF="currency.imgF" :back="currency.imgB" :nation="currency.nation"
                    :value="currency.value" :currency="currency.currency" :circuable="currency.circuable"
                    :issueyear="currency.issueyear" :dissolved="currency.dissolved" />
                </b-col>
              </b-row>

              <a slot="footer" class="text-light">
                <base-button type="default" class="mb-3">
                  Load More
                </base-button>
              </a>
            </card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './Header';
import GalleryCard from './GalleryCard';
import ListCard from './ListCard';

export default {
  name: 'Showroom',
  components: {
    Header,
    GalleryCard,
    ListCard
  },
  data() {
    return {
      currencies: [{
        // imgF: "", imgB: "",
        nation: "Jordan", currency: "JOD", circuable: true, value: 1,
        issueyear: 2005, dissolved: false
      }],
      view: "gallery"
    }
  },
  methods: {
    setView() {
      console.log()
      this.view === 'gallery' ? this.view = 'list' : this.view = 'gallery'
    }
  }
};
</script>

<style>
</style>
