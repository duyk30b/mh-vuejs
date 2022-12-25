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
			children: [
				{
					path: 'user/info',
					name: 'UserInfo',
					component: () => import('../views/dashboard/user-info/UserInfo.vue'),
				},
				{
					path: 'user/prescription',
					name: 'UserPrescription',
					component: () => import('../views/dashboard/prescription/Prescription.vue'),
				},
				{
					path: 'user/medicine-receipt',
					name: 'UserMedicineReceipt',
					component: () => import('../views/dashboard/medicine-receipt/MedicineReceipt.vue'),
				},
				{
					path: 'clinic/patient',
					name: 'ClinicPatient',
					component: () => import('../views/dashboard/patient/Patient.vue'),
				},
				{
					path: 'clinic/admission',
					name: 'Admission',
					component: () => import('../views/dashboard/admission/Admission.vue'),
				},
				{
					path: 'clinic/prescription',
					name: 'ClinicPrescription',
					component: () => import('../views/dashboard/prescription/Prescription.vue'),
				},
				{
					path: 'clinic/medicine-receipt',
					name: 'ClinicMedicineReceipt',
					component: () => import('../views/dashboard/medicine-receipt/MedicineReceipt.vue'),
				},
				{
					path: 'clinic/warehouse',
					name: 'Warehouse',
					component: () => import('../views/dashboard/warehouse/Warehouse.vue'),
				},
				{
					path: 'clinic/employee',
					name: 'Employee',
					component: () => import('../views/dashboard/employee/Employee.vue'),
				},
				{
					path: 'clinic/finance',
					name: 'Finance',
					component: () => import('../views/dashboard/finance/Finance.vue'),
				},
				{
					path: 'setting/message',
					name: 'MessageSetting',
					component: () => import('../views/dashboard/setting/MessageSetting.vue'),
				},
				{
					path: 'setting/clinic',
					name: 'ClinicSetting',
					component: () => import('../views/dashboard/setting/ClinicSetting.vue'),
				},
			],
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
