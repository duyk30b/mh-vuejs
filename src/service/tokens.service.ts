import CONFIG from '@/config'
import axios from 'axios'
import type { JwtPayload } from 'jwt-decode'
import jwtDecode from 'jwt-decode'

export type IAuthTokens = {
	accessToken: string
	refreshToken: string
}

export type TokenData = JwtPayload & {
	username?: string;
	role?: string;
	uid?: number;
	cid?: number;
} | null

class Tokens {
	accessToken = ''
	refreshToken = ''
	accessExp = 0
	refreshExp = 0
	tokenData: TokenData = null
	loadAccessToken: any = false

	async init() {
		const rawTokens = localStorage.getItem(CONFIG.TOKENS.KEY)
		if (!rawTokens) return

		const authTokens: IAuthTokens = JSON.parse(rawTokens)

		try {
			const refreshPayload = jwtDecode<JwtPayload>(authTokens.refreshToken)
			if (!refreshPayload.exp || refreshPayload.exp < Date.now() / 1000 + CONFIG.TOKENS.REFRESH_DEDUCT) {
				throw new Error('RefreshToken invalid !')
			}
			this.refreshToken = authTokens.refreshToken
			this.refreshExp = refreshPayload.exp
		} catch (error) {
			console.log('🚀 ~ file: tokens.service.ts:44 ~ Tokens ~ load RefreshTokens ~ error', error)
			this.destroyTokens()
			return
		}

		try {
			const accessPayload = jwtDecode<JwtPayload>(authTokens.accessToken)
			if (!accessPayload.exp || accessPayload.exp < Date.now() / 1000 + CONFIG.TOKENS.ACCESS_DEDUCT) {
				throw new Error('AccessToken invalid !')
			}
			this.accessToken = authTokens.accessToken
			this.tokenData = accessPayload
			this.accessExp = accessPayload.exp || 0
		} catch (error) {
			console.log('🚀 ~ file: tokens.service.ts:58 ~ Tokens ~ load AccessTokens ~ error', error)
			await this.getNewAccessToken()
		}
	}

	async getNewAccessToken() {
		try {
			if (!this.loadAccessToken) {
				const url = `${CONFIG.API_URL}/auth/refresh-token`
				this.loadAccessToken = axios.post(url, { refreshToken: this.refreshToken })
			}
			const response: { data: { accessToken: string } } = await this.loadAccessToken
			this.accessToken = response.data.accessToken
			this.tokenData = jwtDecode<JwtPayload>(this.accessToken)
			this.accessExp = this.tokenData.exp || 0
		} catch (error) {
			console.log('🚀 ~ file: tokens.service.ts:79 ~ Tokens ~ getNewAccessToken ~ error', error)
			this.accessToken = ''
			this.accessExp = 0
			this.tokenData = null
		} finally {
			this.loadAccessToken = false
			this.updateStorageTokens()
		}
	}

	setTokens(tokens: IAuthTokens) {
		try {
			const refreshPayload = jwtDecode<JwtPayload>(tokens.refreshToken)
			const accessPayload = jwtDecode<JwtPayload>(tokens.accessToken)
			this.accessToken = tokens.accessToken
			this.refreshToken = tokens.refreshToken
			this.accessExp = accessPayload.exp || 0
			this.refreshExp = refreshPayload.exp || 0
			this.tokenData = accessPayload
		} catch (error) {
			console.log('🚀 ~ file: tokens.service.ts:105 ~ Tokens ~ setTokens ~ error', error)
			this.accessToken = ''
			this.refreshToken = ''
			this.accessExp = 0
			this.refreshExp = 0
			this.tokenData = null
		} finally {
			this.updateStorageTokens()
		}
	}

	updateStorageTokens() {
		localStorage.setItem(CONFIG.TOKENS.KEY, JSON.stringify({
			accessToken: this.accessToken,
			refreshToken: this.refreshToken,
		}))
	}

	destroyTokens() {
		this.accessToken = ''
		this.refreshToken = ''
		this.accessExp = 0
		this.refreshExp = 0
		this.tokenData = null
		localStorage.removeItem(CONFIG.TOKENS.KEY)
	}
}

const TokensService = new Tokens()

export default TokensService
