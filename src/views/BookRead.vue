<style scoped>
  .read-screen {
    margin: 5px;
  }
  
  h1 {
    margin: 25px 0 0 0;
  }

  h2.subtitle {
    margin: 0 0 15px 0;
    text-align: center;
  }

  main {
    position: relative;
  }

  .reader {
    margin: 0;
    padding: 10vw;
    padding-bottom: 0;
    border: 1px solid #ddd;
    border-bottom: none;
    border-top-left-radius: 15px;
    max-height: 100%;
    overflow-y: scroll;
    text-align: left;
    /* position: absolute;
    top: 0;
    bottom: 0;
    left: 5px;
    right: 5px; */
    background-image: linear-gradient(
      to right, #ccc 0, #fff 10vw
    );
    /* mask-clip: border-box;
    mask-image: linear-gradient(
      to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 2px, rgba(0,0,0,1) 10vw
    ); */
  }
</style>

<template>
  <div class="read-screen">
    <BackButton />

    <h1>{{meta.title}}</h1>
    <h2 class="subtitle">{{meta.subtitle}}</h2>

    <template v-if="!isError">
      <main class="transparent reader">
        <!-- <div class="reader"> -->
          <Content :content="content" :title="null" :level="'root'" />
        <!-- </div> -->
      </main>
    </template>

    <ErrorMessage v-else-if="(errorMessage != null)" :msg="errorMessage" />

    <p v-else>Nous ne parvenons pas à communiquer avec le serveur. Veuillez vérifier votre connexion internet et réessayer ultérieurement.</p>
    
    <TabBar :bookID="meta.id" />
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue'
import Content from '@/components/reading/Content.vue'
import TabBar from '@/components/reading/TabBar.vue'

export default {
  name: 'bookRead',
  components: {
    BackButton,
    Content,
    TabBar
  },
  data: function () {
    return  {
      currentLevel: 0,
      meta: [],
      content: [],
      isError: true,
      errorMessage: null
    }
  },
  mounted() {
    this.$axios
      .get('bookContent?book_id='+this.$route.params.id)
      .then(response => response.data)
      .then(response => {
        if (response.status) {
          this.meta = response.meta;
          this.content = response.content;
          this.isError = false;
        } else {
          this.errorMessage = response.error
        }
    })
    .catch(err => {
      this.errorMessage = 'Le serveur de données semble inaccessible. Veuillez vérifier votre connexion et réessayer ultérieurement.';
    });
  }
}
</script>
