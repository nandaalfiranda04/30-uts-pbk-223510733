<template>
  <div class="container mt-3">
      <div class="card">
          <div class="text-center mt-2">
              <h2>
                  DAFTAR KEGIATAN
              </h2>
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
                      <tr v-for="(activity, index) in activities" :key="index">
                          <td>{{ index + 1 }}</td>
                          <td>{{ activity.name }}</td>
                          <td>{{ activity.date }}</td>
                          <td><input type="checkbox" v-model="activity.completed" @change="toggleCompletion(activity)">{{ activity.status }}</td>
                          <td>
                              <button type="button" class="btn btn-primary" @click="editActivity(activity)">Edit</button>
                              <button type="button" class="btn btn-danger" @click="removeActivity(index)">Delete</button>
                          </td>
                      </tr>
                      <tr v-if="activities.length === 0">
                          <td colspan="5">No activities</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Kegiatan',
  data() {
      return {
          activities: [],
          newActivity: {
              name: '',
              date: '',
              status: 'Planned',
              completed: false
          },
          isEditing: false,
          editIndex: null,
          filter: ''
      };
  },


  mounted() {
      this.getActivities();
  },
  methods: {
      getActivities() {
          // Panggil API atau lakukan pengisian dari sumber lainnya
          // Misalnya, saya menggantinya dengan data palsu untuk simulasi
          this.activities = [
              { name: 'Meeting', date: '2024-04-26', status: 'Belum Selesai' },
              { name: 'Presentation', date: '2024-04-27', status: 'Belum Selesai' },
              { name: 'Zoom', date: '2024-04-28', status: 'Belum Selesai' }
          ];
      },
      filteredActivities() {
  if (this.filter === '') {
      return this.activities; // Jika filter kosong, kembalikan semua aktivitas
  } else if (this.filter === 'Selesai') {
      return this.activities.filter(activity => activity.status === 'Selesai');
  } else if (this.filter === 'Belum') {
      return this.activities.filter(activity => activity.status === 'Belum Selesai'); // Ubah kondisi di sini
  } else {
      return []; // Kembalikan array kosong jika filter tidak sesuai
  }
},
      addOrUpdateActivity() {
          if (this.isEditing) {
              this.activities[this.editIndex] = { ...this.newActivity };
              this.isEditing = false;
              this.editIndex = null;
          } else {
              if (this.newActivity.name.trim() !== '' && this.newActivity.date.trim() !== '') {
                  this.activities.push({ ...this.newActivity });
              }
          }
          this.clearForm();
      },
      editActivity(activity) {
          this.newActivity = { ...activity };
          this.isEditing = true;
          this.editIndex = this.activities.indexOf(activity);
      },
      removeActivity(index) {
          this.activities.splice(index, 1);
      },
      toggleCompletion(activity) {
          activity.status = activity.completed ? 'Selesai' : 'Belum Selesai';
      },
      clearForm() {
          this.newActivity = {
              name: '',
              date: '',
              status: 'Planned',
              completed: false
          };
      }
  }
};
</script>
