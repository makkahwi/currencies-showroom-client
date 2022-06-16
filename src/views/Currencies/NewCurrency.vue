<template>
  <div>
    <base-header class="pb-6">
      <b-row class="align-items-center py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 text-white d-inline-block mb-0">{{ $route.name }}</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb />
          </nav>
        </b-col>
      </b-row>
    </base-header>

    <div class="container-fluid mt--6">
      <form class="new-event--form" @submit.prevent="saveData">
        <b-card no-body class="mb-4">
          <b-card-header>
            <h3 class="mb-0">Add New Currency</h3>
          </b-card-header>

          <b-card-body>
            <b-row>
              <b-col md="6">
                <label class="form-control-label">Currency Front Image</label>
                <DropzoneFileUpload @change="file => filesChange(file, 'front')" />
              </b-col>

              <b-col md="6">
                <label class="form-control-label">Currency Back Image</label>
                <DropzoneFileUpload @change="file => filesChange(file, 'back')" />
              </b-col>
            </b-row>

            <b-row>
              <b-col sm="6" md="4">
                <base-input type="number" :min="0" :step="0.001" label="Value" placeholder="Value"
                  v-model="inputs.value" />
              </b-col>

              <b-col sm="6" md="4">
                <base-input type="number" :min="1800" :max="new Date().getFullYear()" label="Issue Year"
                  :placeholder="new Date().getFullYear()" v-model="inputs.issueyear" />
              </b-col>

              <b-col sm="6" md="4">
                <base-input label="Collection Date">
                  <base-input type="month" v-model="inputs.collection" />
                </base-input>
              </b-col>
            </b-row>

            <b-row>
              <b-col sm="6" md="4">
                <base-input label="Currency Type">
                  <el-select filterable placeholder="Please select" v-model="inputs.type">
                    <el-option label="Banknote" value="banknote" />
                    <el-option label="Coin" value="coin" />
                  </el-select>
                </base-input>
              </b-col>

              <b-col sm="6" md="4">
                <label class="form-control-label">Circability</label>

                <b-row>
                  <b-form-radio :value="true" name="circuable" class="m-2" v-model="inputs.circuable">
                    Circuable
                  </b-form-radio>

                  <b-form-radio :value="false" name="circuable" class="m-2" v-model="inputs.circuable">
                    Outdated
                  </b-form-radio>
                </b-row>
              </b-col>

              <b-col sm="6" md="4">
                <label class="form-control-label">Existance</label>

                <b-row>
                  <b-form-radio :value="true" name="exist" class="m-2" v-model="inputs.exist">
                    Exist
                  </b-form-radio>

                  <b-form-radio :value="false" name="exist" class="m-2" v-model="inputs.exist">
                    Dissolved
                  </b-form-radio>
                </b-row>
              </b-col>
            </b-row>

            <b-row>
              <b-col sm="6" md="4">
                <base-input label="Continent">
                  <el-select filterable placeholder="Please select" v-model="inputs.continent">
                    <el-option label="Africa" value="Africa" />
                    <el-option label="Americas" value="Americas" />
                    <el-option label="Asia" value="Asia" />
                    <el-option label="Europe" value="Europe" />
                    <el-option label="Oceania" value="Oceania" />
                  </el-select>
                </base-input>
              </b-col>

              <b-col sm="6" md="4">
                <base-input label="Country">
                  <el-select filterable placeholder="Please select" v-model="inputs.country">
                    <el-option label="South Africa" value="South Africa" />
                    <el-option label="Canada" value="Canada" />
                    <el-option label="Malaysia" value="Malaysia" />
                    <el-option label="Old Frank" value="Germany" />
                    <el-option label="Australia" value="Australia" />
                  </el-select>
                </base-input>
              </b-col>

              <b-col sm="6" md="4">
                <base-input label="Currency">
                  <el-select filterable placeholder="Please select" v-model="inputs.currency">
                    <el-option label="New Rand" value="NRand" />
                    <el-option label="Old Rand" value="ORand" />
                    <el-option label="New Dollar CAD" value="NDollar" />
                    <el-option label="Old Dollar CAD" value="ODollar" />
                    <el-option label="New Ringgit MYR" value="MYR" />
                    <el-option label="Old Ringgit MYR" value="ORinggit" />
                    <el-option label="Euro EUR" value="Euro" />
                    <el-option label="Old Frank GFK" value="OFrank" />
                    <el-option label="New Dollar" value="NDollar" />
                    <el-option label="Old Dollar" value="ODollar" />
                  </el-select>
                </base-input>
              </b-col>
            </b-row>
          </b-card-body>

          <b-card-footer>
            <base-button icon type="success" class="float-right" @click="saveData">
              <span class="btn-inner--icon"><i class="ni ni-check-bold"></i></span>
              <span class="btn-inner--text">Add</span>
            </base-button>
          </b-card-footer>
        </b-card>
      </form>
    </div>
  </div>
</template>

<script>
import DropzoneFileUpload from '@/components/Inputs/DropzoneFileUpload'
import { Select, Option } from 'element-ui'

export default {
  name: 'NewCurrency',
  components: {
    DropzoneFileUpload,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      inputs: {
        files: {
          front: "",
          back: ""
        },
        value: 0,
        issueyear: 0,
        collection: `${new Date().getFullYear()}-${new Date().getMonth() + 1 < 10 ? '0' : ''}${new Date().getMonth() + 1}`,
        type: "",
        circuable: true,
        exist: true,
        continent: "",
        country: "",
        currency: ""
      },
    }
  },
  methods: {
    filesChange(file, side) {
      this.inputs.files[side] = file
    },
    saveData() {
      console.log(this.inputs)
    }
  }
}
</script>
