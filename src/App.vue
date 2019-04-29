<template>
  <div id="app">
    <TabBar />
    <router-view/>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'App', 
  components: {
    TabBar
  }
}
</script>
