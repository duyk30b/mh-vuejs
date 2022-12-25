<template>
  <v-navigation-drawer :model-value="showDrawer" @update:modelValue="(val) => $emit('update:showDrawer', val)">
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <template v-for="(item, i) in menuItems" :key="i">
        <v-list-subheader v-if="item.subtitle">{{ item.subtitle }}</v-list-subheader>
        <v-list-item v-if="item.title" :value="item" :title="item.title" :prepend-icon="item.icon" :to="item.router"
          active-color="primary">
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
export default {
	props: ['showDrawer'],
	data: () => {
		return {
			menuItems: [
				{ subtitle: 'Quản Lý Dữ Liệu Cá Nhân' },
				{ title: 'Thông tin cá nhân', icon: 'mdi-account', router: { name: 'UserInfo' } },
				{ title: 'Đơn thuốc', icon: 'mdi-text-box-edit-outline', router: { name: 'UserPrescription' } },
				{ title: 'Nhập thuốc', icon: 'mdi-cart-outline', router: { name: 'UserMedicineReceipt' } },

				{ subtitle: 'Quản Lý Phòng Khám' },
				{ title: 'Bệnh nhân', icon: 'mdi-bed', router: { name: 'ClinicPatient' } },
				{ title: 'Lượt Khám Bệnh', icon: 'mdi-account', router: { name: 'Admission' } },
				{ title: 'Đơn thuốc', icon: 'mdi-text-box-edit-outline', router: { name: 'ClinicPrescription' } },
				{ title: 'Nhập thuốc', icon: 'mdi-cart-outline', router: { name: 'ClinicMedicineReceipt' } },
				{ title: 'Tủ Thuốc', icon: 'mdi-store', router: { name: 'Warehouse' } },
				{ title: 'Nhân Viên', icon: 'mdi-account-multiple', router: { name: 'Employee' } },
				{ title: 'Quản Lý Tài Chính', icon: 'mdi-chart-areaspline', router: { name: 'Finance' } },

				{ subtitle: 'Cài đặt Khác' },
				{ title: 'Quản Lý Thông Báo', icon: 'mdi-volume-high', router: { name: 'MessageSetting' } },
				{ title: 'Cài Đặt Phòng Khám', icon: 'mdi-cog-outline', router: { name: 'ClinicSetting' } },
			],
		}
	},
}
</script>
<style lang="scss" scoped>

</style>
