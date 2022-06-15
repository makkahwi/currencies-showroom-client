<template>
  <b-col :lg="list(count)">
    <b-card no-body class="card-lift--hover shadow border-0">
      <b-card-body class="py-5">
        <div :class="`icon icon-shape bg-gradient-${color} text-white rounded-circle mb-4`">
          <i :class="`ni ${icon}`"></i>
        </div>

        <h4 :class="`h3 text-${color} text-uppercase`">
          {{ title }}
        </h4>

        <p class="description mt-3 text-justify">
          {{ content }}
        </p>

        <div>
          <b-badge class="mx-1" pill :variant="`${color}`" v-for="(badge, i) in badges" :key="i">
            {{ badge }}
          </b-badge>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'CardComp',
  props: {
    count: {
      type: Number,
      default: 2,
    },
    icon: {
      type: String,
      default: "ni-check-bold",
    },
    title: {
      type: String,
      default: "Title",
    },
    content: {
      type: String,
      default: "Content",
    },
    color: {
      type: String,
      default: "default",
    },
    badges: {
      type: Array,
    },
  },
  methods: {
    list(c) {
      switch (c) {
        case 1:
          return 12
        case 2:
          return 6
        default:
          return 4
      }
    }
  }
};
</script>
