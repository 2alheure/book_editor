<template>
  <div class="home" style="margin:0">
    <h1>Book Editor</h1>

    <h2>Mes recommandations</h2>
    <BookTuileSlider v-if="booksReco.length > 0" :books="booksReco"/>
    <p v-else>
      Nous ne parvenons pas à vous trouver de recommandation.
    </p>

    <h2>Mes abonnements</h2>
    <BookTuileSlider v-if="booksSub.length > 0" :books="booksSub" />
    <p v-else>
      Vous n’avez encore aucun abonnement. 
      Pour suivre un auteur, rendez-vous sur sa fiche personnelle 
      et cliquez sur le bouton “S’abonner”.
    </p>

    <h2>Mes lectures</h2>
    <BookTuileSlider v-if="booksRead.length > 0" :books="booksRead" />
    <p v-else>Vous n'avez aucune lecture en cours.</p>

    <h2>Mes publications</h2>
    <BookTuileSlider v-if="booksMine.length > 0" :books="booksMine" />
    <p v-else>Vous n'avez aucune publication.</p>

    <TabBar />
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'
import BookTuileSlider from '@/components/BookTuileSlider.vue'

export default {
  name: 'home',
  components: {
    TabBar,
    BookTuileSlider
  },
  data: function () {
    return {
      booksReco: [
        {
          id: 42,
          title: "C'est l'histoire de ma vie",
          subtitle: "Chapitre II : mon adolescence",
          author: "Jean-Bernard de Laroche-Foucault",
          img: "https://images.leslibraires.ca/books/9782843048067/front/9782843048067_large.jpg",
          isMine: false
        },
        {
          id: 43,
          title: "C'est l'histoire de ta vie",
          subtitle: "Chapitre III : ma vie adulte",
          author: "Jean-Bernard de Laroche-Foucault",
          img: "https://images.leslibraires.ca/books/9782843048067/front/9782843048067_large.jpg",
          isMine: false
        }
      ],
      booksSub: [
        {
          id: 42,
          title: "Alice au Pays des Merveilles",
          subtitle: "",
          author: "Lewis Caroll",
          img: "https://media.istockphoto.com/illustrations/alices-adventures-in-wonderland-illustration-id185304146",
          isMine: false
        },
        {
          id: 43,
          title: "C'est l'histoire de ta vie",
          subtitle: "Chapitre III : ma vie adulte",
          author: "Jean-Bernard de Laroche-Foucault",
          img: "https://images.leslibraires.ca/books/9782843048067/front/9782843048067_large.jpg",
          isMine: false
        }
      ],
      booksRead: [
        {
          id: 42,
          title: "Bien utiliser Book Editor",
          subtitle: "Tutoriel à l'intention du nouvel utilisateur",
          author: "Book Editor",
          img: "https://images.leslibraires.ca/books/9782843048067/front/9782843048067_large.jpg",
          isMine: false
        },
        {
          id: 43,
          title: "Bien utiliser Book Editor",
          subtitle: "Usage avancé et bonnes pratiques",
          author: "Book Editor",
          img: "https://images.leslibraires.ca/books/9782843048067/front/9782843048067_large.jpg",
          isMine: false
        }
      ],
      booksMine: [
        {
          id: 43,
          title: "Un livre d'exemple",
          subtitle: "Un terrain pour bien s'entraîner",
          author: "Jean-Bernard de Laroche-Foucault",
          img: "https://images.leslibraires.ca/books/9782843048067/front/9782843048067_large.jpg",
          isMine: true
        }
      ],
    }
  }
}
</script>
