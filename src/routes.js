import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './pages/Index.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
    },
  ],
});