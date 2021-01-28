import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';
import Vuemoment from 'vue-moment';
import "./styles/tailwind.css";
import VCalendar from 'v-calendar';
Vue.use(VCalendar);
Vue.use(Vuelidate);
Vue.use(Vuemoment);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
