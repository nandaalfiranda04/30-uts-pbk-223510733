<template>
  <div>
    <h1>Foto Album</h1>
    <div class="row">
      <div v-for="photo in photos" :key="photo.id" class="col-md-4 mb-4">
        <div class="card" @click="openModal(photo.url, photo.title)">
          <img :src="photo.thumbnailUrl" class="card-img-top" :alt="photo.title">
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <img :src="modalImageUrl" class="modal-img" :alt="modalImageTitle">
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const photos = ref([]);
const isModalOpen = ref(false);
const modalImageUrl = ref('');
const modalImageTitle = ref('');

const fetchPhotos = async () => {
  try {
    const response = await fetch('/poto.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Filter photos by album ID if needed
    photos.value = data.filter(photo => photo.albumId === parseInt(route.params.id));
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
};

const openModal = (url, title) => {
  modalImageUrl.value = url;
  modalImageTitle.value = title;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  modalImageUrl.value = '';
  modalImageTitle.value = '';
};

onMounted(fetchPhotos);
</script>

<style scoped>
.card-img-top {
  height: 150px;
  object-fit: cover;
  cursor: pointer;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  position: relative;
  background-color: transparent;
  margin: auto;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  max-height: 90%;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

.modal-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
}
</style>

ubah posisi dari tampilan ukuran foto yang sebenarnya saat foto di klik posisinya sama 