<style scoped>
	i {
		color: var(--color-primaire-p1);
  }
  
  .writing-paragraphe {
    width: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .writing-paragraphe >>> p {
    overflow: hidden;
    display: inline;
    margin: 0;
    padding: 0;
  }

  .writing-paragraphe >>> br {
    display: none;
  }
</style>

<template>
  <span class="li">
    <i class="fas fa-paragraph"></i>
	  <p class="writing-paragraphe" v-html="value" style=""></p>
    <EditButton :position="position" />
  </span>
</template>

<script>
import EditButton from "@/components/writing/EditButton.vue";

export default {
  name: "paragrapheWriting",
  components: {
    EditButton
  },
  props: {
    position: String,
    value: String
  }
};
</script>
