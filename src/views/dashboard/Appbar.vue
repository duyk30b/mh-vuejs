<template>
	<v-app-bar elevation="1">
		<v-app-bar-nav-icon :icon="showDrawer ? 'mdi-format-indent-decrease' : 'mdi-format-indent-increase'"
			variant="text" @click.stop="$emit('update:showDrawer', !showDrawer)">
		</v-app-bar-nav-icon>

		<v-app-bar-title>Medihome</v-app-bar-title>

		<v-spacer></v-spacer>

		<v-menu>
			<template v-slot:activator="{ props }">
				<v-btn class="text-none" v-bind="props" stacked>
					<!-- <v-badge content="4" color="error"> -->
					<v-icon>mdi-message-text-outline</v-icon>
					<!-- </v-badge> -->
				</v-btn>
			</template>

			<v-list>
				<v-list-item title="Chức năng đang phát triển" subtitle="Các bạn vui lòng đợi thêm thời gian nữa nhé">
				</v-list-item>
			</v-list>
		</v-menu>

		<v-menu>
			<template v-slot:activator="{ props }">
				<v-btn class="text-none" v-bind="props" stacked>
					<!-- <v-badge content="4" color="error"> -->
					<v-icon>mdi-bell-ring-outline</v-icon>
					<!-- </v-badge> -->
				</v-btn>
			</template>

			<v-list>
				<v-list-item title="Chức năng đang phát triển" subtitle="Các bạn vui lòng đợi thêm thời gian nữa nhé">
				</v-list-item>
			</v-list>
		</v-menu>

		<v-menu min-width="200px" rounded>
			<template v-slot:activator="{ props }">
				<v-btn icon v-bind="props" class="ml-4">
					<v-avatar color="brown" size="large">
						<v-img src="https://randomuser.me/api/portraits/men/9.jpg" alt="John"></v-img>
					</v-avatar>
				</v-btn>
			</template>
			<v-card>
				<v-card-text>
					<v-btn rounded variant="text">
						Trang cá nhân
					</v-btn>
					<v-divider class="my-3"></v-divider>
					<v-btn rounded variant="text" @click="startLogout">
						Đăng xuất
					</v-btn>
				</v-card-text>
			</v-card>
		</v-menu>
	</v-app-bar>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { ref } from 'vue'

export default {
	props: ['showDrawer'],
	setup() {
		const router = useRouter()
		const authStore = useAuthStore()

		const startLogout = async () => {
			await authStore.logout()
			router.push({ name: 'Login' })
		}
		return {
			startLogout,
			messageBadge: ref(5),
			alertBadge: ref(10),
			user: {
				initials: 'JD',
				fullName: 'John Doe',
				email: 'john.doe@doe.com',
			},
		}
	},
}
</script>

<style lang="scss" scoped>

</style>
