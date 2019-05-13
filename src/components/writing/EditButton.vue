<template>
	<router-link :to="'/edit-bloc?position='+position" class="edit-button"><i class="fas fa-edit"></i></router-link>
</template>

<script>
export default {
	name: 'editButton',
	props: {
		position: String
	}
}
</script>
