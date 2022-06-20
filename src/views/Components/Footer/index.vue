<template>
  <footer class="pt-5 pb-3 bg-secondary">
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

        <b-col xl="6" class="col-xl-6">
          <b-nav class="nav-footer justify-content-center justify-content-xl-end">
            <b-nav-item to="/">
              Home
            </b-nav-item>

            <b-nav-item href="https://currencies.showroom" target="_blank">
              About
            </b-nav-item>

            <b-nav-item to="/showroom">
              Showroom
            </b-nav-item>

            <b-nav-item to="/dashboard">
              Dashboard
            </b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
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
