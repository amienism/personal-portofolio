<template>
   <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
import defaultLayout from '@/layout/index.vue'

export default {
  computed: {
    layout () {
      return this.$store.getters.layout
    }
  },
  components: {
    'default-layout': defaultLayout,
  }
}
</script>
