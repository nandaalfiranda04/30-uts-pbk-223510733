<template>
  <div class="album-list container my-5">
    <h1 class="text-center mb-4">Daftar Album</h1>
    <div class="row">
      <div v-for="album in albums" :key="album.id" class="col-md-6 mb-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ album.id }}</h5>
            <RouterLink :to="`/album/${album.id}`" class="btn btn-primary">View Album</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const albums = ref([]);

const fetchAlbums = async () => {
  try {
    const albumsResponse = await axios.get('https://jsonplaceholder.typicode.com/albums');
    albums.value = albumsResponse.data;
  } catch (error) {
    console.error('Error fetching albums:', error);
  }
};

onMounted(fetchAlbums);
</script>

<style scoped>
.album-list {
  max-width: 1200px;
  margin: auto;
  padding: 0 15px;
}

.card {
  background-color: #96c9fd;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-body {
  padding: 1.5rem;
  text-align: center;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
