<template>
  <b-card-group class="pricing flex-column flex-md-row">
    <card class="card-pricing border-0 text-left text-sm my-2">
      <a href="#" class="text-light">
        <table class="table table-">
          <tbody>
            <tr>
              <td rowspan="100%" class="text-center">
                <img :src="front" height="45vh" />
                <br />
                <img :src="back" height="45vh" />
              </td>

              <td>
                Nation
              </td>

              <th>
                <b>
                  {{ nation }}
                </b>
              </th>

              <td colspan="2">
                {{ circuable ? "Circuable" : "Outdated" }} ({{ issueDate.toLocaleDateString() }}) {{ dissolved ?
                    "DISSOLVED" : ""
                }}
              </td>

              <td rowspan="2">
                <u>
                  Private
                </u>
                <br />
                <br />

                Evaluation
                <b>
                  $5
                </b>
                <br />

                Evaluation
                <b>
                  $6
                </b>
              </td>
            </tr>

            <tr>
              <td>
                Currency
              </td>

              <th>
                <b>
                  {{ currency }}
                </b>
              </th>

              <td>
                Value
              </td>

              <th>
                <b>
                  {{ currency }}
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
    front: {
      type: String,
      default: 'https://wadirumclassictours.webnode.com/_files/200020389-979919987d/jordanian-money-1-dinar01.jpg',
    },
    back: {
      type: String,
      default: 'https://wadirumclassictours.webnode.com/_files/200020390-5432d552e0/jordanian-money-1-dinar02.jpg',
    },
    nation: {
      type: String,
      default: 'Jordan',
    },
    currency: {
      type: String,
      default: 'Dinar',
    },
    circuable: {
      type: Boolean,
      default: true,
    },
    issueDate: {
      type: Date,
      default: new Date(),
    },
    dissolved: {
      type: Boolean,
      default: false,
    },
  }
};
</script>

<style>
</style>
