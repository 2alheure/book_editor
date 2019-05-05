<template>
  <div>
    <BackButton />

    <p>This is the page where my books appear.</p>
    
    <TabBar :isActive="3" />
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue'
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'myBooks',
  components: {
    BackButton,
    TabBar
  },
  data: function () {
    return  {}
  }
}
</script>
