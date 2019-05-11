<template>
  <div>
    <BackButton />

    <h1>Écrire un livre</h1>

    <p>Cette fonctionnalité n'est pour le moment pas implémentée. Nous nous excusons pour la gêne occasionnée.</p>
    
    <TabBar :isActive="3" />
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue'
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'search',
  components: {
    BackButton,
    TabBar
  },
  data: function () {
    return  {}
  }
}
</script>
