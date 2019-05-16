<style scoped>
	input {
		width: 100%;
	}
</style>

<template>
  <p>
		<input v-model="title" type="text" placeholder="Titre de la section" />
	</p>
</template>

<script>
export default {
	name: 'contentEdit',
	props: {
		title: String
	}
}
</script>
