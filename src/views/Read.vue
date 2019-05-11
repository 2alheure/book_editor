<template>
    
</template>

<script>
import BackButton from '@/components/BackButton.vue'
import TabBar2 from '@/components/TabBar2.vue'

export default {
  name: 'bookWrite',
  components: {
    BackButton,
    TabBar2
  },
  data: function () {
    return  {
      content: [],
      isError: true,
      errorMessage: null
    }
  },
  mounted() {
    this.$axios
      .get('read?book_id='+this.$route.params.id)
      .then(response => response.data)
      .then(response => {
        if (response.status) {
          this.content = response.content;
          this.isError = false;
        } else {
          this.errorMessage = response.error
        }
      });
  }
}
</script>
