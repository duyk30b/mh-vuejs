<template>
  <v-app>
    <AppBar v-model:showDrawer="showDrawer" />
    <Drawer v-model:showDrawer="showDrawer" />

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppBar from '../AppBar.vue'
import Drawer from './Drawer.vue'

export default {
  components: { Drawer, AppBar },
  setup() {
    return { showDrawer: ref(true) }
  },
}
</script>
