<template>
  <div class="profile">
    <h1>Postingan Pengguna</h1>
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
</template>

<script>
export default {
  data() {
    return {
      users: [],
      selectedUserId: null,
      userPosts: [],
      loading: false
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          this.users = data;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    loadUserPosts() {
      if (!this.selectedUserId) return;
      this.loading = true;
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUserId}`)
        .then(response => response.json())
        .then(data => {
          this.userPosts = data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching user posts:', error);
          this.loading = false;
        });
    }
  }
};
</script>

<style>
.profile {
  background-color: #69e1ff; /* Warna pink */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile h1 {
  font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif; /* Ganti font ke font sans-serif yang lebih modern */
  color: #100e0f; /* Ubah warna teks judul menjadi pink tua */
  text-align: center;
}

.user-posts {
  margin-top: 20px;
}

.user-posts h2 {
  color: #ffffff; /* Ubah warna teks postingan menjadi putih */
  font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif; /* Ganti font ke font sans-serif yang lebih modern */
}
</style>
