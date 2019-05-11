<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
}
</style>

<template>
  <div>
    <BackButton/>

    <h1>Mes publications</h1>

    <template v-if="!isError">
      <BookContainer :books="books"/>

      <a href="#" class="button">Nouveau livre</a>
    </template>
    <ErrorMessage v-else-if="(errorMessage != null)" :msg="errorMessage"/>
    <p v-else>Nous ne parvenons pas à récupérer les informations sur cet utilisateur. Veuillez vérifier votre connexion internet et réessayer ultérieurement.</p>
    <TabBar :isActive="3"/>
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import BookContainer from "@/components/BookContainer.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import TabBar from "@/components/TabBar.vue";

export default {
  name: "myBooks",
  components: {
    BackButton,
    BookContainer,
    ErrorMessage,
    TabBar
  },
  data: function() {
    return {
      books: [],
      isError: true,
      errorMessage: null
    };
  },
  mounted() {
    this.$axios
      .get("myBooks")
      .then(response => response.data)
      .then(response => {
        if (response.status) {
          this.books = response.books;
          this.isError = false;
        } else {
          this.errorMessage = response.error;
        }
      });
  }
};
</script>
