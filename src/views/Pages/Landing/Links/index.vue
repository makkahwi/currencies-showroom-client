<template>
  <section class="bg-white py-7">
    <b-container>
      <b-row class="row-grid justify-content-center">
        <b-col lg="8" class="text-center">
          <h2 class="text-info display-4">
            {{ text }}
          </h2>

          <h2 class="text-default display-3">
            {{ colored_text }}
          </h2>

          <p class="lead">
            {{ content }}
          </p>

          <p>
            {{ note }}
          </p>

          <div class="btn-wrapper my-4 py-4" v-if="buttons.length">
            <div v-for="(button, i) in buttons" :key="`button${i}`">
              <a v-if="!button.ghost" :href="button.link" :target="button.target || '_self'"
                :class="`btn btn-${button.color || 'default'} btn-icon mb-3 mb-sm-0`">
                <span class="btn-inner--icon" v-if="button.icon">
                  <i :class="`ni ni-${button.icon}`"></i>
                </span>

                <span class="btn-inner--text">
                  {{ button.text }}
                </span>
                <b-badge v-if="button.badge" size="md" pill variant="default" class="badge-floating border-white">
                  {{ button.badge }}
                </b-badge>
              </a>

              <base-button v-if="button.ghost" type="neutral" disabled href="javascript:void(0)" aria-pressed="true"
                target="_blank">
                <span class="btn-inner--text">
                  {{ button.text }}
                </span>
              </base-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { Tooltip } from 'element-ui'

export default {
  name: 'LinksComp',
  components: {
    [Tooltip.name]: Tooltip,
  },
  data() {
    return {
      text: "You liked having own",
      colored_text: "Currencies Showroom?",
      content: "You may visit this link & follow the instructions to build your own",
      note: "(You don't need to be a coder to do it)",
      buttons: [{ text: "Have It Now", color: "default", link: "https://github.com/makkahwi/currencies-showroom", target: "_blank" }]
    }
  }
};
</script>
