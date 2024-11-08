<template>
  <div class="fetch">
    <h2>Comentaris de la API amb Fetch</h2>
    <div v-if="comments.length === 0" class="loading">
      <p>Carregant comentaris...</p>
    </div>
    <ul v-else>
      <li v-for="comment in comments" :key="comment.id" class="comment-item">
        <strong>{{ comment.name }}</strong>
        <div class="comment-body">
          <p>{{ comment.body }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FetchPage',
  data() {
    return {
      comments: [],
    };
  },
  created() {
    this.fetchComments();
  },
  methods: {
    async fetchComments() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        this.comments = data.slice(0, 10); // Mostrar solo los primers 10 comentaris
      } catch (error) {
        console.error('Error al obtener los comentarios:', error);
      }
    }
  }
};
</script>

<style scoped>
.fetch {
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

.loading {
  font-size: 18px;
  color: #007bff;
}

.comment-item {
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.comment-item strong {
  display: block;
  color: #007bff;
  font-size: 18px;
  margin-bottom: 5px;
}

.comment-body p {
  color: #555;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
}

/* Asegura que cada frase se muestre por separado */
.comment-body p + p {
  margin-top: 10px; /* Añade espacio entre los párrafos */
}
</style>
