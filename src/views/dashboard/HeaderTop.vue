<template>
	<div class="header-top">
		<div class="alert">
			<i class="comment-dots-regular"></i>
			<span class="badge"><span>{{ alertBadge }}</span></span>
		</div>
		<div class="message">
			<i class="bell-solid"></i>
			<span class="badge"><span>{{ messageBadge }}</span></span>
		</div>
		<div class="user">
			<i class="user-solid"></i>
		</div>
		<a v-on:click="startLogout">Logout</a>
	</div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { ref } from 'vue'

export default {
	setup() {
		const router = useRouter()
		const authStore = useAuthStore()

		const startLogout = async () => {
			await authStore.logout()
			router.push({ name: 'Login' })
		}
		return {
			startLogout,
			messageBadge: ref(5),
			alertBadge: ref(10),
		}
	},
}
</script>

<style lang="scss" scoped>
.header-top {
	height: 50px;
	border-bottom: 1px solid #e0e0e0;
	display: flex;
	justify-content: end;
	align-items: center;
	padding: 0 20px;

	.alert,
	.message,
	.user {
		position: relative;
		margin: 0 16px;
		cursor: pointer;

		i {
			font-size: 24px;
			color: #0598dd;
		}

		.badge {
			position: absolute;
			top: -4px;
			right: -6px;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			font-size: 11px;
			color: white;
			background-color: #dc3545;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
}
</style>
