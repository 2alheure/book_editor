<style scoped>
	i {
		color: var(--color-primaire-p1);
	}
</style>

<template>
  <span class="li">
    <i class="fas fa-paragraph"></i>
	<div v-html="value"></div>
  </span>
</template>

<script>
export default {
  name: "paragrapheWriting",
  props: {
    level: String,
    value: String
  }
};
</script>
