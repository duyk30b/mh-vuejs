<template>
	<v-app>
		<v-main>
			<v-container class="mt-16">
				<v-row justify="center">
					<v-col sm="12" md="8" lg="6">
						<v-card elevation="6">
							<v-toolbar dark color="primary">
								<v-toolbar-title>Đăng ký tài khoản phòng khám mới</v-toolbar-title>
							</v-toolbar>
							<v-card-text>
								<v-form class="mt-4">
									<v-text-field v-model="phone" prepend-icon="mdi-phone-dial" color="primary"
										label="SĐT Phòng khám" variant="underlined">
									</v-text-field>
									<v-text-field v-model="email" prepend-icon="mdi-email" color="primary"
										label="Email Phòng khám" variant="underlined" type="email">
									</v-text-field>
									<v-text-field v-model="username" prepend-icon="mdi-account"
										label="Tên Tài khoản quản trị" variant="underlined">
									</v-text-field>
									<v-text-field v-model="password" prepend-icon="mdi-lock" color="primary"
										label="Mật khẩu" variant="underlined"
										:type="passwordVisible ? 'text' : 'password'"
										:append-inner-icon="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'"
										@click:append-inner="passwordVisible = !passwordVisible">
									</v-text-field>
									<v-text-field v-model="passwordRepeat" prepend-icon="mdi-lock"
										label="Nhập lại Mật khẩu" color="primary" variant="underlined"
										:type="passwordVisible ? 'text' : 'password'"
										:append-inner-icon="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'"
										@click:append-inner="passwordVisible = !passwordVisible">
									</v-text-field>
									<div class="d-flex justify-end">
										<v-btn @click="startRegister" :loading="signInLoading"
											prepend-icon="mdi-login-variant" color="primary"> Đăng ký
										</v-btn>
									</div>
									<p class="mt-6">Bạn đã có tài khoản phòng khám ?
										<v-btn size="small" variant="outlined" @click="$router.push({ name: 'Login' })">
											Đăng nhập
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

		const email = ref('example@gmail.com')
		const phone = ref('0368123456')
		const username = ref('admin')
		const password = ref('Abc@123456')
		const passwordRepeat = ref('Abc@123456')
		const passwordVisible = ref(false)

		const signInLoading = ref(false)
		const errorMessage = ref('')
		const alert = ref(false)

		const startRegister = async () => {
			try {
				if (password.value !== passwordRepeat.value) {
					throw new Error('Nhập lại mật khẩu không đúng')
				}
				signInLoading.value = true
				await authStore.register({
					phone: phone.value,
					email: email.value,
					username: username.value,
					password: password.value,
				})
				router.push({ name: 'Dashboard', params: {} })
			} catch (error: any) {
				errorMessage.value = error.message
				alert.value = true
				setTimeout(() => {
					alert.value = false
				}, 5000)
			} finally {
				signInLoading.value = false
			}
		}
		return {
			phone,
			username,
			email,
			password,
			passwordRepeat,
			passwordVisible,
			startRegister,
			signInLoading,
			errorMessage,
			alert,
		}
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
