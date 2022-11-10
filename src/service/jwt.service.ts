const REFRESH_TOKEN = 'REFRESH_TOKEN'

const JwtService = {
	getRefreshToken: (): string | null => {
		return window.localStorage.getItem(REFRESH_TOKEN)
	},
	saveRefeshToken: (refreshToken: string): void => {
		window.localStorage.setItem(REFRESH_TOKEN, refreshToken)
	}
	,
	destroyRefreshToken: (): void => {
		window.localStorage.removeItem(REFRESH_TOKEN)
	},
}

export default JwtService
