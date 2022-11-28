<template>
	<div>
		<div>
			<label for="">Email: </label>
			<input v-model="email" />
		</div>
		<div>
			<label for="">Phone: </label>
			<input v-model="phone" />
		</div>

		<div>
			<label for="">Password: </label>
			<input v-model="password" />
		</div>
		<div>
			<button v-on:click="startLogin">Start Register</button>
		</div>
		<div v-if="signInLoading" class="loader"></div>
		<div>
			<p>{{ errorMessage }}</p>
		</div>
		<div>
			<a v-on:click="$router.push({ name: 'Login' })">Login Link</a>
		</div>
	</div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'

export default {
	setup() {
		const router = useRouter()
		const authStore = useAuthStore()
		const password = ref('')
		const phone = ref('')
		const email = ref('')
		const signInLoading = ref(false)
		const errorMessage = ref('')

		const startLogin = async () => {
			try {
				signInLoading.value = true
				await authStore.register({
					password: password.value,
					phone: phone.value,
					email: email.value,
				})
				router.push({ name: 'Dashboard', params: {} })
			} catch (error: any) {
				console.log('🚀 ~ file: Login.vue ~ line 29 ~ startLogin ~ error', error)
				errorMessage.value = error.message
			} finally {
				signInLoading.value = false
			}
		}
		return { phone, password, email, startLogin, signInLoading, errorMessage }
	},
}
</script>
<style scoped>
.loader {
	border: 2px solid #f3f3f3;
	border-radius: 50%;
	border-top: 2px solid green;
	width: 12px;
	height: 12px;
	animation: spin 0.5s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
