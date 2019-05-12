<template>
	<div>
		<h3 v-if="title">{{title}}</h3>

		<template v-for="(item, index) of content">
			<Content 
				v-if="item.type == 'container'" 
				:key="level + '-' + item.level + '-' + index" 
				:level="level + '-' + item.level + '-' + index" 
				:title="item.title" 
				:content="item.content" 
			/>
			<Paragraphe 
				v-else-if="item.type == 'paragraphe'" 
				:key="level + '-' + item.level + '-' + index" 
				:level="level + '-' + item.level + '-' + index" 
				:value="item.value" 
			/>
			<Picture 
				v-else-if="item.type == 'image'" 
				:key="level + '-' + item.level + '-' + index" 
				:level="level + '-' + item.level + '-' + index" 
				:src="item.src" 
				:alt="item.alt" 
			/>
		</template>
	</div>
</template>

<script>
import Paragraphe from "@/components/reading/Paragraphe.vue";
import Picture from "@/components/reading/Picture.vue";

export default {
	name: 'contentReading',
	components: {
		Paragraphe,
		Picture
	},
	props: {
		level: String,
		title: String,
		content: Object
	}
}
</script>
