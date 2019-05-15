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
            :key="level + '-' + item.level + '-' + index"
            :level="level + '-' + item.level + '-' + index" 
            :title="item.title" 
            :content="item.content" 
        />
        <Paragraphe 
            v-if="item.type == 'paragraphe'" 
            :key="level + '-' + item.level + '-' + index"
            :level="level + '-' + item.level + '-' + index" 
            :value="item.value" 
        />
        <Picture 
            v-else-if="item.type == 'image'" 
            :key="level + '-' + item.level + '-' + index"
            :level="level + '-' + item.level + '-' + index" 
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
          this.item = response.content;
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
      deleteBloc() {
          return;
      }
  }
};
</script>
