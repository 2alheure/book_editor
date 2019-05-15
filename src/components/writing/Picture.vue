<style scoped>
	i {
		color: var(--color-secondaire);
  }
  
  p {
    text-align: center;
    width: inherit;
  }

  img {
    max-height: 50px;
  }
</style>

<template>
  <span class="li">
    <i class="fas fa-image"></i>
    <p class="transparent"><img :src="src" :alt="alt"></p>
    <EditButton :position="position" />
  </span>
</template>

<script>
import EditButton from "@/components/writing/EditButton.vue";

export default {
  name: "imageWriting",
  components: {
    EditButton
  },
  props: {
    position: String,
    src: String,
    alt: String
  }
};
</script>
