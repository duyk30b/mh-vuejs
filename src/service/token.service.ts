import jwtDecode from 'jwt-decode'
import type { JwtPayload } from 'jwt-decode'
import type { UserInfo } from '../stores/auth.store'

const AUTH_TOKENS = 'AUTH_TOKENS'

export type IAuthTokens = {
	accessToken?: string
	refreshToken?: string
}

class Tokens {
	accessToken = ''
	accessExp = 0
	refreshToken = ''
	refreshExp = 0

	constructor() {
		this.loadStorageTokens()
	}

	loadStorageTokens() {
		const rawTokens = localStorage.getItem(AUTH_TOKENS) || '{}'
		const authTokens: IAuthTokens = JSON.parse(rawTokens)
		this.updateTempAccessToken(authTokens.accessToken)
		this.updateTempRefreshToken(authTokens.refreshToken)
	}

	updateStorageTokens() {
		localStorage.setItem(AUTH_TOKENS, JSON.stringify({
			accessToken: this.accessToken,
			refressToken: this.refreshToken,
			accessExp: this.accessExp,
			refreshExp: this.refreshExp,
		}))
	}

	destroyTokens() {
		localStorage.removeItem(AUTH_TOKENS)
		this.accessExp = 0
		this.accessToken = ''
		this.refreshToken = ''
		this.refreshExp = 0
	}

	updateTempAccessToken(accessToken: string | undefined) {
		try {
			this.accessToken = accessToken || ''
			const payload = jwtDecode<JwtPayload>(this.accessToken)
			this.accessExp = payload?.exp || 0
		} catch (error) {
			this.accessExp = 0
			console.log('🚀 ~ file: jwt.service.ts:48 ~ Tokens ~ updateTempAccessToken ~ error', error)
		}
	}

	updateTempRefreshToken(refreshToken: string | undefined) {
		try {
			this.refreshToken = refreshToken || ''
			const payload = jwtDecode<JwtPayload>(this.refreshToken)
			this.refreshExp = payload?.exp || 0
		} catch (error) {
			this.refreshExp = 0
			console.log('🚀 ~ file: jwt.service.ts:58 ~ Tokens ~ updateTempRefreshToken ~ error', error)
		}
	}

	setAccessToken(accessToken: string) {
		this.updateTempAccessToken(accessToken)
		this.updateStorageTokens()
	}

	setRefreshToken(refreshToken: string) {
		this.updateTempRefreshToken(refreshToken)
		this.updateStorageTokens()
	}

	setTokens(tokens: IAuthTokens) {
		this.updateTempAccessToken(tokens.accessToken)
		this.updateTempRefreshToken(tokens.refreshToken)
		this.updateStorageTokens()
	}

	getDataAccessToken() {
		try {
			return jwtDecode<JwtPayload>(this.accessToken) as UserInfo
		} catch (error) {
			return null
		}
	}
}

const TokenService = new Tokens()

export default TokenService
