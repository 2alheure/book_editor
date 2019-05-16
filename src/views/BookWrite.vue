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
</style>

<style>
#app {
  padding-bottom: 70px;
}
</style>

<template>
  <div>
    <BackButton/>

    <h1>{{meta.title}}</h1>

    <template v-if="!isError">
      <Content :content="content" :title="null" :position="position"/>
      <nav>
        <a
          @click="deleteHandler()"
          class="button big"
          style="background-color: var(--color-ternaire)"
        >Supprimer</a>
        <router-link
          :to="'/add-bloc?book_id='+$route.params.id+'&position='+position"
          class="button big"
        >Ajouter un élément</router-link>
      </nav>
    </template>

    <ErrorMessage v-else-if="(errorMessage != null)" :msg="errorMessage"/>
    <p v-else>Nous ne parvenons pas à communiquer avec le serveur. Veuillez vérifier votre connexion internet et réessayer ultérieurement.</p>
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import EditButton from "@/components/writing/EditButton.vue";
import Content from "@/components/writing/Content.vue";

export default {
  name: "bookWrite",
  components: {
    BackButton,
    EditButton,
    Content
  },
  data: function() {
    return {
      position: this.$route.query.position,
      meta: [],
      content: [],
      isError: true,
      errorMessage: null
    };
  },
  mounted() {
    this.$axios
      .get("bookContent?book_id="+this.$route.params.id+"&position="+this.position)
      .then(response => response.data)
      .then(response => {
        if (response.status) {
          this.meta = response.meta;
          this.content = response.content;
          this.isError = false;
        } else {
          this.errorMessage = response.error;
        }
      });
  },
  methods: {
    deleteHandler() {
      if (confirm("Êtes-vous sûr(e) de vouloir supprimer l'ensemble des composants affichés et leurs enfants ?")) {
        this.$axios
          .get("deleteBloc?book_id="+this.$route.params.id+"&position="+this.position)
          .then(res => res.data)
          .then(response => {
            if (response.status) {
              window.location.href = '/book-write/2?position=root';
            } else {
              this.isError = true;
              this.errorMessage = response.error;
            }
          });
      }
    }
  }
};
</script>
