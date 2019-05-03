<style scoped>
    div.bt-slider {
        overflow-x: scroll;
    }
</style>


<template>
    <div class="bt-slider">
        <BookTuile v-for="book in books" :key="book.id" v-bind="book"/>
    </div>
</template>

<script>
import BookTuile from '@/components/BookTuile.vue'

export default {
  name: 'bookTuileSlider',
  components: {
    BookTuile
  },
  props: {
    books: Array
  }
}
</script>