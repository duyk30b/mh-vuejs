export const dashboardRouter = [
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
]
