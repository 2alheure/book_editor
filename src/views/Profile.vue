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
          <a
            href="#"
            class="button"
            style="background-color: var(--color-secondaire)"
          >{{nbBooks}} livre{{nbBooks>1?'s':''}}</a>
          <a href="#" class="button" style="background-color: var(--color-ternaire)">S'abonner</a>
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

      <TabBar :isActive="4"/>
    </template>
    <p v-else>
      Nous ne parvenons pas à récupérer les informations sur cet utilisateur. Veuillez vérifier votre connection internet et réessayer ultérieurement.
    </p>

  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import Stat from "@/components/Stat.vue";
import AvisNotes from "@/components/AvisNotes.vue";
import TabBar from "@/components/TabBar.vue";

export default {
  name: "profile",
  components: {
    BackButton,
    Stat,
    AvisNotes,
    TabBar
  },
  data: function() {
    return {
      id: $route.params.id,
      pseudo: "",
      image: "",
      nbBooks: 0,
      nbReads: 0,
      nbDL: 0,
      nbComments: 0,
      note: 0,
      isError: true
    };
  },
  mounted() {
    axios
      .get(baseURL('/user?user_id='+this.id))
      .then(res => {
        this.pseudo = res.pseudo;
        this.image = res.image;
        this.nbBooks = res.nbBooks;
        this.nbReads = res.nbReads;
        this.nbDL = res.nbDL;
        this.note = res.note;
        this.nbComment = res.nbComment;
        this.isError = false;
      })
      .catch(error => {})
    ;
  }
};
</script>
