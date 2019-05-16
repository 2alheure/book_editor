<style scoped>
input {
  width: 100%;
  margin: 0;
}
</style>

<template>
  <p>
    <input
      v-model="$parent.item.title"
      type="text"
      name="title-bloc-content"
      id="title-bloc-content"
      placeholder="Titre de la section"
      required autofocus
    >
  </p>
</template>
