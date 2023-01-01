<template>
  <v-col cols="12" sm="4">
    <InputHint :options="provinceList" :searchText="province" @update:searchText="changeProvince"
      label="Thành Phố / Tỉnh" />
  </v-col>
  <v-col cols="12" sm="4">
    <InputHint :options="districtList" :searchText="district" @update:searchText="changeDistrict"
      label="Quận / Huyện" />
  </v-col>
  <v-col cols="12" sm="4">
    <InputHint :options="wardList" :searchText="ward" @update:searchText="changeWard" label="Phường / Xã" />
  </v-col>
  <v-col cols="12" sm="12">
    <InputText :value="street" @update:value="changeStreet" label="Số Nhà / Đường / Thôn / Xóm" />
  </v-col>
</template>
<script lang="ts">
import { ref } from 'vue'
import AddressService from '../service/address.service'
import { addressStringToObject, addressObjectToString } from '../utils/formatters/address.formatter'
import InputHint from './InputHint.vue'
import InputText from './InputText.vue'

export default {
  components: { InputHint, InputText },
  props: { value: { type: String, default: () => '' } },
  setup() {
    const provinceList = AddressService.getAllProvinces()
    return {
      provinceList: ref<string[]>(provinceList),
      districtList: ref<string[]>([]),
      wardList: ref<string[]>([]),
      province: ref(''),
      district: ref(''),
      ward: ref(''),
      street: ref(''),
    }
  },

  mounted() {
    if (!this.provinceList.includes(this.province)) {
      this.province = ''
      return
    }
    AddressService.getDistrictsByProvince(this.province).then((res) => {
      this.districtList = res
      if (!this.districtList.includes(this.district)) {
        this.district = ''
        return
      }
      AddressService.getWardsByProvinceAndDistrict(
        this.province,
        this.district
      ).then((res) => (this.wardList = res))
    })
  },

  watch: {
    value(newValue) {
      const addressObj = addressStringToObject(newValue)
      this.province = addressObj.province
      this.district = addressObj.district
      this.ward = addressObj.ward
      this.street = addressObj.street
    },
  },

  methods: {
    async changeProvince(val: string) {
      this.province = val
      if (val != '') {
        this.districtList = await AddressService.getDistrictsByProvince(val)
      }
      if (!this.districtList.includes(this.district)) this.district = ''
      this.emitParent()
    },
    async changeDistrict(val: string) {
      this.district = val
      if (val != '') {
        this.wardList = await AddressService.getWardsByProvinceAndDistrict(this.province, val)
      }
      if (!this.wardList.includes(this.ward)) this.ward = ''
      this.emitParent()
    },
    changeWard(val: string) {
      this.ward = val
      this.emitParent()
    },
    changeStreet(val: string) {
      this.street = val
      this.emitParent()
    },

    emitParent() {
      const address = addressObjectToString({
        province: this.province,
        district: this.district,
        ward: this.ward,
        street: this.street,
      }, 'PP -- DD -- WW -- SS')

      this.$emit('update:value', address)
    },
  },
}
</script>
