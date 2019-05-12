<template>
	<img :src="src" :alt="alt" />
</template>

<script>
export default {
	name: 'imageReading',
	props: {
		level: String,
		src: String,
		alt: Object
	}
}
</script>
