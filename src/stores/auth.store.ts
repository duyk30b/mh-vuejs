import CONFIG from '@/config'
import axios from 'axios'
import { defineStore } from 'pinia'
import TokenService from '../service/token.service'
import type { IAuthTokens } from '../service/token.service'

export type UserInfo = {
	username: string;
	role: string;
	uid: number;
	cid: number;
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

export const useAuthStore = defineStore('auth-store', {
	state: () => ({
		userInfo: TokenService.getDataAccessToken(),
		error: null,
	}),
	actions: {
		async login(credentials: LoginDto) {
			try {
				const response = await axios.post(`${CONFIG.API_URL}/auth/login`, credentials)
				const data = response.data as IAuthTokens
				TokenService.setTokens(data)
				this.userInfo = TokenService.getDataAccessToken()
				this.error = null
			} catch (error: any) {
				this.userInfo = null
				this.error = error.response.data
				throw new Error(error.response.data.message)
			}
		},

		async register(credentials: RegisterDto) {
			try {
				const response = await axios.post(`${CONFIG.API_URL}/auth/register`, credentials)
				const data = response.data as IAuthTokens
				TokenService.setTokens(data)
				this.userInfo = TokenService.getDataAccessToken()
				this.error = null
			} catch (error: any) {
				this.userInfo = null
				this.error = error.response.data
				throw new Error(error.response.data.message)
			}
		},
		async logout() {
			TokenService.destroyTokens()
			this.userInfo = null
		},
	},
})
