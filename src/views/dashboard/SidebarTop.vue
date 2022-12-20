<template>
	<div class="sidebar-top">
		<div class="logo-image">
			<img src="@/assets/images/logo-plgrim.png">
		</div>
		<div class="logo-text">Medihome</div>
		<div id="toggle-sidebar" @click="toggleSidebar = !toggleSidebar">
			<i class="bars-solid"></i>
		</div>
	</div>
</template>
<script lang="ts">
export default {
	setup() {
		return { toggleSidebar: true }
	},
}
</script>
<style lang="scss" scoped>
.sidebar-top {
	position: relative;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 10px 10px 20px;
	background-color: white;
	border-right: 1px solid #e0e0e0;

	.logo-image {
		width: 40px;

		img {
			max-width: 90%;
			filter: invert(0.2);
		}
	}

	.logo-text {
		flex: 1;
		text-align: center;
		font-size: 24px;
		font-weight: 700;
		opacity: 0.7;
		text-transform: uppercase;
	}

	#toggle-sidebar {
		cursor: pointer;
		user-select: none;
		font-size: 22px;
		opacity: 0.7;

		&:hover {
			opacity: 1;
			color: #007bff;
		}
	}
}
</style>
