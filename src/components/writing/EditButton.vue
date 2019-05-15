<template>
	<router-link :to="'/bloc-edit/'+$route.params.id+'?position='+position" class="edit-button"><i class="fas fa-edit"></i></router-link>
</template>

<script>
export default {
	name: 'editButton',
	props: {
		position: String,
	}
}
</script>
