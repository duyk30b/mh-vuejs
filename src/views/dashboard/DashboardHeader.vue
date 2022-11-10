<template>
	<h1>Header</h1>
	<a v-on:click="startLogout">Logout</a>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'

export default {
	setup() {
		const router = useRouter()
		const authStore = useAuthStore()

		const startLogout = async () => {
			await authStore.logout()
			router.push({ name: 'Login' })
		}
		return { startLogout }
	},
}
</script>

<style>

</style>
