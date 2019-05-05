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
      id: 42,
      pseudo: "2alheure 2dtension Long Nom",
      image:
        "https://cdn.discordapp.com/avatars/185470129193091072/6551a9208529f2fbbdcb3a522ef46160.png?size=512",
      nbBooks: 15,
      nbReads: 5765839,
      nbDL: 3438508,
      note: 4.85,
      nbComments: 255809
    };
  }
};
</script>
