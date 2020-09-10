import Vue from 'vue';
import App from './App.vue';
import { router } from './routes';
import { store } from './store';
import VCalendar from 'v-calendar';
import VueGoogleCharts from 'vue-google-charts';

Vue.use(VCalendar, {
  componentPrefix: 'vc',
});
Vue.use(VueGoogleCharts);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
