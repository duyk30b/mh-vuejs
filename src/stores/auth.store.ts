import JwtService from '@/service/jwt.service'
import { defineStore } from 'pinia'

type UserInfo = {
	username: string;
	role: string;
} | null

type LoginData = {
	username: string;
	password: string;
}

type RegisterData = {
	username: string;
	password: string;
	email: string;
	phone: string;
}

type LoginResponse = {
	user: UserInfo;
	refeshToken: string;
}

type RegisterResponse = {
	user: UserInfo;
	refeshToken: string;
}

export const useAuthStore = defineStore('auth-store', {
	state: () => ({
		userInfo: null as UserInfo,
		error: null,
	}),
	actions: {
		async login(credentials: LoginData) {
			try {
				const data = await new Promise<LoginResponse>((resolve, reject) => {
					setTimeout(() => {
						resolve({
							user: { username: credentials.username, role: 'admin' },
							refeshToken: new Date().toString(),
						})
					}, 500)
				})
				console.log(data)
				JwtService.saveRefeshToken(data.refeshToken)
				this.userInfo = data.user
			} catch (error: any) {
				this.userInfo = null
				this.error = error
			}
		},
		async register(credentials: RegisterData) {
			try {
				const data = await new Promise<RegisterResponse>((resolve, reject) => {
					setTimeout(() => {
						resolve({
							user: { username: credentials.username, role: 'admin' },
							refeshToken: new Date().toString(),
						})
					}, 500)
				})
				console.log(data)
				JwtService.saveRefeshToken(data.refeshToken)
				this.userInfo = data.user
			} catch (error: any) {
				this.userInfo = null
				this.error = error
			}
		},
		async logout() {
			JwtService.destroyRefreshToken()
			this.userInfo = null
		},
	},
})
