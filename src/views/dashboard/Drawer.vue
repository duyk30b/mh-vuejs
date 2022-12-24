<template>
	<v-navigation-drawer :model-value="showDrawer" @update:modelValue="$emit('update:showDrawer')">
		<v-divider></v-divider>
		<v-list density="compact" nav>
			<v-list-subheader>Quản Lý Dữ Liệu Cá Nhân</v-list-subheader>
			<v-list-item title="Thông tin cá nhân" prepend-icon="mdi-account" value="user-info"></v-list-item>
			<v-list-item title="Đơn thuốc" prepend-icon="mdi-text-box-edit-outline" value="don-thuoc"></v-list-item>
			<v-list-item title="Nhập thuốc" prepend-icon="mdi-cart-outline" value="nhap-thuoc"></v-list-item>

			<v-list-subheader>Quản Lý Phòng Khám</v-list-subheader>
			<v-list-item title="Bệnh Nhân" prepend-icon="mdi-bed" value="all-patiefnt"></v-list-item>
			<v-list-item title="Lượt Khám Bệnh" prepend-icon="mdi-medication-outline"
				value="all-luo4tkham"></v-list-item>
			<v-list-item title="Phiếu Nhập Thuốc" prepend-icon="mdi-cart-outline"
				value="all-p23hieu-nhap"></v-list-item>
			<v-list-item title="Đơn Thuốc" prepend-icon="mdi-text-box-edit-outline"
				value="all-don-tshhuoc"></v-list-item>
			<v-list-item title="Tủ Thuốc" prepend-icon="mdi-store" value="all-tu-thuoư3c"></v-list-item>
			<v-list-item title="Nhân Viên" prepend-icon="mdi-account-multiple" value="all-nhans-vien"></v-list-item>
			<v-list-item title="Quản Lý Tài Chính" prepend-icon="mdi-chart-areaspline" value="tai-chinh"></v-list-item>

			<v-list-subheader>Quản Lý Khác</v-list-subheader>
			<v-list-item title="Quản Lý Thông Báo" prepend-icon="mdi-volume-high" value="d-chinh"></v-list-item>
			<v-list-item title="Cài Đặt Phòng Khám" prepend-icon="mdi-cog-outline" value="taisdf-chinh"></v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>
<script lang="ts">
export default { props: ['toggerDrawer', 'showDrawer'] }
</script>
<style lang="scss" scoped>

</style>
