import CONFIG from '@/config'
import axios from 'axios'
import TokensService from './token.service'
import { useAuthStore } from '@/stores/auth.store'

const TIMEOUT = 10

const AxiosService = axios.create({
	baseURL: CONFIG.API_URL,
	timeout: TIMEOUT * 1000,
	headers: { 'Content-Type': 'application/json' },
})

AxiosService.interceptors.request.use(
	async (config) => {
		if (TokensService.accessExp < Date.now() / 1000 + TIMEOUT) {
			try {
				const response: { data: { accessToken: string } } = await axios.post(
					`${CONFIG.API_URL}/auth/refresh-token`,
					{ refreshToken: TokensService.refreshToken }
				)
				TokensService.setAccessToken(response.data.accessToken)
			} catch (error) {
				console.log('🚀 ~ file: axios.service.ts:24 ~ error', error)
				TokensService.destroyTokens()
				useAuthStore().userInfo = null
			}
		}
		config.headers!['Authorization'] = `Bearer ${TokensService.accessToken}`
		return config
	},
	(error) => Promise.reject(error)
)

export default AxiosService
