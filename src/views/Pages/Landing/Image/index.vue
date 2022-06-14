<template>
  <section class="py-7 section-nucleo-icons bg-white overflow-hidden">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="8" class="text-center">
          <h2 class="display-3">
            {{ title }}
          </h2>

          <p class="lead">
            {{ content }}
          </p>

          <div v-if="buttons" class="btn-wrapper">
            <a v-for="(button, i) in buttons" :key="i" :href="button.link" :target="button.blank ? '_blank' : '_self'"
              class="btn btn-default mt-3 mt-md-0">
              {{ button.text }}
            </a>
          </div>
        </b-col>
      </b-row>

      <div class="blur--hover">
        <a href="https://www.creative-tim.com/learning-lab/bootstrap-vue/icons/argon-dashboard">
          <div class="icons-container blur-item mt-5">
            <img src="img/brand/white.png">
          </div>

          <span class="blur-hidden h5 text-default">
            {{ text }}
          </span>
        </a>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'OneImage',
  data() {
    return {
      title: "Title",
      content: "Content",
      buttons: [
        {
          link: "#",
          text: "Button",
          blank: false,
        }
      ],
      text: "Text"
    };
  },
};
</script>
