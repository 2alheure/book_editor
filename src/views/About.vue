<template>
  <div>
    <BackButton />

    <p>This is an about page.</p>
    
    <TabBar />
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue'
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'about',
  components: {
    BackButton,
    TabBar
  },
  data: function () {
    return  {}
  }
}
</script>
