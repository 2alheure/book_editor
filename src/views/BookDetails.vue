<style scoped>
.metadata {
  text-align: center;
  display: grid;
  grid-template: repeat(5, 1fr);
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
  width: 100px;
}

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

    <h1>Détails du livre</h1>

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
        <Stat :fa="'book'" :num="nbReads"/>
        <a href="#" class="button big" style="background-color: var(--color-ternaire)">Lire</a>
      </p>
      <p class="dl">
        <Stat :fa="'download'" :num="nbDL"/>
        <a href="#" class="button big" style="background-color: var(--color-ternaire)">Télécharger</a>
      </p>
    </div>

    <h2>L'auteur</h2>
    <p class="author">
      <img :src="author.image" :alt="author.pseudo">
      <span class="else">
        <span class="author-name">{{author.pseudo}}</span>
        <a
          href="#"
          class="button"
          style="background-color: var(--color-secondaire)"
        >{{author.nbBooks}} livre{{author.nbBooks>1?'s':''}}</a>
        <router-link :to="'/profile/'+author.id" class="button">Détails</router-link>
      </span>
    </p>

    <h2>Avis</h2>
    <p class="statistics">
      <Stat :fa="'star'" :num="note"/>
      <Stat :fa="'comment'" :num="nbComments"/>
    </p>
    <AvisNotes :id="id"/>

    <TabBar :isActive="3"/>
  </div>
</template>
<script>
import BackButton from "@/components/BackButton.vue";
import Stat from "@/components/Stat.vue";
import AvisNotes from "@/components/AvisNotes.vue";
import TabBar from "@/components/TabBar.vue";

export default {
  name: "bookDetails",
  components: {
    BackButton,
    Stat,
    AvisNotes,
    TabBar
  },
  data: function() {
    return {
      id: 42,
      title: "C'est l'histoire de ma vie",
      subtitle: "Chapitre II : mon adolescence",
      author: {
        id: 42,
        pseudo: "Jean-Bernard de Laroche-Foucault",
        image:
          "https://cdn.discordapp.com/avatars/185470129193091072/6551a9208529f2fbbdcb3a522ef46160.png?size=512",
        nbBooks: 15
      },
      image:
        "https://images.leslibraires.ca/books/9782843048067/front/9782843048067_large.jpg",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum neque dolorem sit, maxime quos! Blanditiis in tempore error, architecto soluta dolorem, dolore aliquam incidunt eaque ab quia maiores quas! Magni odit veniam blanditiis nihil officiis debitis, mollitia nobis voluptatem praesentium architecto neque consectetur. Obcaecati esse vel aliquam voluptatum ad expedita saepe, sit voluptate necessitatibus architecto. Soluta beatae deserunt harum? Ipsum delectus officia repudiandae tempora unde quod ex, cupiditate aut facere ab animi itaque numquam magni, blanditiis, laudantium recusandae quas commodi voluptatem? Ad quidem dicta beatae earum voluptates deleniti! Possimus. Quo esse excepturi ipsum a laudantium ex incidunt dolorem perspiciatis. Quia quisquam ipsam, dolorum tempore reiciendis corporis dolore nobis facere temporibus, deleniti, eum libero. Tempora explicabo qui quo debitis deserunt? Non sapiente odit voluptatibus repudiandae cumque recusandae, nemo corrupti aut aperiam, necessitatibus quisquam alias laboriosam fuga! Placeat sunt qui officia quae culpa libero eveniet? Molestias ullam nihil voluptates labore odio.",
      isMine: true,
      nbReads: 5765839,
      nbDL: 3438508,
      note: 4.85,
      nbComments: 255809
    };
  }
};
</script>
