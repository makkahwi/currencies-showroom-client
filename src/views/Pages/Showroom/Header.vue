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
                    <input type="checkbox" />
                    <span class="px-1">
                      Banknotes
                    </span>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Coins
                    </span>
                  </b-col>
                </b-row>
              </b-col>

              <b-col md="6" class="p-3">
                <h6 class="text-light">Per Validity</h6>

                <b-row class="justify-content-center text-white">
                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Circuable
                    </span>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Outdated
                    </span>
                  </b-col>
                </b-row>
              </b-col>

              <b-col md="6" class="p-3">
                <h6 class="text-light">Per Existance</h6>

                <b-row class="justify-content-center text-white">
                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Exist
                    </span>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Dissolved
                    </span>
                  </b-col>
                </b-row>
              </b-col>

              <b-col md="6" class="p-3">
                <h6 class="text-light">Per Continent</h6>

                <b-row class="justify-content-center text-white">
                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Asia
                    </span>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Europe
                    </span>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Americas
                    </span>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Africa
                    </span>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Oceania
                    </span>
                  </b-col>
                </b-row>
              </b-col>

              <b-col md="6" class="p-3">
                <h6 class="text-light">Per Country</h6>

                <b-row class="justify-content-center text-white">
                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Malaysia
                    </span>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Jordan
                    </span>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Germany
                    </span>
                  </b-col>
                </b-row>
              </b-col>

              <b-col md="6" class="p-3">
                <h6 class="text-light">Per Issue Date</h6>

                <b-row class="justify-content-center text-white">
                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Asia
                    </span>
                  </b-col>

                  <b-col md="4" class="p-1">
                    <input type="checkbox" />
                    <span class="px-1">
                      Oceania
                    </span>
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
export default {
  name: 'Header'
};
</script>

<style>
</style>
