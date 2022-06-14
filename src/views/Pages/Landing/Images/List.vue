<template>
  <ul class="list-unstyled mt-5">
    <li class="py-2" v-for="(item, i) in list" :key="i">
      <div class="d-flex align-items-center">
        <div>
          <b-badge pill :variant="color" class="badge-circle mr-3">
            <i :class="`ni ni-${item.icon}`"></i>
          </b-badge>
        </div>

        <div>
          <h4 class="mb-0">{{ item.text }}</h4>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListComp',
  props: {
    list: {
      type: Array,
    },
    color: {
      type: String,
      default: "default",
    },
  }
};
</script>
