<template>
  <div class="home">
    <h1>Benvingut a la nostra aplicació Vue!</h1>
    <p>Aquesta aplicació inclou una calculadora, una petició amb fetch, i una altra amb axios.</p>
    <div class="links">
      <router-link to="/calculator" class="btn">Vés a la Calculadora</router-link>
      <router-link to="/fetch" class="btn">Veure Dades amb Fetch</router-link>
      <router-link to="/axios" class="btn">Veure Dades amb Axios</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
}

h1 {
  color: #2d3a56;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn {
  background-color: #007bff;
  color: white;
  padding: 12px 30px;
  font-size: 18px;
  border-radius: 5px;
  text-align: center;
  width: 250px;
  margin: 0 auto;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
