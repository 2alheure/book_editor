<style scoped>
  .metadata {
    display: grid;
    grid-template-columns: 40% 60%;
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
          <PictureInput 
            class="transparent"
            accept="image/jpeg,image/png"
            :prefill="image"
            :custom-strings="{
              drag: 'Modifiez l\'image en cliquant ou en déposant une autre image sur celle-ci.',
              tap: 'Cliquez sur l\'image pour la modifier.'
            }"
            :alertOnError="false"
            :plain="true"
            :hideChangeButton="true"
            @change="handleImageChange"
          />
        <span class="else">
          <input type="text" name="title" id="title" v-model="title" placeholder="Titre">
          <input type="text" name="subtitle" id="subtitle" v-model="subtitle" placeholder="Sous-titre">
          <textarea name="desc" id="desc" v-model="desc" rows="4" placeholder="Description"></textarea>
        </span>
      </p>

      <a href="#" class="button" @click="bookUpdate">Sauvegarder</a>
      <router-link v-if="id" :to="'/book-write/'+id+'?position=root'" class="button" style="background-color: var(--color-secondaire)"><i class="fas fa-feather"></i>Écrire</router-link>
    </template>
    <p v-else>Nous ne parvenons pas à récupérer les informations sur cet ouvrage. Veuillez vérifier votre connexion internet et réessayer ultérieurement.</p>
    <ErrorMessage v-if="(errorMessage != null)" :msg="errorMessage"/>

    <TabBar :isActive="3"/>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'

import TabBar from "@/components/TabBar.vue";
import BackButton from "@/components/BackButton.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

export default {
  name: "bookEdit",
  components: {
    PictureInput,
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
      .get("bookEdit?book_id=" + this.$route.params.id)
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
      
      if (!this.title) this.title = '';
      params.append("title", this.title);

      if (!this.subtitle) this.subtitle = '';
      params.append("subtitle", this.subtitle);

      if (!this.image) this.image = '';
      params.append("image", this.image);

      if (!this.desc) this.desc = '';
      params.append("description", this.desc);

      if (this.$route.params.id = 'new') {
        this.$axios
        .post("bookInsert", params)
        .then(response => response.data)
        .then(response => {
          if (response.status) {
            this.$router.push('/book-details/'+response.id)
          } else {
            this.errorMessage = response.error;
          }
        });

      } else {
      params.append("id", this.id);

      this.$axios
        .post("bookEdit", params)
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
    },
    handleImageChange(image) {
      this.image = image;
    }
  }
};
</script>
