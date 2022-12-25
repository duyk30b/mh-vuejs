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
import { RouterView, useRouter } from 'vue-router'
import AppBar from './AppBar.vue'
import Drawer from './Drawer.vue'
import { useAuthStore } from '@/stores/auth.store'

export default {
	components: { Drawer, AppBar },
	setup() {
		const authStore = useAuthStore()
		const router = useRouter()

		authStore.$subscribe((mutation, state) => {
			if (state.userInfo == null) {
				router.push({ name: 'Login' })
			}
		})

		return { showDrawer: ref(true) }
	},
}
</script>
