import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../components/post.vue';

const routes = [
  {
    path: '/post',
    component: AboutView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
