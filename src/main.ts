import '@mdi/font/css/materialdesignicons.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import App from './App.vue'
import router from './router'

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
		themes: { myCustomTheme: { colors: { primary: '#303f9f' } } },
	},
})

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
