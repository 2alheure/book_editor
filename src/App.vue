<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
