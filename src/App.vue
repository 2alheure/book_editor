<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      baseURL: 'http://loclahost/book_editor',
      apiURL: 'http://loclahost/book_editor_php_api',
    }
  },
  methods: {
    base_url: function (segments) {
      baseURL+segments
    },
    api_url: function (segments) {
      return apiURL+segments
    }
  }
}
</script>
