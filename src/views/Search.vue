<style scoped>
  p {
    text-align: center;
  }
  
  input {
    width: 80%;
  }
</style>

<template>
  <div>
    <BackButton />

    <h1>Rechercher</h1>

    <p class="transparent">
      <input type="text" name="generic" id="generic" v-model="generic" placeholder="Rechercher" autofocus>
    </p>

    <p class="transparent">
      <input type="text" name="title" id="title" v-model="title" placeholder="Titre">
      <input type="text" name="subtitle" id="subtitle" v-model="subtitle" placeholder="Sous-titre">
      <input type="text" name="author" id="author" v-model="author" placeholder="Auteur">
    </p>

    <a href="#" class="button big" @click="search">Rechercher</a>
    
    <BookContainer :books="books" />

    <TabBar :isActive="2" />
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue'
import BookContainer from '@/components/BookContainer.vue'
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'search',
  components: {
    BackButton,
    BookContainer,
    TabBar
  },
  data: function () {
    return  {
      generic: this.$route.query.generic,
      title: this.$route.query.title,
      subtitle: this.$route.query.subtitle,
      author: this.$route.query.author,
      books: null,
      isError: false,
      errorMessage: null
    }
  },
  methods: {
    search: function() {
      var params = new URLSearchParams();

      params.append("generic", this.generic);
      if (!this.generic) this.generic = '';

      if (!this.title) this.title = '';
      params.append("title", this.title);

      if (!this.subtitle) this.subtitle = '';
      params.append("subtitle", this.subtitle);

      if (!this.author) this.author = '';
      params.append("author", this.author);

      this.$axios
        .post("search", params)
        .then(response => response.data)
        .then(response => {
          if (response.status) {
            this.books = response.books;
          } else {
            this.errorMessage = response.error;
          }
        });
    }
  },
  mounted() {
    if (this.generic || this.author || this.title || this.subtitle) this.search();
  }
}
</script>
