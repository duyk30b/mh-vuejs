<template>
	<v-app>
		<v-main>
			<v-container class="mt-16">
				<v-row justify="center">
					<v-col sm="12" md="8" lg="6">
						<v-card elevation="6">
							<v-toolbar dark color="primary">
								<v-toolbar-title>Đăng nhập</v-toolbar-title>
							</v-toolbar>
							<v-card-text>
								<v-form class="mt-4">
									<v-text-field v-model="cPhone" prepend-icon="mdi-phone-dial" color="primary"
										label="SĐT Phòng khám" variant="underlined">
									</v-text-field>
									<v-text-field v-model="username" prepend-icon="mdi-account" color="primary"
										label="Tên tài khoản" variant="underlined">
									</v-text-field>
									<v-text-field v-model="password" prepend-icon="mdi-lock" color="primary"
										label="Mật khẩu" variant="underlined"
										:type="passwordVisible ? 'text' : 'password'"
										:append-inner-icon="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'"
										@click:append-inner="passwordVisible = !passwordVisible">
									</v-text-field>
									<div class="d-flex justify-end">
										<v-btn @click="startLogin" :loading="signInLoading"
											prepend-icon="mdi-login-variant" color="primary"> Đăng nhập
										</v-btn>
									</div>
									<p class="mt-6">Bạn chưa có tài khoản phòng khám ?
										<v-btn size="small" variant="outlined"
											@click="$router.push({ name: 'Register' })">
											Đăng ký tại đây
										</v-btn>
									</p>
								</v-form>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
			<v-alert :model-value="alert" type="error" :text="errorMessage" density="compact"></v-alert>
		</v-main>
	</v-app>

</template>
 
<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'

export default {
	setup() {
		const router = useRouter()
		const authStore = useAuthStore()

		const cPhone = ref('0986021190')
		const username = ref('admin')
		const password = ref('Abc@123456')
		const passwordVisible = ref(false)

		const signInLoading = ref(false)
		const errorMessage = ref('')
		const alert = ref(false)

		const startLogin = async () => {
			try {
				signInLoading.value = true
				alert.value = false
				await authStore.login({
					cPhone: cPhone.value,
					username: username.value,
					password: password.value,
				})
				router.push({ name: 'Clinic', params: {} })
			} catch (error: any) {
				console.log('🚀 ~ file: Login.vue:78 ~ startLogin ~ error', error)
				errorMessage.value = error.message
				alert.value = true
				setTimeout(() => {
					alert.value = false
				}, 5000)
			} finally {
				signInLoading.value = false
			}
		}
		return { cPhone, username, password, passwordVisible, startLogin, signInLoading, errorMessage, alert }
	},
}
</script>
 
<style lang="scss" scoped>
.v-alert {
	position: fixed;
	top: 20px;
	right: 20px;
}
</style>
