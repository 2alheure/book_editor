<style scoped>
	div {
		margin: 0;
		padding: 0;
	}
</style>

<template>
	<div v-html="value"></div>
</template>

<script>
export default {
	name: 'paragrapheReading',
	props: {
		level: String,
		value: String,
	}
}
</script>
