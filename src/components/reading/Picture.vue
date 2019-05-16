<style scoped>
	p {
		text-align: center;
	}
	
	img {
		max-width: 100%;
	}
</style>

<template>
	<p class="transparent"><img :src="src" :alt="alt" /></p>
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
