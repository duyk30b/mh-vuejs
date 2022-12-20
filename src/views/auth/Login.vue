<template>
	<v-app>
		<v-main>
			<v-container class="mt-16">
				<v-row justify="center">
					<v-col sm="12" md="8" lg="6">
						<v-card elevation="6">
							<v-tabs v-model="loginType" fixed-tabs bg-color="indigo-darken-2" height="60">
								<v-tab value="user">
									Tài khoản nhân viên
								</v-tab>
								<v-tab value="clinic">
									Tài khoản phòng khám
								</v-tab>
							</v-tabs>
							<v-card-text>
								<v-window v-model="loginType">
									<v-window-item value="user">
										<v-form class="mt-4">
											<v-text-field v-model="clinicCode" prepend-icon="mdi-home-city"
												color="indigo-darken-2" label="Tên phòng khám" variant="underlined">
											</v-text-field>
											<v-text-field v-model="username" prepend-icon="mdi-account"
												label="Tên tài khoản" variant="underlined">
											</v-text-field>
											<v-text-field v-model="password" prepend-icon="mdi-lock" label="Mật khẩu"
												variant="underlined" type="password">
											</v-text-field>
											<div class="d-flex justify-end">
												<v-btn @click="startLogin" :loading="signInLoading"
													prepend-icon="mdi-login-variant" color="indigo-darken-2"> Đăng nhập
												</v-btn>
											</div>
										</v-form>
									</v-window-item>
									<v-window-item value="clinic">
										<v-form class="mt-4">
											<v-text-field v-model="email" prepend-icon="mdi-email" label="Login"
												variant="underlined" type="email"></v-text-field>
											<v-text-field v-model="password" prepend-icon="mdi-lock" label="Password"
												variant="underlined" type="password"></v-text-field>
											<div class="d-flex justify-end">
												<v-btn @click="startLogin" :loading="signInLoading"
													prepend-icon="mdi-login-variant" color="indigo-darken-2"> Đăng nhập
												</v-btn>
											</div>
											<div class="d-flex justify-end mt-4">
												<v-btn @click="$router.push({ name: 'Register' })" variant="text">
													Đăng ký tài khoản
												</v-btn>
											</div>
										</v-form>
									</v-window-item>
								</v-window></v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
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
		const clinicCode = ref('1')
		const email = ref('example@gmail.com')
		const username = ref('Admin')
		const password = ref('Abc@123456')
		const signInLoading = ref(false)
		const errorMessage = ref('')
		const loginType = ref('user')

		const startLogin = async () => {
			try {
				signInLoading.value = true
				await authStore.login({
					clinicCode: clinicCode.value,
					username: username.value,
					email: email.value,
					password: password.value,
				})
				router.push({ name: 'Dashboard', params: {} })
			} catch (error: any) {
				errorMessage.value = error.message
			} finally {
				signInLoading.value = false
			}
		}
		return { clinicCode, username, email, password, startLogin, signInLoading, errorMessage, loginType }
	},
}
</script>
 
<style>

</style>
