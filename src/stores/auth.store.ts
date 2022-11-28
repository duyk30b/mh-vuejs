import JwtService from '@/service/jwt.service'
import { defineStore } from 'pinia'

type UserInfo = {
	username: string;
	role: string;
} | null

type LoginDto = {
	clinicCode?: string;
	username?: string;
	email?: string;
	password: string;
}

type RegisterDto = {
	password: string;
	email: string;
	phone: string;
}

type LoginResponse = {
	user: UserInfo;
	refeshToken: string;
}

type RegisterResponse = {
	email: UserInfo;
	refeshToken: string;
}

export const useAuthStore = defineStore('auth-store', {
	state: () => ({
		userInfo: null as UserInfo,
		error: null,
	}),
	actions: {
		async login(credentials: LoginDto) {
			try {
				const data = await new Promise<LoginResponse>((resolve, reject) => {
					setTimeout(() => {
						resolve({
							user: { username: credentials.username || '', role: 'admin' },
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

		async register(credentials: RegisterDto) {
			try {
				const data = await new Promise<RegisterResponse>((resolve, reject) => {
					setTimeout(() => {
						resolve({
							email: { username: credentials.email || '', role: 'admin' },
							refeshToken: new Date().toString(),
						})
					}, 500)
				})
				console.log(data)
				JwtService.saveRefeshToken(data.refeshToken)
				this.userInfo = data.email
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
