<template>
  <v-navigation-drawer :model-value="showDrawer" @update:modelValue="(val) => $emit('update:showDrawer', val)">
    <v-list>
      <v-list-item>
        <v-btn variant="flat" color="secondary">
          Thêm Bệnh Nhân Mới
          <ModalPatientInfo />
        </v-btn>
      </v-list-item>
    </v-list>

    <v-list density="compact" nav>
      <v-list-subheader>Bệnh nhân khám trong ngày</v-list-subheader>
      <template v-for="(item, i) in menuItems" :key="i">
        <v-list-item v-if="item.title" :value="item" :title="item.title" :prepend-icon="item.icon" :to="item.router"
          active-color="primary">
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import ModalPatientInfo from '../../components/ModalPatientInfo.vue'
import AxiosService from '@/service/axios.service'
import type { Patient } from '@/type/Patient'
import { ref } from 'vue'

export default {
  components: { ModalPatientInfo },
  props: ['showDrawer'],
  async setup() {
    return { menuItems: ref<any[]>([]) }
  },
  mounted() {
    this.getPatientsData()
  },
  methods: {
    async getPatientsData() {
      const res = await AxiosService.get('/patient')
      this.menuItems = res.data.slice(0, 50).map((item: any) => {
        return {
          title: item.fullName,
          icon: item.gender === 'Male' ? 'mdi-face-man' : 'mdi-face-woman-shimmer',
          router: { name: 'ClinicPatientInfo', params: { id: item.id } },
        }
      })
    },
  },
}
</script>

<style lang="scss">

</style>
