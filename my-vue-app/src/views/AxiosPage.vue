<template>
  <div class="axios">
    <h2>Usuarios de la API amb Axios</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <strong>{{ user.firstName }} {{ user.lastName }}</strong> - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AxiosPage',
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        this.users = response.data.users;
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    }
  }
};
</script>

<style scoped>
.axios {
  text-align: center;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

strong {
  color: #007bff;
}
</style>
