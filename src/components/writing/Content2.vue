<style scoped>
	i {
		color: var(--color-ternaire);
	}
	
</style>

<template>
	<div class="transparent">
			<span v-if="title" class="li title">
				<i class="fas fa-sitemap"></i>
				<a :href="'/book-write/'+this.$route.params.id+'?position='+this.position" class="transparent">
					<h3 @click="test()">{{title}}</h3>
				</a>
				<EditButton :position="position" />
			</span>

		<div class="ul">
			<template v-for="(item, index) in content">
				<Content 
					v-if="item.type == 'container'" 
					:key="position + '/' + index"
					:position="position + '/' + index" 
					:title="item.title" 
					:content="item.content" 
				/>
				<Paragraphe 
					v-if="item.type == 'paragraphe'" 
					:key="position + '/' + index"
					:position="position + '/' + index" 
					:value="item.value" 
				/>
				<Picture 
					v-else-if="item.type == 'image'" 
					:key="position + '/' + index"
					:position="position + '/' + index" 
					:src="item.src" 
					:alt="item.alt" 
				/>
			</template>
		</div>
	</div>
</template>

<script>
import EditButton from "@/components/writing/EditButton.vue";
import Content from "@/components/writing/Content.vue";
import Paragraphe from "@/components/writing/Paragraphe.vue";
import Picture from "@/components/writing/Picture.vue";

export default {
	name: 'contentWriting2',
	components: {
		EditButton,
		Content,
		Paragraphe,
		Picture
	},
	props: {
		position: String,
		title: String,
		content: Array
	},
	methods: {
		test() {
			console.log(this.position)
			this.$router.push('/book-write/'+this.$route.params.id+'?position='+this.position);
		}
	}
}
</script>
