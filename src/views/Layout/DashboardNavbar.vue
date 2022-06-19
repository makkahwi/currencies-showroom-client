<template>
  <BaseNav container-classes="container-fluid" class="navbar-top border-bottom navbar-expand"
    :class="{ 'bg-default navbar-dark': type === 'default' }">
    <b-navbar-nav class=" align-items-center ml-md-auto">
      <li class="nav-item d-xl-none">
        <div class="pr-3 sidenav-toggler"
          :class="{ active: $sidebar.showSidebar, 'sidenav-toggler-dark': type === 'default', 'sidenav-toggler-light': type === 'light' }"
          @click="toggleSidebar">
          <div class="sidenav-toggler-inner">
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
          </div>
        </div>
      </li>

      <li class="nav-item d-sm-none">
        <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
          <i class="ni ni-zoom-split-in"></i>
        </a>
      </li>
    </b-navbar-nav>

    <b-navbar-nav class="align-items-center ml-auto ml-md-0">
      <base-dropdown menu-on-right class="nav-item" tag="li" title-tag="a" title-classes="nav-link pr-0">
        <a class="nav-link pr-0" @click.prevent slot="title-container">
          <b-media-body class="ml-2 d-none d-lg-block">
            <span class="mb-0 text-sm  font-weight-bold">John Snow</span>
          </b-media-body>
        </a>

        <template>
          <b-dropdown-header class="noti-title">
            <h6 class="text-overflow m-0">Welcome!</h6>
          </b-dropdown-header>

          <b-dropdown-item to="/user">
            <i class="ni ni-single-02"></i>
            <span>My profile</span>
          </b-dropdown-item>

          <b-dropdown-item href="#!">
            <i class="ni ni-support-16"></i>
            <span>Support</span>
          </b-dropdown-item>

          <div class="dropdown-divider"></div>

          <b-dropdown-item href="#!">
            <i class="ni ni-user-run"></i>
            <span>Logout</span>
          </b-dropdown-item>
        </template>
      </base-dropdown>
    </b-navbar-nav>
  </BaseNav>
</template>

<script>
import { BaseNav } from '@/components';

export default {
  components: {
    BaseNav
  },
  props: {
    type: {
      type: String,
      default: 'default', // default|light
      description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
    }
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ''
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    }
  }
};
</script>
