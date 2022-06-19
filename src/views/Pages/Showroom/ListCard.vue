<template>
  <b-card-group class="pricing flex-column flex-md-row">
    <card class="card-pricing border-0 text-left text-sm my-2">
      <a href="#" class="text-light">
        <table class="table table-responsive">
          <tbody>
            <tr>
              <td rowspan="100%" class="align-middle text-center">
                <img :src="imgF" height="95vh" />
                <br />
                <img :src="imgB" height="95vh" />
                <br />
                <br />
                {{ type }}
              </td>

              <td class="align-middle">
                Nation
              </td>

              <th class="align-middle">
                <b>
                  {{ nation }}
                </b>
              </th>

              <td class="align-middle">
                Circability
              </td>

              <td class="align-middle">
                <b>
                  {{ circuable ? "Circuable" : "Outdated" }}
                </b>
              </td>

              <td rowspan="100%" class="bg-default text-white">
                <u>
                  Private
                </u>

                <br />
                <br />

                Count
                <b>
                  {{ count }}
                </b>

                <br />
                <br />

                Notes
                <b>
                  {{ notes }}
                </b>

                <br />
                <br />

                Evaluation
                <b>
                  $6
                </b>
              </td>
            </tr>

            <tr>
              <td class="align-middle">
                Currency
              </td>

              <th class="align-middle">
                <b>
                  {{ currency }}
                </b>
              </th>

              <td class="align-middle">
                Issue Year
              </td>

              <th class="align-middle">
                <b>
                  {{ issueyear }}
                </b>
              </th>
            </tr>

            <tr>
              <td class="align-middle">
                Unit
              </td>

              <th class="align-middle">
                <b>
                  {{ unit }}
                </b>
              </th>

              <td class="align-middle">
                Dissolved
              </td>

              <th class="align-middle">
                <b>
                  {{ dissolved ?
                      "Yes" : "No"
                  }}
                </b>
              </th>
            </tr>

            <tr>
              <td class="align-middle">
                Value
              </td>

              <th class="align-middle">
                <b>
                  {{ value }}
                </b>
              </th>

              <td class="align-middle">
                Collection Date
              </td>

              <th class="align-middle">
                <b>
                  {{ collection.toLocaleDateString() }}
                </b>
              </th>
            </tr>
          </tbody>
        </table>

        <b-row align-v="center">
          <b-col xs="6" class="text-default my-2">

          </b-col>

          <b-col xs="6" class="text-default my-2">

          </b-col>

          <b-col xs="12" class="text-default mt-2">

          </b-col>
        </b-row>
      </a>
    </card>
  </b-card-group>
</template>

<script>
export default {
  name: 'ListCard',
  props: {
    imgF: {
      type: String,
      default: 'https://wadirumclassictours.webnode.com/_files/200020389-979919987d/jordanian-money-1-dinar01.jpg',
    },
    imgB: {
      type: String,
      default: 'https://wadirumclassictours.webnode.com/_files/200020390-5432d552e0/jordanian-money-1-dinar02.jpg',
    },
    nation: {
      type: String,
      default: 'Jordan',
    },
    currency: {
      type: String,
      default: 'JOD',
    },
    type: {
      type: String,
      default: 'Banknote',
    },
    unit: {
      type: String,
      default: "Dinar",
    },
    value: {
      type: Number,
      default: 0,
    },
    issueyear: {
      type: Number,
      default: 2000,
    },
    circability: {
      type: Boolean,
      default: true,
    },
    dissolved: {
      type: Boolean,
      default: false,
    },
    count: {
      type: Number,
      default: 1,
    },
    collection: {
      type: Date,
      default: new Date(),
    },
    notes: {
      type: String,
      default: "-",
    },
  }
};
</script>

<style>
</style>
