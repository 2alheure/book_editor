<style scoped>
	i {
		color: var(--color-secondaire);
	}
</style>

<template>
  <span class="li">
    <i class="fa-li fas fa-image"></i>
    <img :src="src" :alt="alt">
  </span>
</template>

<script>
export default {
  name: "imageWriting",
  props: {
    level: String,
    src: String,
    alt: Object
  }
};
</script>
