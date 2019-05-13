<template>
  <div>
    <BackButton />

    <h1>{{meta.title}}</h1>

    <template v-if="!isError">
      <Content :content="content" :title="null" :level="'root'" />
    </template>
    <ErrorMessage v-else-if="(errorMessage != null)" :msg="errorMessage" />
    <p v-else>Nous ne parvenons pas à communiquer avec le serveur. Veuillez vérifier votre connexion internet et réessayer ultérieurement.</p>
    
    <TabBar :bookID="meta.id" />
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue';
import EditButton from "@/components/writing/EditButton.vue";
import Content from '@/components/writing/Content.vue';
import TabBar from '@/components/writing/TabBar.vue';

export default {
  name: 'bookWrite',
  components: {
    BackButton,
		EditButton,
    Content,
    TabBar
  },
  data: function () {
    return  {
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
      });
  }
}
</script>
