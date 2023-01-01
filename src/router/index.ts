import { useAuthStore } from '@/stores/auth.store'
import { createRouter, createWebHistory } from 'vue-router'
import { dashboardRouter } from './dashboard-router'

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
			redirect: '/clinic',
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
			children: dashboardRouter,
		},
		{
			path: '/clinic',
			name: 'Clinic',
			meta: { auth: AuthMiddlewareConst.AUTH },
			component: () => import('../views/clinic/Clinic.vue'),
			children: [
				{
					path: 'patient/:id',
					name: 'ClinicPatientInfo',
					component: () => import('../views/clinic/PatientContent.vue'),
				},
			],
		},
		{
			path: '/pharmacy',
			name: 'Pharmacy',
			meta: { auth: AuthMiddlewareConst.AUTH },
			component: () => import('../views/pharmacy/Pharmacy.vue'),
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
