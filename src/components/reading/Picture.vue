<style scoped>
	img {
		max-width: 100%;
	}
</style>

<template>
	<img :src="src" :alt="alt" />
</template>

<script>
export default {
	name: 'imageReading',
	props: {
		level: String,
		src: String,
		alt: String
	}
}
</script>
