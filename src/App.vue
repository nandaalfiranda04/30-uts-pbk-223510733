<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>


<template>
  <header>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/"><i class="bi bi-list-task"></i>UAS PBK VueJS + ViteJS</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <RouterLink class="nav-link active" to="/kegiatan">NANDA ALFIRANDA</RouterLink>
      </ul>
    </div>
  </div>
</nav>

  </div>
  </header>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

header {
  height: 100%;
}

.wrapper {
  height: 100%;
}

.navbar {
  height: 100%;
}

.container-fluid {
  max-width: none; /* Hapus batasan lebar */
}
</style>

