import '@mdi/font/css/materialdesignicons.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import App from './App.vue'
import './assets/main.scss'
import router from './router'
import TokensService from './service/tokens.service'
import { registerDirective } from './utils/vue-config/directive'

const start = async () => {
	await TokensService.init()

	const vuetify = createVuetify({
		components,
		directives,
		icons: {
			defaultSet: 'mdi',
			aliases,
			sets: { mdi },
		},
		theme: {
			defaultTheme: 'myCustomTheme',
			themes: {
				myCustomTheme: {
					colors: {
						primary: '#375e97',
						secondary: '#fb6542',
						accent: '#82B1FF',
					},
				},
			},
		},
	})

	const app = createApp(App)

	registerDirective(app)
	app.use(vuetify)
	app.use(createPinia())
	app.use(router)

	app.mount('#app')
}

start()
