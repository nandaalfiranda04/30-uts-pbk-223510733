<template>
    <div>
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
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  
  const props = defineProps(['view']);
  
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
  </script>
  
  <style scoped>
  .text-center h2 {
    font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif;
  }
  </style>
  