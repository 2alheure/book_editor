<style scoped>
.home {
  margin: 0;
}

p.inline-logo {
  margin: 25px 0 0 0;
  padding: 0;
  text-align: center;
}

p.inline-logo > img {
  max-height: 2rem;
  max-width: 100%;
  margin: 0;
}
</style>

<template>
  <div class="home">
    <p class="inline-logo">
      <img src="../assets/logo_inline.png" alt="Book &ditor">
    </p>

    <template v-if="!isError">
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
    </template>
    <ErrorMessage v-else-if="(errorMessage != null)" :msg="errorMessage" />
    <p v-else>
      Nous ne parvenons pas à récupérer les informations du serveur. Veuillez vérifier votre connexion internet et réessayer ultérieurement.
    </p>

    <TabBar :isActive="1" />
  </div>
</template>

<script>
import BookTuileSlider from '@/components/BookTuileSlider.vue'
import ErrorMessage from "@/components/ErrorMessage.vue";
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'home',
  components: {
    BookTuileSlider,
    ErrorMessage,
    TabBar,
  },
  data: function () {
    return {
      booksReco: [],
      booksSub: [],
      booksRead: [],
      booksMine: [],
      isError: true,
      errorMessage: null
    }
  },
  mounted() {
    this.$axios
      .get('homeBooks')
      .then(response => response.data)
      .then(response => {
        if (response.status) {
          this.booksReco = response.booksReco;
          this.booksSub = response.booksSub;
          this.booksRead = response.booksRead;
          this.booksMine = response.booksMine;
          this.isError = false;
        } else {
          this.errorMessage = response.error
        }
      });
  }
}
</script>
