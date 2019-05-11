<style scoped>
  .metadata {
    display: grid;
    grid-template: repeat(1fr, 5);
  }

  .metadata img {
    grid-column: 1 / span 2;
    max-width: 100%;
  }

  .metadata .else {
    grid-column: 3 / span 3;
  }

  input, textarea {
    width: 100%;
  }

  .button > i {
    margin: 0;
    margin-right: 10px;
  }
</style>

<template>
  <div>
    <BackButton/>

    <h1>Modifier un livre</h1>

    <template v-if="!isError">
      <h2>Métadonnées</h2>
      
      <p class="metadata">
        <img :src="image" :alt="title">
        <span class="else">
          <input type="text" name="title" id="title" v-model="title" placeholder="Titre">
          <input type="text" name="subtitle" id="subtitle" v-model="subtitle" placeholder="Sous-titre">
          <textarea name="desc" id="desc" v-model="desc" rows="4" placeholder="Description"></textarea>
        </span>
      </p>

      <a href="#" class="button" @click="bookUpdate">Sauvegarder</a>
      <router-link :to="'/book-write/'+id" class="button" style="background-color: var(--color-secondaire)"><i class="fas fa-feather"></i>Écrire</router-link>
    </template>
    <ErrorMessage v-else-if="(errorMessage != null)" :msg="errorMessage"/>
    <p v-else>Nous ne parvenons pas à récupérer les informations sur cet ouvrage. Veuillez vérifier votre connexion internet et réessayer ultérieurement.</p>

    <TabBar :isActive="3"/>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import BackButton from "@/components/BackButton.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

export default {
  name: "bookEdit",
  components: {
    BackButton,
    ErrorMessage,
    TabBar
  },
  data: function() {
    return {
      id: 0,
      title: "",
      subtitle: "",
      image: "",
      desc: "",
      isError: true,
      errorMessage: null
    };
  },
  mounted() {
    axios
      .get("http://localhost/book_editor_php_api/bookEdit?book_id=" + this.$route.params.id)
      .then(response => response.data)
      .then(response => {
        if (response.status) {
          this.id = response.id;
          this.title = response.title;
          this.subtitle = response.subtitle;
          this.image = response.image;
          this.desc = response.description;
          this.isError = false;
        } else {
          this.errorMessage = response.error;
        }
      });
  },
  methods: {
    bookUpdate: function() {
      var params = new URLSearchParams();
      
      params.append("id", this.id);

      if (!this.title) this.title = '';
      params.append("title", this.title);

      if (!this.subtitle) this.subtitle = '';
      params.append("subtitle", this.subtitle);

      if (!this.image) this.image = '';
      params.append("image", this.image);

      if (!this.desc) this.desc = '';
      params.append("description", this.desc);


      this.$axios
        .post("http://localhost/book_editor_php_api/bookEdit", params)
        .then(response => response.data)
        .then(response => {
          if (response.status) {
            this.id = response.id;
            this.title = response.title;
            this.subtitle = response.subtitle;
            this.image = response.image;
            this.desc = response.description;
          } else {
            this.errorMessage = response.error;
          }
        });
    }
  }
};
</script>
