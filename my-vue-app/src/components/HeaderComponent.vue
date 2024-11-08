<template>
  <header class="header">
    <nav class="navbar">
      <ul class="nav-links">
        <li><router-link to="/">Inici</router-link></li>
        <li><router-link to="/calculator">Calculadora</router-link></li>
        <li><router-link to="/fetch">Fetch API</router-link></li>
        <li><router-link to="/axios">Axios API</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
};
</script>

<style scoped>
.header {
  background-color: #2d3a56;
  padding: 10px 20px;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  font-size: 18px;
}

.nav-links a {
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-links a:hover {
  background-color: #007bff;
}
</style>
