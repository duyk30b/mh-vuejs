import CONFIG from '@/config'
import axios from 'axios'
import TokensService from './tokens.service'
import { useAuthStore } from '@/stores/auth.store'

const AxiosService = axios.create({
	baseURL: CONFIG.API_URL,
	timeout: CONFIG.TOKENS.ACCESS_DEDUCT * 1000,
	headers: { 'Content-Type': 'application/json' },
})

AxiosService.interceptors.request.use(
	async (config) => {
		const controller = new AbortController()
		if (TokensService.accessExp < Date.now() / 1000 + CONFIG.TOKENS.ACCESS_DEDUCT) {
			await TokensService.getNewAccessToken()
			useAuthStore().userInfo = TokensService.tokenData
		}
		if (!TokensService.accessToken) {
			controller.abort()
		}
		config.headers!['Authorization'] = `Bearer ${TokensService.accessToken}`
		config.signal = controller.signal

		return config
	},
	(error) => Promise.reject(error)
)

AxiosService.interceptors.response.use(
	(response) => response,
	(error: any) => {
		error.message = error?.response?.data?.message || error.message
		return Promise.reject(error)
	}
)

export default AxiosService
