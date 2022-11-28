import { useAuthStore } from '@/stores/auth.store'
import { createRouter, createWebHistory } from 'vue-router'

enum AuthMiddlewareConst {
	AUTH = 'auth',
	UNAUTH = 'unauth',
	GUEST = 'guest',
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			redirect: '/dashboard',
		},
		{
			path: '/auth',
			children: [
				{
					path: 'login',
					name: 'Login',
					component: () => import('../views/auth/Login.vue'),
				},
				{
					path: 'register',
					name: 'Register',
					component: () => import('../views/auth/Register.vue'),
				},
			],
		},
		{
			path: '/dashboard',
			name: 'Dashboard',
			meta: { auth: AuthMiddlewareConst.AUTH },
			component: () => import('../views/dashboard/Dashboard.vue'),
		},
	],
})

router.beforeEach((to, from, next) => {
	const authStore = useAuthStore()

	if (to.meta.auth === AuthMiddlewareConst.AUTH && !authStore.userInfo) {
		return next({ name: 'Login' })
	} else next()
})

export default router
