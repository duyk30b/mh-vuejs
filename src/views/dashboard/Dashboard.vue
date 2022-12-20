<template>
	<div class="wrapper">
		<div class="sidebar">
			<SidebarTop />
			<TreeMenu />
		</div>
		<div class="main">
			<HeaderTop />
			<MainContent />
		</div>
	</div>
</template>

<script lang="ts">
import HeaderTop from './HeaderTop.vue'
import TreeMenu from './TreeMenu.vue'
import SidebarTop from './SidebarTop.vue'
import MainContent from './MainContent.vue'

export default { components: { HeaderTop, TreeMenu, SidebarTop, MainContent } }
</script>
<style lang="scss" scoped>
.wrapper {
	display: flex;
	height: 100vh;

	.sidebar {
		width: 300px;
		display: flex;
		flex-direction: column;
	}

	.main {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
}
</style>
