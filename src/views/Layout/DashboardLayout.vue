<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <sidebar-item :link="{
          name: 'Dashboard',
          icon: 'ni ni-shop text-info',
          path: '/dashboard'
        }" />

        <sidebar-item :link="{
          name: 'Currencies',
          icon: 'ni ni-archive-2 text-default',
        }">
          <sidebar-item :link="{ name: 'New Currency', path: '/newcurrency' }"></sidebar-item>
          <sidebar-item :link="{ name: 'Currencies', path: '/currencies' }"></sidebar-item>
        </sidebar-item>
      </template>
    </side-bar>

    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from './DashboardNavbar.vue';
import Footer from '../Components/Footer';
import { FadeTransition } from 'vue2-transitions';

export default {
  components: {
    DashboardNavbar,
    Footer,
    FadeTransition
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith('Win');
      if (isWindows) {
        initScrollbar('sidenav');
      }
    }
  },
  mounted() {
    this.initScrollbar()
  }
};
</script>

<style lang="scss">
</style>
