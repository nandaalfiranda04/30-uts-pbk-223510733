<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
          <div class="container-fluid">
            <RouterLink class="navbar-brand d-flex align-items-center" to="/post" active-class="active-link">
              <i class="bi bi-house-door-fill me-2"></i> <span>POST</span>
            </RouterLink>
            <RouterLink class="navbar-brand d-flex align-items-center" to="/todos" active-class="active-link">
              <i class="bi bi-pencil-square me-2"></i> <span>TODOS</span>
            </RouterLink>
            <RouterLink class="navbar-brand d-flex align-items-center" to="/foto" active-class="active-link">
              <i class="bi bi-card-checklist me-2"></i> <span>Album Foto</span>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" href="https://www.instagram.com/nanda_alfiranda/?hl=en" target="_blank">NANDA ALFIRANDA</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.navbar {
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  color: #fff !important;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  transition: color 0.3s ease-in-out;
}

.navbar-brand:hover {
  color: #ffd700 !important;
}

.navbar-toggler-icon {
  filter: invert(1);
}

.nav-link {
  color: #fff !important;
  font-family: 'Roboto', sans-serif;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: #ffd700 !important;
}

.active-link {
  color: #ffd700 !important;
}

.wrapper {
  padding: 15px 0;
}

.container {
  margin-top: 5rem; /* Ensure content doesn't hide behind the navbar */
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
</style>
