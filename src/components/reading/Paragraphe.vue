<template>
  <div class="transparent" v-html="html()"></div>
</template>

<script>
export default {
  name: "paragrapheReading",
  props: {
    level: String,
    value: String
  },
  methods: {
    html() {
      return "<p>" + (this.value + "").replace(
        /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
        "$1" + '</p><p>' + "$2"
      ) + "</p>";
    }
  }
};
</script>
