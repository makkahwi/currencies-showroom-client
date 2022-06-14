<template>
  <b-card no-body>
    <b-card-body>
      <div :class="`icon icon-shape bg-gradient-${color} text-white rounded-circle shadow mb-4`">
        <i :class="`ni ni-${icon}`"></i>
      </div>
      <h5 class="h3">{{ title }}</h5>
      <p>{{ content }}</p>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'CardComp',
  props: {
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
    icon: {
      type: String,
      default: "bullet-list-67",
    },
  },
};
</script>
