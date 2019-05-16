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
  <div class="transparent">
    <BackButton/>
    <h1>Modifier un bloc</h1>

    <template v-if="!isError">
        <Content 
            v-if="item.type == 'container'" 
            :title="item.title" 
        />
        <Paragraphe 
            v-if="item.type == 'paragraphe'" 
            :value="item.value" 
        />
        <Picture 
            v-else-if="item.type == 'image'" 
            :src="item.src" 
            :alt="item.alt" 
        />
    </template>
    <p v-else>Nous ne parvenons pas à récupérer les informations du serveur. Veuillez vérifier votre connexion internet et réessayer ultérieurement.</p>
    <ErrorMessage v-if="(errorMessage != null)" :msg="errorMessage"/>

    <nav>
        <a @click="deleteBlock()" class="button big" style="background-color: var(--color-ternaire)">Supprimer</a>
        <a @click="updateBlock()" class="button big">Sauvegarder</a>
    </nav>
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import Content from "@/components/edit/Content.vue";
import Paragraphe from "@/components/edit/Paragraphe.vue";
import Picture from "@/components/edit/Picture.vue";

export default {
  name: "blocEdit",
  components: {
    BackButton,
    Content,
    Paragraphe,
    Picture,
  },
  data: function() {
    return {
      position: this.$route.query.position,
      item: Object,
      isError: true,
      errorMessage: null
    };
  },
  mounted() {
    this.$axios
      .get('bookContent?book_id='+this.$route.params.id+'&position='+this.position)
      .then(response => response.data)
      .then(response => {
        if (response.status) {
          this.item = response.content[0];
          this.isError = false;
        } else {
          this.errorMessage = response.error
        }
      });
  },
  methods: {
    updateBloc() {
        return;
    },
    deleteHandler() {
      var msg = this.item.type=='container'?
        "Êtes-vous sûr(e) de vouloir supprimer ce composant et l'ensemble de ses enfants ?" :
        "Êtes-vous sûr(e) de vouloir supprimer ce composant ?"
      ;

      if (confirm(msg)) {
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
