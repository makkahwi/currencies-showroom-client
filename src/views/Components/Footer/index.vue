<template>
  <footer class="py-5 bg-secondary" id="footer-main">
    <b-container>
      <b-row align-v="center" class="justify-content-xl-between">
        <b-col xl="6">
          <div class="copyright text-center text-xl-left text-muted">
            All rights Reserved © {{ year }}
            <a href="https://Suhaib.dev" class="font-weight-bold ml-1 text-info" target="_blank">
              Suhaib Ahmad
            </a>
          </div>
        </b-col>

        <!-- <b-col xl="6" class="col-xl-6">
            <b-nav class="nav-footer justify-content-center justify-content-xl-end">
              <b-nav-item href="https://www.creative-tim.com" target="_blank">
                Creative Tim
              </b-nav-item>

              <b-nav-item href="https://www.creative-tim.com/presentation" target="_blank">
                About Us
              </b-nav-item>

              <b-nav-item href="http://blog.creative-tim.com" target="_blank">
                Blog
              </b-nav-item>

              <b-nav-item href="https://www.creative-tim.com/license" target="_blank">
                License
              </b-nav-item>
            </b-nav>
          </b-col> -->
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'black'
    }
  },
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
