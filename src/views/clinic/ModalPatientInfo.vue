<template>
  <v-dialog v-model="openModalPatient" activator="parent" max-width="1000">
    <v-card>
      <v-toolbar color="primary" title="Thêm Bệnh Nhân Mới"></v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="8">
              <v-autocomplete variant="outlined" color="primary"
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball']" label="Họ và tên" required
                placeholder="Tìm kiếm bằng Tên hoặc Số Điện Thoại"></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select variant="outlined" :items="['Nam', 'Nữ']" color="primary" label="Giới tính*"></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field variant="outlined" color="primary" maxlength="10" label="Số điện thoại"></v-text-field>
            </v-col>
            <v-col cols="4" sm="2">
              <v-text-field variant="outlined" type="number" color="primary" label="Ngày sinh" min="1"
                max="31"></v-text-field>
            </v-col>
            <v-col cols="4" sm="2" class="px-0">
              <v-text-field variant="outlined" type="number" color="primary" label="Tháng sinh" min="1"
                max="12"></v-text-field>
            </v-col>
            <v-col cols="4" sm="2">
              <v-text-field variant="outlined" type="number" color="primary" label="Năm sinh" min="1900"
                max="2100"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-autocomplete :items="provinceList" v-model="province" variant="outlined" color="primary"
                label="Thành Phố / Tỉnh">
              </v-autocomplete>
            </v-col>
            <v-col cols="12" sm="4">
              <v-autocomplete :items="districtList" v-model="district" variant="outlined" color="primary"
                label="Quận / Huyện">
              </v-autocomplete>
            </v-col>
            <v-col cols="12" sm="4">
              <v-autocomplete :items="wardList" v-model="ward" variant="outlined" color="primary" label="Phường / Xã">
              </v-autocomplete>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field variant="outlined" color="primary" maxlength="10"
                label="Số Nhà / Đường / Thôn / Xóm"></v-text-field>
            </v-col>
            <v-col cols="12" class="d-flex justify-end">
              <v-btn class="mr-5" color="secondary" size="large" variant="flat" @click="openModalPatient = false">
                Hủy bỏ
              </v-btn>
              <v-btn prepend-icon="mdi-content-save" color="primary" size="large" variant="flat" @click="savePatient">
                Lưu Lại
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import AddressService from '@/service/address.service'
import { ref, watch } from 'vue'

export default {
  props: ['showDrawer'],
  setup() {
    const provinceList = ref<string[]>([])
    const districtList = ref<string[]>([])
    const wardList = ref<string[]>([])
    const province = ref('')
    const district = ref('')
    const ward = ref('')
    const openModalPatient = ref(false)

    AddressService.getAllProvinces().then(res => {
      provinceList.value = res
      if (!provinceList.value.includes(province.value)) {
        province.value = ''
        return
      }
      AddressService.getDistrictsByProvince(province.value).then(res => {
        districtList.value = res
        if (!districtList.value.includes(district.value)) {
          district.value = ''
          return
        }
        AddressService.getWardsByProvinceAndDistrict(province.value, district.value).then(res => wardList.value = res)
      })
    })

    const stopWatchProvince = watch(province, async (newVal, oldVal) => {
      districtList.value = await AddressService.getDistrictsByProvince(newVal)
      district.value = ''
      ward.value = ''
    })
    const stopWatchDistrict = watch(district, async (newVal, oldVal) => {
      if (newVal != '') {
        wardList.value = await AddressService.getWardsByProvinceAndDistrict(province.value, newVal)
      }
      ward.value = ''
    })
    const savePatient = async () => {
      openModalPatient.value = false
      const patient = {
        province: province.value,
        district: district.value,
        ward: ward.value,
        lineAddress: '',
      }
      console.log('hahah', patient)
    }

    return {
      provinceList,
      districtList,
      wardList,
      province,
      district,
      ward,
      savePatient,
      openModalPatient,
    }
  },
}
</script>

<style lang="scss">
.v-autocomplete__content {
  max-height: 400px !important;
}
</style>
