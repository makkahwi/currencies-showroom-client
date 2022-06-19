import NotFound from '@/views/GeneralViews/NotFoundPage.vue';
import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard/');
const NewCurrency = () => import(/* webpackChunkName: "dashboard" */ '@/views/Currencies/NewCurrency.vue');
const Currencies = () => import(/* webpackChunkName: "dashboard" */ '@/views/Currencies/');
const Charts = () => import(/* webpackChunkName: "dashboard" */ '@/views/Charts.vue');
const Notifications = () => import(/* webpackChunkName: "components" */ '@/views/Components/Notifications.vue');
const User = () => import(/* webpackChunkName: "pages" */ '@/views/Pages/UserProfile.vue');
const Showroom = () => import(/* webpackChunkName: "pages" */ '@/views/Pages/Showroom');
const Login = () => import(/* webpackChunkName: "pages" */ '@/views/Pages/Login.vue');
const Home = () => import(/* webpackChunkName: "pages" */ '@/views/Pages/Landing');

const componentsMenu = {
  path: '/components',
  component: DashboardLayout,
  redirect: '/components/buttons',
  name: 'Components',
  children: [
    {
      path: 'notifications',
      name: 'Notifications',
      component: Notifications
    }
  ]
};

const profile = {
  path: '/',
  component: DashboardLayout,
  name: 'Pages',
  redirect: '/user',
  children: [
    {
      path: 'user',
      name: 'User Page',
      component: User
    }
  ]
};

const authPages = {
  path: '/',
  component: AuthLayout,
  name: 'Authentication',
  children: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        noBodyBackground: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/showroom',
      name: 'Showroom',
      component: Showroom
    },
    { path: '*', component: NotFound }
  ]
};

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Home'
  },
  componentsMenu,
  profile,
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    name: 'Dashboard layout',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'newcurrency',
        name: 'NewCurrency',
        component: NewCurrency
      },
      {
        path: 'currencies',
        name: 'Currencies',
        component: Currencies
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      },
    ]
  },
  authPages,
];

export default routes;
