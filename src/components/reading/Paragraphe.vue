<template>
	<div class="transparent" v-html="value"></div>
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
