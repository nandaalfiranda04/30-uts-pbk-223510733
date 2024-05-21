<template>
    <div v-if="view === 'post'">
      <div class="profile">
        <h1>POST</h1>
        <div>
          <label for="users">Pilih Pengguna:</label>
          <select id="users" v-model="selectedUserId" @change="loadUserPosts">
            <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
          </select>
        </div>
        <div class="user-posts">
          <div v-if="loading">Loading...</div>
          <div v-else>
            <div v-for="post in filteredPosts" :key="post.id">
              <h2>{{ post.title }}</h2>
              <p>{{ post.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref, watch } from 'vue';
  
  const props = defineProps(['view']);
  
  const users = ref([]);
  const selectedUserId = ref(null);
  const posts = ref([]);
  const loading = ref(false);
  const filteredPosts = ref([]);
  
  function fetchPosts() {
    loading.value = true;
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()),
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    ])
    .then(([postsData, usersData]) => {
      posts.value = postsData;
      users.value = usersData;
      loading.value = false;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      loading.value = false;
    });
  }
  
  function loadUserPosts() {
    if (!selectedUserId.value) return;
    filteredPosts.value = posts.value.filter(post => post.userId === selectedUserId.value);
  }
  
  watch(() => selectedUserId, () => {
    if (selectedUserId.value) {
      loadUserPosts();
    } else {
      filteredPosts.value = [];
    }
  });
  
  fetchPosts(); // Fetch data when component mounts
  </script>
  