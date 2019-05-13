<style scoped>
.author {
  text-align: center;
  display: grid;
  grid-template: repeat(5, 1fr);
  grid-gap: 10px;
}

.author > img {
  width: 100%;
  border: 1px solid var(--color-secondaire);
  box-shadow: 2px 2px 4px var(--color-secondaire);
  border-radius: 3px;
  grid-column: 1 / span 2;
}

.author .else {
  grid-column: 3 / span 3;
}

.author .else .author-name {
  display: block;
  margin: 0;
  padding: 5px;
  font-family: var(--font-title);
  font-weight: bold;
  font-size: 24px;
  width: 100%;
}

.author .else .button {
  display: inline-block;
  margin: auto;
}

#abo {
  margin-left: 10px;
}
</style>

<template>
  <div>
    <BackButton/>

    <h1>Profil utilisateur</h1>

    <template v-if="!isError">
      <h2>L'auteur</h2>
      <p class="author">
        <img :src="image" :alt="pseudo">
        <span class="else">
          <span class="author-name">{{pseudo}}</span>
          <router-link :to="'/search?author='+pseudo"
            class="button books"
            style="background-color: var(--color-secondaire)"
          >{{nbBooks}}2 livre{{nbBooks>1?'s':''}}</router-link>
          <a href="#" class="button" id="abo" style="background-color: var(--color-ternaire)">S'abonner</a>
        </span>
      </p>

      <h2>Statistiques</h2>
      <p class="statistics">
        <Stat :fa="'book-open'" :num="nbReads"/>
        <Stat :fa="'download'" :num="nbDL"/>
        <Stat :fa="'star'" :num="note"/>
        <Stat :fa="'comment'" :num="nbComments"/>
        <a href="#" class="button">Plus</a>
      </p>

      <h2>Avis</h2>
      <AvisNotes :id="id"/>
    </template>
    <ErrorMessage v-else-if="(errorMessage != null)" :msg="errorMessage" />
    <p v-else>
      Nous ne parvenons pas à récupérer les informations sur cet utilisateur. Veuillez vérifier votre connexion internet et réessayer ultérieurement.
    </p>

    <TabBar :isActive="4"/>
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import Stat from "@/components/Stat.vue";
import AvisNotes from "@/components/AvisNotes.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import TabBar from "@/components/TabBar.vue";

export default {
  name: "profile",
  components: {
    BackButton,
    Stat,
    AvisNotes,
    ErrorMessage,
    TabBar
  },
  data: function() {
    return {
      id: 0,
      pseudo: "",
      image: "",
      nbBooks: 0,
      nbReads: 0,
      nbDL: 0,
      nbComments: 0,
      note: 0,
      isError: true,
      errorMessage: null
    };
  },
  mounted() {
    this.$axios
      .get('user?user_id='+this.$route.params.id)
      .then(response => response.data)
      .then(response => {
        if (response.status) {
          this.id = response.id;
          this.pseudo = response.pseudo;
          this.image = response.image;
          this.nbBooks = response.nbBooks;
          this.nbReads = response.nbReads;
          this.nbDL = response.nbDL;
          this.nbComments = response.nbComments;
          this.note = response.note;
          this.isError = false;
        } else {
          this.errorMessage = response.error
        }
      });
  }
};
</script>
