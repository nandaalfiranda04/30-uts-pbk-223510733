<template>
  <div class="container mt-3">
    <div class="card">
      <div class="text-center mt-2">
        <h2>DAFTAR KEGIATAN</h2>
      </div>
      <div class="card-body">
        <div class="mt-2">
          <input type="text" v-model="newActivity.name" placeholder="Nama Kegiatan">
          <input type="date" v-model="newActivity.date" placeholder="Tanggal">
          <button @click="addOrUpdateActivity">{{ isEditing ? 'Update' : 'Tambah' }}</button>
          <button @click="showCompleted = !showCompleted">{{ showCompleted ? 'Sembunyikan Selesai' : 'Tampilkan Selesai' }}</button>
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
              <td colspan="5">Tidak ada kegiatan yang belum selesai</td>
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
      showCompleted: false
    };
  },
  mounted() {
    this.getActivities();
  },
  computed: {
    filteredActivities() {
      if (this.showCompleted) {
        return this.activities;
      } else {
        return this.activities.filter(activity => activity.status === 'Belum Selesai');
      }
    }
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

<style>
.btn:hover {
  background-color: #0056b3;
}

.toggle-btn {
  padding: 8px 16px;
  background-color: #ffc107;
  color: #212529;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-btn:hover {
  background-color: #ffca2c;
}
</style>
