<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
  }
</style>

<template>
  <div>
    <BackButton />

    <h1>Mes publications</h1>

    <div class="container">
      <BookTuile v-for="book in books" :key="book.id" v-bind="book"/>
    </div>
    <a href="#" class="button">Nouveau livre</a>

    <TabBar :isActive="3" />
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue'
import BookTuile from '@/components/BookTuile.vue'
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'myBooks',
  components: {
    BackButton,
    BookTuile,
    TabBar
  },
  data: function () {
    return  {
      books: [
        {
          id: 1,
          title: "C'est l'histoire de ma vie",
          subtitle: "Chapitre II : mon adolescence",
          author: "Jean-Bernard de Laroche-Foucault",
          image: "https://images.leslibraires.ca/books/9782843048067/front/9782843048067_large.jpg",
          isMine: true
        },
        {
          id: 2,
          title: "C'est l'histoire de ma vie",
          subtitle: "Chapitre II : mon adolescence",
          author: "Jean-Bernard de Laroche-Foucault",
          image: "https://images.leslibraires.ca/books/9782843048067/front/9782843048067_large.jpg",
          isMine: true
        },
        {
          id: 3,
          title: "C'est l'histoire de ta vie",
          subtitle: "Chapitre III : ma vie adulte",
          author: "Jean-Bernard de Laroche-Foucault",
          image: "https://images.leslibraires.ca/books/9782843048067/front/9782843048067_large.jpg",
          isMine: true
        }
      ]
    }
  }
}
</script>
