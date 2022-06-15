<template>
  <b-navbar-nav class="align-items-lg-center ml-lg-auto">
    <b-nav-item v-for="(social, i ) in socials" :key="i" link-classes="nav-link-icon" :href="social.link"
      target="_blank" data-toggle="tooltip" :data-original-title="social.text">
      <i :class="`fab fa-${social.icon}`"></i>
      <span class="nav-link-inner--text d-lg-none">{{ social.text }}</span>
    </b-nav-item>

    <b-nav-item to="/login" class="nav-link-icon">
      <span class="nav-link-inner--text text-white">Login</span>
    </b-nav-item>
  </b-navbar-nav>
</template>

<script>
export default {
  name: "SocialsNav",
  props: {
    backgroundColor: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {
      socials: [{
        link: "https://suhaib.dev/",
        text: "Website",
        icon: "weebly"
      }, {
        link: "https://github.com/makkahwi",
        text: "Github",
        icon: "github"
      }, {
        link: "https://linkedin.com/in/makkahwi",
        text: "LinkedIn",
        icon: "linkedin"
      }, {
        link: "https://facebook.com/makkahwi",
        text: "Facebook",
        icon: "facebook-square"
      }, {
        link: "https://Instagram.com/makkahwi",
        text: "Instagram",
        icon: "instagram"
      }]
    };
  },
  computed: {
    title() {
      return `${this.$route.name} Page`;
    }
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle('nav-open');
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      document.body.classList.remove('nav-open');
      this.showMenu = false;
    },
    setBackgroundColor() {
      document.body.classList.add('bg-default');
    },
    removeBackgroundColor() {
      document.body.classList.remove('bg-default');
    },
    updateBackground() {
      if (!this.$route.meta.noBodyBackground) {
        this.setBackgroundColor();
      } else {
        this.removeBackgroundColor()
      }
    }
  },
  beforeDestroy() {
    this.removeBackgroundColor();
  },
  beforeRouteUpdate(to, from, next) {
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu();
      setTimeout(() => {
        next();
      }, this.menuTransitionDuration);
    } else {
      next();
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function () {
        this.updateBackground()
      }
    }
  }
};
</script>

<style lang="scss">
$scaleSize: 0.8;

@keyframes zoomIn8 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }

  100% {
    opacity: 1;
  }
}

.main-content .zoomIn {
  animation-name: zoomIn8;
}

@keyframes zoomOut8 {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

.main-content .zoomOut {
  animation-name: zoomOut8;
}
</style>
