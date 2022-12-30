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
import ModalPatientInfo from './ModalPatientInfo.vue'

export default {
  components: { ModalPatientInfo },
  props: ['showDrawer'],
  async setup() {
    return {
      menuItems: [
        { subtitle: 'Bệnh nhân khám trong ngày' },
        { title: 'Nguyễn Văn Trung', icon: 'mdi-account', router: { name: 'ClinicPatientInfo', params: { id: 1 } } },
        { title: 'Nguyễn Văn Khanh', icon: 'mdi-account', router: { name: 'ClinicPatientInfo', params: { id: 2 } } },
        { title: 'Lê Kiều Trang', icon: 'mdi-account', router: { name: 'ClinicPatientInfo', params: { id: 3 } } },
        { title: 'Phạm Hoàng Mai', icon: 'mdi-account', router: { name: 'ClinicPatientInfo', params: { id: 4 } } },
        { title: 'Trần Tuyết Trinh', icon: 'mdi-account', router: { name: 'ClinicPatientInfo', params: { id: 5 } } },
      ],
    }
  },
}
</script>

<style lang="scss">

</style>
