import CONFIG from '@/config'
import axios from 'axios'
import TokensService from './token.service'

const TIMEOUT = 10

const AxiosService = axios.create({
	baseURL: CONFIG.API_URL,
	timeout: TIMEOUT * 1000,
	headers: { 'Content-Type': 'application/json' },
})

AxiosService.interceptors.request.use(
	async (config) => {
		if (TokensService.accessExp < Date.now() / 1000 + TIMEOUT) {
			const response = await axios.post(
				`${CONFIG.API_URL}/auth/refresh-token`,
				{ refreshToken: TokensService.refreshToken }
			)
			TokensService.setAccessToken(response.data)
		}
		config.headers!['Authorization'] = `Bearer ${TokensService.accessToken}`
		return config
	},
	(error) => Promise.reject(error)
)

export default AxiosService
