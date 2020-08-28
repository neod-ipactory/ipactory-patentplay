import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './pages/Index.vue';
import Main from './pages/Main.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/main',
      component: Main,
    },
  ],
});
