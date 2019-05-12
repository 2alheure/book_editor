<template v-if="books.length">
  <div class="container">
    <BookTuile v-for="book of books" :key="book.id" v-bind="book"/>
  </div>
</template>

<script>
import BookTuile from "@/components/BookTuile.vue";

export default {
  name: 'bookContainer',
  components: {
    BookTuile,
  },
  props: {
    books: Array
  }
};
</script>
