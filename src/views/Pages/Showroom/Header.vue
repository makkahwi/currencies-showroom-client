<template>
  <div class="header bg-gradient-info py-7 py-lg-8 pt-lg-9">
    <b-container>
      <div class="header-body text-center mb-7">
        <b-row class="justify-content-center">
          <b-col md="10" class="px-5">
            <h1 class="text-white pb-6">Cuurencies Showroom</h1>

            <h3 class="text-white">Filters</h3>

            <b-row class="justify-content-center text-white">
              <b-col md="6" class="p-3">
                <h6 class="text-light">Per Type</h6>

                <b-row class="justify-content-center text-white">
                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Banknotes
                    </b-form-checkbox>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Coins
                    </b-form-checkbox>
                  </b-col>
                </b-row>
              </b-col>

              <b-col md="6" class="p-3">
                <h6 class="text-light">Per Validity</h6>

                <b-row class="justify-content-center text-white">
                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Circuable
                    </b-form-checkbox>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Outdated
                    </b-form-checkbox>
                  </b-col>
                </b-row>
              </b-col>

              <b-col md="6" class="p-3">
                <h6 class="text-light">Per Existance</h6>

                <b-row class="justify-content-center text-white">
                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Exist
                    </b-form-checkbox>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Dissolved
                    </b-form-checkbox>
                  </b-col>
                </b-row>
              </b-col>

              <b-col md="6" class="p-3">
                <h6 class="text-light">Per Continent</h6>

                <b-row class="justify-content-center text-white">
                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Asia
                    </b-form-checkbox>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Europe
                    </b-form-checkbox>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Americas
                    </b-form-checkbox>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Africa
                    </b-form-checkbox>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Oceania
                    </b-form-checkbox>
                  </b-col>
                </b-row>
              </b-col>

              <b-col md="6" class="p-3">
                <h6 class="text-light">Per Country</h6>

                <b-row class="justify-content-center text-white">
                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Malaysia
                    </b-form-checkbox>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Jordan
                    </b-form-checkbox>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <b-form-checkbox color="default">
                      Germany
                    </b-form-checkbox>
                  </b-col>
                </b-row>
              </b-col>

              <b-col md="6" class="p-3">
                <h6 class="text-light">Per Issue Date</h6>

                <BaseSlider :value="[150, 450]" :range="{ min: 100, max: 500 }" :options="{ color: 'default' }" />

                <b-row class="mt-3">
                  <b-col cols="6" class="text-left">
                    <span class="range-slider-value">100</span>
                  </b-col>

                  <b-col cols="6" class="text-right">
                    <span class="range-slider-value value-high">500</span>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>

    <div class="separator separator-bottom separator-skew zindex-100">
      <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <polygon class="fill-secondary" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </div>
</template>

<script>
import BaseSlider from '@/components/BaseSlider'

export default {
  name: 'Header',
  components: {
    BaseSlider
  }
};
</script>

<style>
</style>
