import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

// admin view
import AdminView from '../views/AdminView.vue';
import AdminDashboard from '../components/AdminComponent/AdminDashboard.vue';
import AdminCreateEvent from '../components/AdminComponent/AdminCreateEvent.vue';
// auth view
import AuthView from '../views/AuthView.vue';
import Login from '../components/AuthComponent/Login.vue';
import Register from '../components/AuthComponent/Register.vue';
// club View
import ClubView from '../views/ClubView.vue';
import ClubDashboard from '../components/ClubComponent/ClubDashboard.vue';
import ClubPlayers from '../components/ClubComponent/ClubPlayers.vue';
import ClubEvents from '../components/ClubComponent/ClubEvents.vue';
import EventDetailClub from '../components/ClubComponent/EventDetailClub.vue';
// players
import PlayerView from '../views/PlayerView.vue';
import PlayerDashboard from '../components/PlayersComponent/PlayerDashboard.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  // admin components
  {
    path: '/admin',
    // name: 'adminView',
    component: AdminView,
    children: [
      {
        path: '/',
        components: {
          main: AdminDashboard,
        },
      },
      {
        path: 'create-event',
        components: {
          main: AdminCreateEvent,
        },
      },
    ],
  },
  // auth component
  {
    path: '/auth',
    component: AuthView,
    children: [
      {
        path: 'login',
        components: {
          main: Login,
        },
      },
      {
        path: 'register',
        components: {
          main: Register,
        },
      },
    ],
  },
  // clubs components
  {
    path: '/club',
    component: ClubView,
    children: [
      {
        path: '/',
        components: {
          main: ClubDashboard,
        },
      },
      {
        path: 'club-player',
        components: {
          main: ClubPlayers,
        },
      },
      {
        path: 'club-events',
        components: {
          main: ClubEvents,
        },
      },
      {
        path: 'club-events/:id',
        components: {
          main: EventDetailClub,
        },
      },
    ],
  },
  // players dashboard
  {
    path: '/player',
    component: PlayerView,
    children: [
      {
        path: '/',
        components: {
          main: PlayerDashboard,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
