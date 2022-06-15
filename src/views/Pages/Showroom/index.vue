<template>
  <div>
    <Header />

    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="10">
          <b-card-group class="pricing flex-column flex-md-row mb-3">
            <card header-classes="bg-transparent" body-classes="px-3" class="card-pricing border-0 text-center mb-4">

              <span class="text-muted py-2">
                List View VS Gallery View
              </span>

              <b-row>
                <GalleryCard v-for="(currency, i) in currencies" :key="`currency${i}`" :front="currency.front"
                  :back="currency.back" :nation="currency.nation" :currency="currency.currency"
                  :circuable="currency.circuable" :issueDate="currency.issueDate" :dissolved="currency.dissolved" />
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

export default {
  name: 'Showroom',
  components: {
    Header,
    GalleryCard
  },
  data() {
    return {
      currencies: [{
        front: "currency.front", back: "currency.back",
        nation: "currency.nation", currency: "currency.currency", circuable: true,
        issueDate: "currency.issueDate", dissolved: false
      }]
    }
  }
};
</script>

<style>
</style>
