<template>
  <div>
    <Header />

    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="10">
          <b-card-group class="pricing flex-column flex-md-row mb-3">
            <card header-classes="bg-transparent" body-classes="px-lg-7" class="card-pricing border-0 text-center mb-4">
              <h4 slot="header" class="text-uppercase ls-1 text-primary py-3 mb-0">Bravo pack</h4>

              <div class="display-2">$49</div>
              <span class="text-muted">per application</span>
              <ul class="list-unstyled my-4">
                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                        <i class="fas fa-terminal"></i>
                      </div>
                    </div>

                    <div>
                      <span class="pl-2">Complete documentation</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                        <i class="fas fa-pen-fancy"></i>
                      </div>
                    </div>

                    <div>
                      <span class="pl-2">Working materials in Sketch</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white">
                        <i class="fas fa-hdd"></i>
                      </div>
                    </div>

                    <div>
                      <span class="pl-2">2GB cloud storage</span>
                    </div>
                  </div>
                </li>
              </ul>

              <base-button type="primary" class="mb-3">Start free trial</base-button>

              <a slot="footer" href="#!" class="text-light">Request a demo</a>
            </card>

            <card gradient="info" class="card-pricing zoom-in shadow-lg rounded border-0 text-center mb-4"
              header-classes="bg-transparent" body-classes="px-lg-7" footer-classes="bg-transparent">
              <h4 slot="header" class="text-uppercase ls-1 text-white py-3 mb-0">Alpha pack</h4>

              <div class="display-1 text-white">$199</div>
              <span class="text-white">per application</span>

              <ul class="list-unstyled my-4">
                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                        <i class="fas fa-terminal"></i>
                      </div>
                    </div>

                    <div>
                      <span class="pl-2 text-white">Complete documentation</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                        <i class="fas fa-pen-fancy"></i>
                      </div>
                    </div>

                    <div>
                      <span class="pl-2 text-white">Working materials in Sketch</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                        <i class="fas fa-hdd"></i>
                      </div>
                    </div>

                    <div>
                      <span class="pl-2 text-white">2GB cloud storage</span>
                    </div>
                  </div>
                </li>
              </ul>

              <base-button type="secondary" class="mb-3">Start free trial</base-button>

              <a slot="footer" href="#!" class="text-white">Contact sales</a>
            </card>
          </b-card-group>
        </b-col>
      </b-row>

      <div class="d-flex justify-content-lg-center px-3 mt-5">
        <div>
          <div class="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
            <i class="ni ni-building text-primary"></i>
          </div>
        </div>

        <b-col lg="6">
          <p class="text-white"><strong>The Arctic Ocean</strong> freezes every winter and much of the sea-ice then
            thaws
            every summer, and that process will continue whatever.</p>
        </b-col>
      </div>

      <b-row class="row-grid justify-content-center">
        <b-col lg="10">
          <div class="table-responsive">
            <base-table class="table table-dark mt-5" :data="features">
              <template slot="columns">
                <th class="px-0 bg-transparent" scope="col">
                  <span class="text-light font-weight-700">Features</span>
                </th>

                <th class="text-center bg-transparent" scope="col">Bravo Pack</th>
                <th class="text-center bg-transparent" scope="col">Alpha Pack</th>
              </template>

              <template slot-scope="{row}">
                <td class="px-0">{{ row.title }}</td>
                <td class="text-center" v-html="row.bravo"></td>
                <td class="text-center" v-html="row.alpha"></td>
              </template>

            </base-table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseTable from '@/components/BaseTable';
import Header from './Header';

export default {
  name: 'Showroom',
  components: {
    BaseTable,
    Header
  },
  data() {
    return {
      features: [
        {
          title: 'IMAP/POP Support',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '<i class="fas fa-check text-success"></i>'
        },
        {
          title: 'Email Forwarding',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '<i class="fas fa-check text-success"></i>'
        },
        {
          title: 'Active Sync',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '<i class="fas fa-check text-success"></i>'
        },
        {
          title: 'Multiple domain hosting',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '<span class="text-sm text-light">Limited to 1 domain only</span>'
        },
        {
          title: 'Additional storage upgrade',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '<i class="fas fa-check text-success">'
        },
        {
          title: '30MB Attachment Limit',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '-'
        },
        {
          title: 'Password protected / Expiry links',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '-'
        },
        {
          title: 'Unlimited Custom Apps',
          bravo: '<i class="fas fa-check text-success"></i>',
          alpha: '-'
        }
      ]
    }
  }
};
</script>

<style>
</style>
