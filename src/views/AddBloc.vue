<style scoped>
nav {
  position: fixed;
  z-index: 10;
  bottom: -1px;
  left: 0;
  width: 100%;
  margin: auto;
  padding: 0;
  text-align: center;
  background-color: #fff;
  border-top: 1px solid #aaa;
  box-shadow: 0 -4px 4px #ddd;
}

select {
  margin: 10px 0 20px 0;
  width: 100%;
}
</style>

<style>
#app {
  padding-bottom: 70px;
}
</style>

<template>
  <div>
    <BackButton/>
    <h1>Ajouter un bloc</h1>

    <template v-if="!isError">
      <label for="type">Quel type d'élément souhaitez-vous ajouter ?</label>
      <select id="type" v-model="item.type">
        <option value="container" id="container">Section</option>
        <option value="paragraphe" id="paragraphe">Paragraphe</option>
        <option value="image" id="image">Image</option>
      </select>
      <Content v-if="item.type == 'container'" :title="item.title"/>
      <Paragraphe v-if="item.type == 'paragraphe'" :value="item.value"/>
      <Picture v-else-if="item.type == 'image'" :src="null" :alt="item.alt"/>
    </template>
    <p v-else>Une erreur inattendue est survenue. Veuillez réessayer ultérieurement.</p>
    <ErrorMessage v-if="(errorMessage != null)" :msg="errorMessage"/>

    <nav>
      <a
        :href="'/book-write/' + this.$route.params.id + '?position=' + this.$route.query.position"
        class="button big"
        style="background-color: var(--color-ternaire)"
      >Annuler</a>
      <a @click="createHandler()" class="button big">Valider</a>
    </nav>
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import Content from "@/components/edit/Content.vue";
import Paragraphe from "@/components/edit/Paragraphe.vue";
import Picture from "@/components/edit/Picture.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

export default {
  name: "addBloc",
  components: {
    BackButton,
    Content,
    Paragraphe,
    Picture,
    ErrorMessage
  },
  data: function() {
    return {
      item: {
        type: "container"
      },
      isError: false,
      errorMessage: null
    };
  },
  methods: {
    createHandler() {
      switch (this.item.type) {
        case "container":
		  if (!this.item.title) return;
          if (!this.item.content) this.item.content = [];		  
          break;
        case "paragraphe":
          if (!this.item.value) return;
          break;
        case "image":
          if (!this.item.src) return;
          if (!this.item.alt) this.item.alt = "";
          if (!this.item.title) this.item.title = "";
          break;
      }

      var params = new URLSearchParams();
      params.append("content", JSON.stringify(this.item));

      this.$axios
        .post("updateBloc?book_id=" + this.$route.params.id + "&position=" + this.$route.query.position + "/new", params)
        .then(res => res.data)
        .then(res => {
          if (res.status) {
            window.location.href = "/book-write/" + this.$route.params.id + "?position=" + this.$route.query.position;
          } else {
            this.error = true;
            this.errorMessage = res.error;
          }
        })
        .catch(err => {
          this.errorMessage = "Le serveur de données semble inaccessible. Veuillez vérifier votre connexion et réessayer ultérieurement.";
        });
    }
  }
};
</script>
