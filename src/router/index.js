import { createRouter, createWebHistory } from 'vue-router'
import Foto from '../components/Album.vue'
import AlbumView from '../components/PhotoAlbum.vue'
import HomeView from '../components/Post.vue'
import Todos from '../components/Todos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/post',
      name: 'post',
      component: HomeView
    },
    {
      path: '/',
      redirect: '/todos' // Pengalihan rute default ke /todos
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos
    },
    {
      path: '/album/:id',
      name: 'album',
      component: AlbumView,
    },
    {
      path: '/foto',
      name: 'foto',
      component: Foto
    }
  ]
})

export default router
