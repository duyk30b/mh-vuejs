
<template>
  <RouterView />
</template>
<script lang="ts">
import { useAuthStore } from '@/stores/auth.store'
import { RouterView, useRouter } from 'vue-router'

export default {
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    authStore.$subscribe((mutation, state) => {
      if (state.userInfo == null) {
        router.push({ name: 'Login' })
      }
    })

    return {}
  },
}
</script>
<style scoped>

</style>
