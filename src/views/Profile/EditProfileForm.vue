<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="8">
        <h3 class="mb-0">
          Profile Edit
        </h3>
      </b-col>
    </b-row>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">
        User information
      </h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="4">
            <base-input type="text" label="Name" placeholder="Name" v-model="user.name">
            </base-input>
          </b-col>

          <b-col lg="4">
            <base-input type="text" label="Job Title" placeholder="Job Title" v-model="user.job">
            </base-input>
          </b-col>

          <b-col lg="4">
            <base-input type="email" label="Email address" placeholder="SuhaibAhmadAi@hotmail.com" v-model="user.email">
            </base-input>
          </b-col>

          <b-col lg="4">
            <base-input label="Location">
              <el-select name="location" filterable placeholder="Please select" v-model="user.location"
                :value="user.location">
                <el-option label="South Africa" value="South Africa" />
                <el-option label="Canada" value="Canada" />
                <el-option label="Malaysia" value="Malaysia" />
                <el-option label="Old Frank" value="Germany" />
                <el-option label="Australia" value="Australia" />
              </el-select>
            </base-input>
          </b-col>

          <b-col lg="4">
            <Tooltip variant="top" content="Currency base of evaluation">
              <base-input label="Currency">
                <el-select name="currency" filterable placeholder="Please select" v-model="user.currency"
                  :value="user.currency">
                  <el-option label="South African Rand" value="SAR" />
                  <el-option label="Canadaian Dollar" value="CAD" />
                  <el-option label="Malaysian Ringgit" value="MYR" />
                  <el-option label="Australian Dollar" value="AUD" />
                </el-select>
              </base-input>
            </Tooltip>
          </b-col>

          <b-col lg="4">
            <Tooltip content="Share collection evaluations with the public @ showroom">
              <base-input label="Share Evaluation">
                <base-switch on-text="Yes" off-text="No" type="default" v-model="user.value" />
              </base-input>
            </Tooltip>
          </b-col>

          <b-col lg="6">
            <base-input type="text" label="Username" placeholder="Username" v-model="user.username">
            </base-input>
          </b-col>

          <b-col lg="6">
            <base-input type="password" label="Password" placeholder="Password" v-model="user.password">
            </base-input>
          </b-col>
        </b-row>
      </div>

      <!--
      <hr class="my-4">

      <h6 class="heading-small text-muted mb-4">Contact information</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="12">
            <base-input type="text" label="Address" placeholder="Home Address" v-model="user.address">
            </base-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="4">
            <base-input type="text" label="City" placeholder="City" v-model="user.city">
            </base-input>
          </b-col>

          <b-col lg="4">
            <base-input type="text" label="Location" placeholder="Location" v-model="user.location">
            </base-input>
          </b-col>

          <b-col lg="4">
            <base-input label="Postal Code" placeholder="ZIP Code" v-model="user.postalCode">
            </base-input>
          </b-col>
        </b-row>
      </div>

      <hr class="my-4">

      <h6 class="heading-small text-muted mb-4">
        About me
      </h6>

      <div class="pl-lg-4">
        <b-form-group label="About Me" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
          <label class="form-control-label">About Me</label>
          <b-form-textarea rows="4" value="A beautiful premium dashboard for BootstrapVue." id="about-form-textaria"
            placeholder="A few words about you ..."></b-form-textarea>
        </b-form-group>
      </div>
      -->
      <b-col xs="12" class="py-1 text-right pr-0">
        <a href="#!" class="btn btn-info">Submit</a>
      </b-col>
    </b-form>
  </card>
</template>

<script>
import { Tooltip } from 'element-ui'
import { Select, Option } from 'element-ui'

export default {
  components: {
    Tooltip,
    [Select.name]: Select,
    [Option.name]: Option,
  },
  data() {
    return {
      user: {
        name: 'Name',
        email: '',
        img: "img/theme/team-4.jpg",
        job: "Software Developer",
        location: 'Malaysia',
        currency: 'MYR',
        value: true,
        username: 'SuhaibAhmad',
        password: 'Andrew',
        // address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        // city: 'New York',
        // postalCode: '',
        // aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style>
</style>
