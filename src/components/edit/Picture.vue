<style scoped>
  input {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
</style>

<template>
  <p>
    <PictureInput 
      class="transparent"
      accept="image/jpeg,image/png"
      :prefill="src"
      :custom-strings="{
        drag: 'Modifiez l\'image en cliquant ou en déposant une autre image sur celle-ci.',
        tap: 'Cliquez sur l\'image pour la modifier.'
      }"
      :alertOnError="false"
      :plain="true"
      :hideChangeButton="true"
      @change="handleImageChange"
    />
    <input type="text" name="alt-bloc-picture" id="alt-bloc-picture" placeholder="Alternative textuelle de l'image" v-model="alt">
    <input type="text" name="title-bloc-picture" id="title-bloc-picture" placeholder="Titre de l'image" v-model="title">
  </p>
</template>

<script>
import PictureInput from 'vue-picture-input'

export default {
  name: 'pictureEdit',
  components: {
    PictureInput
  },
  props: {
    src: String,
    alt: String,
    title: String
  },
  methods: {
    handleImageChange(image) {
      this.image = image;
    }
  }
}
</script>
