<style scoped>
.book-tuile-container {
  position: relative;
  min-width: 150px;
  max-width: 150px;
  height: 225px;
  padding: 0;
  margin: 10px;
  border-radius: 5px;
  border: 2px solid var(--color-secondaire);
  box-shadow: 4px 4px 4px var(--color-secondaire);
  text-align: center;
}

.book-tuile-container a {
  text-decoration: none;
}

.title,
.subtitle,
.author,
.write {
  width: 100%;
  margin: 0;
  padding: 5px;
  color: #fff;
  display: block;
}

.title {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  font-family: var(--font-title);
  margin-top: 10px;
}

.subtitle {
  font-family: var(--font-title);
}

.author {
  background-color: #fff;
  color: var(--color-primaire);
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 0 0 5px 5px;
}

.write {
  background-color: var(--color-secondaire);
  width: 40px;
  height: 40px;
  border-radius: 15px 0px 0px 0px;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.write > i {
  font-size: 24px;
  margin: 0;
}
</style>


<template>
  <div class="book-tuile-container" :style="{backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0)), url(' + image + ')', backgroundSize: 'contain'}">
    <router-link :to="'book-details/'+id">
        <span class="title">{{title}}</span>
        <span class="subtitle">{{subtitle}}</span>
        <span v-if="!isMine" class="author">{{author}}</span>
    </router-link>
    <router-link v-if="isMine" class="write" :to="'/book-write/'+id">
      <i class="fas fa-feather"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    subtitle: String,
    author: String,
    image: String,
    isMine: Boolean
  }
};
</script>
