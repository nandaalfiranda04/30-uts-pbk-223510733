<template>
  <div>
    <header>
      <div class="wrapper">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <ul class="navbar-nav mr-auto">
            <!-- Navigasi untuk Post -->
            <li class="nav-item" @click="changeView('post')">
              <a class="nav-link" :class="{ 'active': view === 'post' }">Post</a>
            </li>
            <!-- Navigasi untuk Todos -->
            <li class="nav-item" @click="changeView('todos')">
              <a class="nav-link" :class="{ 'active': view === 'todos' }">Todos</a>
            </li>
          </ul>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <!-- Navigasi untuk Kegiatan -->
              <li class="nav-item" @click="changeView('kegiatan')">
                <a class="nav-link" :class="{ 'active': view === 'kegiatan' }">NANDA ALFIRANDA</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <div class="container mt-3">
      <Post v-if="view === 'post'" :view="view"/>
      <Todos v-if="view === 'todos'" :view="view"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Post from './components/Post.vue';
import Todos from './components/Todos.vue';

const view = ref('post');

function changeView(selectedView) {
  view.value = selectedView;
}
</script>

<style scoped>
.active {
  font-weight: bold;
}
</style>

