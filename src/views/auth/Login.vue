<template>
	<v-app>
		<v-main>
			<v-container class="mt-16">
				<v-row justify="center">
					<v-col sm="12" md="8" lg="6">
						<v-card elevation="6">
							<v-toolbar dark color="indigo-darken-2">
								<v-toolbar-title>Đăng nhập</v-toolbar-title>
							</v-toolbar>
							<v-card-text>
								<v-form class="mt-4">
									<v-text-field v-model="cPhone" prepend-icon="mdi-phone-dial" color="indigo-darken-2"
										label="SĐT Phòng khám" variant="underlined">
									</v-text-field>
									<v-text-field v-model="username" prepend-icon="mdi-account" label="Tên tài khoản"
										variant="underlined">
									</v-text-field>
									<v-text-field v-model="password" prepend-icon="mdi-lock" label="Mật khẩu"
										variant="underlined" type="password">
									</v-text-field>
									<div class="d-flex justify-end">
										<v-btn @click="startLogin" :loading="signInLoading"
											prepend-icon="mdi-login-variant" color="indigo-darken-2"> Đăng nhập
										</v-btn>
									</div>
									<p class="mt-6">Bạn chưa có tài khoản phòng khám ?
										<v-btn size="small" variant="outlined" @click="$router.push({ name: 'Register' })">
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
		return { cPhone, username, password, startLogin, signInLoading, errorMessage, alert }
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
