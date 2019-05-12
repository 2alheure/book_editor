<style scoped>
.metadata {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.metadata > img {
  width: 100%;
  border: 1px solid var(--color-secondaire);
  box-shadow: 2px 2px 4px var(--color-secondaire);
  border-radius: 3px;
  grid-column: 1 / span 2;
}

.metadata .else {
  grid-column: 3 / span 3;
}

.metadata .else .title {
  display: block;
  margin: 0;
  padding: 5px;
  font-family: var(--font-title);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  width: 100%;
}

.metadata .else .subtitle {
  display: block;
  margin: 0;
  padding: 5px;
  font-family: var(--font-title);
  font-size: 16px;
  width: 100%;
  color: #ada4a4;
}

.desc {
  word-break: break-word;
}

.read-container {
  display: flex;
  justify-content: center;
}

.read,
.dl {
  padding: 0;
  margin: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.read .stat,
.dl .stat {
  margin: 0;
  padding: 0;
}

.read .button,
.dl .button {
  margin: 0;
  width: 120px;
}

.author {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}

.author > img {
  grid-column: 1 / span 2;
  max-width: 100%;
  border: 1px solid var(--color-secondaire);
  box-shadow: 2px 2px 4px var(--color-secondaire);
  border-radius: 3px;
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
</style>

<template>
  <div>
    <BackButton/>

    <h1>Détails du livre</h1>

    <template v-if="!isError">
      <h2>Métadonnées</h2>
      <p class="metadata">
        <img :src="image" :alt="title">
        <span class="else">
          <span class="title">{{title}}</span>
          <span class="subtitle">{{subtitle}}</span>
        </span>
      </p>

      <p class="desc">{{desc}}</p>

      <div class="read-container">
        <p class="read">
          <Stat :fa="'book-open'" :num="nbReads"/>
          <router-link :to="'/book-read/'+id" class="button big" style="background-color: var(--color-ternaire)">Lire</router-link>
        </p>
        <p class="dl">
          <Stat :fa="'download'" :num="nbDL"/>
          <a href="#" class="button big" style="background-color: var(--color-ternaire)">Télécharger</a>
        </p>
      </div>
      <p v-if="isMine">
        <router-link class="button" style="background-color: var(--color-secondaire)" :to="'/book-edit/'+id"><i class="fas fa-edit"></i>Editer</router-link>
      </p>

      <h2>L'auteur</h2>
      <p class="author">
        <img :src="author.image" :alt="author.pseudo">
        <span class="else">
          <span class="author-name">{{author.pseudo}}</span>
          <router-link :to="'/search?author='+author.pseudo"
            class="button"
            style="background-color: var(--color-secondaire); margin-right: 10px"
          >{{author.nbBooks}} livre{{author.nbBooks>1?'s':''}}</router-link>
          <router-link :to="'/profile/'+author.id" class="button">Détails</router-link>
        </span>
      </p>

      <h2>Avis</h2>
      <p class="statistics">
        <Stat :fa="'star'" :num="note"/>
        <Stat :fa="'comment'" :num="nbComments"/>
      </p>
      <AvisNotes :id="id"/>
    </template>
    <ErrorMessage v-else-if="(errorMessage != null)" :msg="errorMessage" />
    <p v-else>
      Nous ne parvenons pas à récupérer les informations sur cet ouvrage. Veuillez vérifier votre connexion internet et réessayer ultérieurement.
    </p>


    <TabBar :isActive="3"/>
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import Stat from "@/components/Stat.vue";
import AvisNotes from "@/components/AvisNotes.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import TabBar from "@/components/TabBar.vue";

export default {
  name: "bookDetails",
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
      title: "",
      subtitle: "",
      author: null,
      image: "",
      desc: "",
      isMine: false,
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
      .get('book?book_id='+this.$route.params.id)
      .then(response => response.data)
      .then(response => {
        if (response.status) {
          this.id = response.id;
          this.title = response.title;
          this.subtitle = response.subtitle;
          this.author = response.author;
          this.image = response.image;
          this.desc = response.desc;
          this.isMine = response.isMine;
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
