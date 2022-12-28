import CONFIG from '@/config'
import axios from 'axios'
import { defineStore } from 'pinia'
import type { IAuthTokens } from '../service/tokens.service'
import TokensService from '../service/tokens.service'

type LoginDto = {
	cPhone: string;
	username: string;
	password: string;
}

type RegisterDto = {
	phone: string;
	email: string;
	username: string;
	password: string;
}

export const useAuthStore = defineStore('auth-store', {
	state: () => ({ userInfo: TokensService.tokenData }),
	actions: {
		async login(credentials: LoginDto) {
			const response = await axios.post(`${CONFIG.API_URL}/auth/login`, credentials)
			const data = response.data as IAuthTokens
			TokensService.setTokens(data)
			this.userInfo = TokensService.tokenData
		},

		async register(credentials: RegisterDto) {
			const response = await axios.post(`${CONFIG.API_URL}/auth/register`, credentials)
			const data = response.data as IAuthTokens
			TokensService.setTokens(data)
			this.userInfo = TokensService.tokenData
		},
		async logout() {
			TokensService.destroyTokens()
			this.userInfo = null
		},
	},
})
