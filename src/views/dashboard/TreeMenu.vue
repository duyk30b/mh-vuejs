<template>
	<div class="tree-menu">
		<div class="tree-label">
			Quản lý dữ liệu cá nhân
		</div>
		<div class="tree-item">
			<div class="icon"><i class="user-solid"></i></div>
			<span class="title">Thông tin cá nhân</span>
		</div>
		<div class="tree-item">
			<div class="icon"><i class="bed-pulse-solid"></i></div>
			<span class="title">Bệnh nhân</span>
		</div>
		<div class="tree-item">
			<div class="icon"><i class=" book-medical-solid"></i></div>
			<span class="title">Lượt khám</span>
		</div>
		<div class="tree-item">
			<div class="icon"><i class="cart-shopping-solid"></i></div>
			<span class="title">Phiếu nhập thuốc</span>
		</div>
		<div class="tree-item">
			<div class="icon"><i class="pen-to-square-solid"></i></div>
			<span class="title">Đơn thuốc</span>
		</div>
		<div class="tree-label">
			Quản lý phòng khám
		</div>
		<div class="tree-item">
			<div class="icon"><i class="bed-pulse-solid"></i></div>
			<span class="title">Tất cả bệnh nhân</span>
		</div>
		<div class="tree-item">
			<div class="icon"><i class=" book-medical-solid"></i></div>
			<span class="title">Tất cả lượt khám</span>
		</div>
		<div class="tree-item">
			<div class="icon"><i class="cart-shopping-solid"></i></div>
			<span class="title">Tất cả phiếu nhập thuốc</span>
		</div>
		<div class="tree-item">
			<div class="icon"><i class="pen-to-square-solid"></i></div>
			<span class="title">Tất cả đơn thuốc</span>
		</div>
		<div class="tree-item">
			<div class="icon"><i class="shop-solid"></i></div>
			<span class="title">Tủ thuốc</span>
		</div>
		<div class="tree-item">
			<div class="icon"><i class="user-nurse-solid"></i></div>
			<span class="title">Danh sách nhân viên</span>
		</div>
		<div class="tree-item">
			<div class="icon"><i class="calendar-regular"></i></div>
			<span class="title">Quản lý tài chính</span>
		</div>
		<div class="tree-label">
			Quản lý khác
		</div>
		<div class="tree-item">
			<div class="icon"><i class="bell-solid"></i></div>
			<span class="title">Quản lý thông báo</span>
		</div>
		<div class="tree-item">
			<div class="icon"><i class="circle-question-regular"></i></div>
			<span class="title">Cài đặt phòng khám</span>
		</div>
	</div>
</template>
<script lang="ts">
export default {
	setup() {
		return { a: 2 }
	},
}
</script>
<style lang="scss" scoped>
.tree-menu {
	--title-font-size: 16px;
	--label-font-size: 11px;
	--icon-font-size: 18px;
	--color-black-hover: #000;
	--color-active: #007bff;
	--item-height: 48px;
	--item-padding: 10px 20px 10px 10px;
	--item-icon-width: 45px;
	--item-background-color-hover: #ebebeb;
	--item-background-color-active: #f3f6f9;
	--scroll-bar-color-track: white;
	--scroll-bar-color-thumb: rgb(52, 58, 64, 0.1);
	--scroll-bar-width: 5px;
	--border-color-basic: #e0e0e0;

	height: calc(100vh - var(--header-height));
	width: 100%;
	position: relative;
	color: var(--color-black);
	flex: 1;
	overflow-y: hidden;
	overflow-x: hidden;
	padding-right: var(--scroll-bar-width);
	background-color: white;
	border-right: 1px solid var(--border-color-basic);

	.tree-label {
		height: var(--item-height);
		padding: var(--item-padding);
		display: flex;
		align-items: center;
		opacity: 0.7;
		font-size: var(--label-font-size);
		font-weight: bold;
		text-transform: uppercase;
		white-space: nowrap;
		overflow: hidden;
	}

	.tree-item {
		height: var(--item-height);
		padding: var(--item-padding);
		display: flex;
		align-items: baseline;
		cursor: pointer;
		user-select: none;
		position: relative;
		white-space: nowrap;
		overflow: hidden;

		.icon {
			font-size: var(--icon-font-size);
			width: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			opacity: 0.6;
		}

		.title {
			font-size: var(--title-font-size);
			opacity: 0.9;

		}

		&:hover {
			.icon {
				opacity: 1;
			}

			.title {
				opacity: 1;
			}
		}

		&.active {
			.icon {
				opacity: 1;
			}

			.title {
				opacity: 1;
			}

			color: var(--color-active);
		}
	}
}
</style>
