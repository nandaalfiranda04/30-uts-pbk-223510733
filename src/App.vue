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
      <!-- Konten untuk Kegiatan -->
      <div v-show="view === 'kegiatan'">
        <div class="card">
          <div class="text-center mt-2">
            <h2>DAFTAR KEGIATAN</h2>
          </div>
          <!-- Konten untuk kegiatan -->
        </div>
      </div>

      <!-- Konten untuk Todos -->
      <div v-show="view === 'todos'">
        <div class="card">
          <div class="text-center mt-2">
            <h2>DAFTAR KEGIATAN</h2>
          </div>
          <div class="card-body">
            <label for="filter">Filter:</label>
            <select id="filter" v-model="filter">
              <option value="">Semua</option>
              <option value="Selesai">Selesai</option>
              <option value="Belum">Belum Selesai</option>
            </select>

            <div class="mt-2">
              <input type="text" v-model="newActivity.name" placeholder="Nama Kegiatan">
              <input type="date" v-model="newActivity.date" placeholder="Tanggal">
              <select v-model="newActivity.status">
                <option value="Belum Selesai">Belum Selesai</option>
                <option value="Selesai">Selesai</option>
              </select>
              <button @click="addOrUpdateActivity">{{ isEditing ? 'Update' : 'Tambah' }}</button>
            </div>
            <table class="table table-bordered mt-3">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Kegiatan</th>
                  <th>Tanggal</th>
                  <th>Status</th>
                  <th>Tindakan</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(activity, index) in filteredActivities" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ activity.name }}</td>
                  <td>{{ activity.date }}</td>
                  <td><input type="checkbox" v-model="activity.completed" @change="toggleCompletion(activity)">{{ activity.status }}</td>
                  <td>
                    <button type="button" class="btn btn-primary" @click="editActivity(activity)">Edit</button>
                    <button type="button" class="btn btn-danger" @click="removeActivity(index)">Delete</button>
                  </td>
                </tr>
                <tr v-if="filteredActivities.length === 0">
                  <td colspan="5">No activities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Konten untuk Post -->
      <div v-show="view === 'post'">
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
              <div v-for="post in userPosts" :key="post.id">
                <h2>{{ post.title }}</h2>
                <p>{{ post.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const view = ref('post');
const users = ref([]);
const selectedUserId = ref(null);
const userPosts = ref([]);
const loading = ref(false);
const newActivity = ref({
  name: '',
  date: '',
  status: 'Belum Selesai',
  completed: false
});
const isEditing = ref(false);
const editIndex = ref(null);
const filter = ref('');
const activities = ref([]);

function changeView(selectedView) {
  view.value = selectedView;
}

function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      users.value = data;
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}

function loadUserPosts() {
  if (!selectedUserId.value) return;
  loading.value = true;
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId.value}`)
    .then(response => response.json())
    .then(data => {
      userPosts.value = data;
      loading.value = false;
    })
    .catch(error => {
      console.error('Error fetching user posts:', error);
      loading.value = false;
    });
}

const filteredActivities = computed(() => {
  if (filter.value === '') {
    return activities.value;
  } else if (filter.value === 'Selesai') {
    return activities.value.filter(activity => activity.status === 'Selesai');
  } else if (filter.value === 'Belum') {
    return activities.value.filter(activity => activity.status === 'Belum Selesai');
  } else {
    return [];
  }
});

function addOrUpdateActivity() {
  if (isEditing.value) {
    activities.value[editIndex.value] = { ...newActivity.value };
    isEditing.value = false;
    editIndex.value = null;
  } else {
    if (newActivity.value.name.trim() !== '' && newActivity.value.date.trim() !== '') {
      activities.value.push({ ...newActivity.value });
    }
  }
  clearForm();
}

function editActivity(activity) {
  newActivity.value = { ...activity };
  isEditing.value = true;
  editIndex.value = activities.value.indexOf(activity);
}

function removeActivity(index) {
  activities.value.splice(index, 1);
}

function toggleCompletion(activity) {
  activity.status = activity.completed ? 'Selesai' : 'Belum Selesai';
}

function clearForm() {
  newActivity.value = {
    name: '',
    date: '',
    status: 'Belum Selesai',
    completed: false
  };
}

fetchUsers();
</script>

<style scoped>
.active {
  font-weight: bold;
}

.profile {
  background-color: #00d0ff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile h1 {
  font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif;
  color: #100e0f;
  text-align: center;
}

.user-posts h2 {
  color: #ffffff;
  font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif;
}
</style>
