import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './views/Index.vue';
import Main from './views/Main.vue';
import Inquiry from './views/Inquiry.vue';
import List from './views/List.vue';
import Regist from './views/Regist.vue';

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
    {
      path: '/inquiry',
      component: Inquiry,
    },
    {
      path: '/list',
      component: List,
    },
    {
      path: '/regist',
      component: Regist,
    },
  ],
});
