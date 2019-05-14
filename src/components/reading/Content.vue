<template>
	<div class="transparent">
		<h3 v-if="title">{{title}}</h3>

		<template v-for="(item, index) in content">
			<Content2 
				v-if="item.type == 'container'" 
				:key="level + '-' + item.level + '-' + index"
				:level="level + '-' + item.level + '-' + index" 
				:title="item.title" 
				:content="item.content" 
			/>
			<Paragraphe 
				v-if="item.type == 'paragraphe'" 
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
import Content2 from "@/components/reading/Content2.vue";
import Paragraphe from "@/components/reading/Paragraphe.vue";
import Picture from "@/components/reading/Picture.vue";

export default {
	name: 'contentReading',
	components: {
		Content2,
		Paragraphe,
		Picture
	},
	props: {
		level: String,
		title: String,
		content: Array
	}
}
</script>
