<template>
	<v-app>
		<Appbar v-model:showDrawer="showDrawer" />
		<Drawer v-model:showDrawer="showDrawer" :toggerDrawer="toggerDrawer" />

		<v-main>
			<v-card-text>
				The navigation drawer will appear from the bottom on smaller size screens.
			</v-card-text>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import { ref } from 'vue'
import Appbar from './Appbar.vue'
import Drawer from './Drawer.vue'

export default {
	components: { Drawer, Appbar },
	setup() {
		return {
			toggerDrawer: ref(true),
			showDrawer: ref(true),
		}
	},
}
</script>
