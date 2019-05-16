<style scoped>
  #value-bloc-paragraphe {
    width: 100%;
    height: 60vh;
  }
</style>

<template>
  <p>
    <textarea class="transparent" name="value-bloc-paragraphe" id="value-bloc-paragraphe" rows="10" placeholder="Saisissez ici votre texte" v-model="value"></textarea>
  </p>
</template>

<script>
export default {
  name: 'paragrapheEdit',
  props: {
    value: String
  }
}
</script>
