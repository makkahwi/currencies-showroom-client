<template>
  <div>
    <section class="py-6 bg-secondary" v-for="(image, i) in images" :key="`image${i}`">
      <b-container>
        <b-row align-v="center" class="row-grid">
          <b-col md="6" class="order-md-1" v-if="image.direction === 'right'">
            <b-img :src="image.link" fluid />
          </b-col>

          <b-col md="6" class="order-md-2">
            <div class="pr-md-5">
              <h1>
                {{ image.title }}
              </h1>

              <p>
                {{ image.content }}
              </p>

              <Listing v-if="image.list.length" :list="image.list" :color="image.color" />
            </div>
          </b-col>

          <b-col md="6" class="order-md-3" v-if="image.direction === 'left'">
            <b-img :src="image.link" fluid />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Listing from './List'

export default {
  name: 'MultiImages',
  components: {
    Listing
  },
  data() {
    return {
      images: [{
        link: "img/theme/landing-1.png",
        title: "Text 1",
        content: "Content Text",
        list: [{
          text: "List 1",
          icon: "settings-gear-65"
        }, {
          text: "List 2",
          icon: "html5"
        }, {
          text: "List 3",
          icon: "satisfied"
        }],
        color: "default",
        direction: "left"
      },
      {
        link: "img/theme/landing-2.png",
        title: "Text 2",
        content: "Content Text",
        list: [],
        color: "default",
        direction: "right"
      },
      {
        link: "img/theme/landing-3.png",
        title: "Text 3",
        content: "Content Text",
        list: [],
        color: "default",
        direction: "left"
      }]
    }
  }
};
</script>
