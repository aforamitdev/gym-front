import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from "../store/index";
import Home from '../views/Home.vue';
/* eslint-disable */
// admin view
import AdminView from '../views/AdminView.vue';
import AdminDashboard from '../components/AdminComponent/AdminDashboard.vue';
import AdminCreateEvent from '../components/AdminComponent/AdminCreateEvent.vue';
import AdminManageEvents from '../components/AdminComponent/AdminManageEvents.vue';
import AdminClubManagement from '../components/AdminComponent/AdminClubManagement.vue';
import AdminStudents from '../components/AdminComponent/AdminStudents.vue';
import AdminClub from '../components/AdminComponent/clubs/Club.vue';
import LiveEvent from "../components/AdminComponent/event/LiveEvent.vue";
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
// sheets
import SheetsForms from "../components/SheetsComponents/SheetsForms.vue";

import store from "../store/index";
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
    meta: { requiresAuth: 'admin' },

    component: AdminView,
    children: [
      {
        path: '/',
        meta: { requiresAuth: 'admin' },
        name: 'admin',
        components: {
          main: AdminDashboard,
        },
      },
      {
        path: 'create-event',
        meta: { requiresAuth: 'admin' },

        components: {
          main: AdminCreateEvent,
        },
      },
      {
        path: 'manage-event',
        meta: { requiresAuth: 'admin' },

        components: {
          main: AdminManageEvents,
        },
      },
      {
        path: 'admin-club',
        meta: { requiresAuth: 'admin' },

        components: {
          main: AdminClubManagement,
        },
      },
      {
        path: "admin-club/:id",
        meta: { requiresAuth: 'admin' },
        components: {
          main: AdminClub
        }
      },
      {
        path: "/admin/event/:id",
        components: { main: LiveEvent }
      },
      {
        path: 'admin-students',
        meta: { requiresAuth: 'admin' },

        components: {
          main: AdminStudents,
        },
      },
      {
        path: "admin-sheets",
        meta: { requireAuth: "admin" },
        components: {
          main: SheetsForms
        }
      }
    ],
  },
  // auth component
  {
    path: '/auth',
    component: AuthView,

    children: [
      {
        path: 'login',
        name: "login",
        components: {
          main: Login,
        },
      },
      {
        path: 'register',
        name: "register",
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
    meta: { requiresAuth: 'clubadmin' },

    children: [
      {
        path: '/',
        name: 'clubadmin',
        meta: { requiresAuth: 'clubadmin' },

        components: {
          main: ClubDashboard,
        },
      },
      {
        path: 'club-player',
        meta: { requiresAuth: 'clubadmin' },

        components: {
          main: ClubPlayers,
        },
      },
      {
        path: 'club-events',
        meta: { requiresAuth: 'clubadmin' },

        components: {
          main: ClubEvents,
        },
      },
      {
        path: 'club-events/:id',
        meta: { requiresAuth: 'clubadmin' },

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

router.beforeEach(async (to, from, next) => {
  console.log(to, from);
  if (to.name === "register" || to.name === "login") {
    console.log("RAN RAN RAN");
    const user = await JSON.parse(localStorage.getItem("user"));
    if (user) {
      next(`/${user.userType}`);

    }
    next();
    // console.log(user)
  } else {
    console.log("else not in loop");
    next();
  }

  // const { requiresAuth } = to.meta;
  // console.log(requiresAuth);
  // console.log(localStorage.getItem("token") && requiresAuth);
  // if (requiresAuth) {
  //   if (
  //     to.matched.some(
  //       (record) => record.meta.requiresAuth === localStorage.getItem("role")
  //     )
  //   ) {
  //     console.log(to.matched);
  //     next();
  //   } else {
  //     next({ path: "/auth/login" });
  //   }
  // }

  // if (to.matched.some(record => record.meta.requiresAuth)) {

  //   console.log(to.matched.some(record => record.meta.requiresAuth))
  //   if (localStorage.getItem('token') == null) {
  //     next({
  //       path: '/auth/login',
  //       // params: { nextUrl: to.fullPath }
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (localStorage.getItem('token') != null) {
  //     next({
  //       path: '/',
  //       // params:  nextUrl: '/' }
  //     })
  //   } else {
  //     next()
  //   }
  // }



  //   // if (!localStorage.getItem("token") && requiresAuth) {
  //   //   next({ path: "/login" });
  //   // } else {
  //   //   next();
  //   // }
  //   // next({name:<router-name>})
  next();
});
export default router;
