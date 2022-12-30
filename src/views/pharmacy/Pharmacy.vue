<template>
  <v-app>
    <AppBar v-model:showDrawer="showDrawer" />

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppBar from '../AppBar.vue'

export default {
  components: { AppBar },
  setup() {
    return { showDrawer: ref(true) }
  },
}
</script>
