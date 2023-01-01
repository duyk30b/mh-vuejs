<template>
  <v-dialog v-model="openModalPatient" activator="parent" max-width="1000">
    <v-card>
      <v-toolbar color="primary" title="Thêm Bệnh Nhân Mới"></v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12">
            <InputOptions :options="patientList" v-model:searchText="fullName" @selectItem="selectPatient"
              label="Họ và tên" placeholder="Tìm kiếm bằng Tên hoặc Số Điện Thoại">
              <template v-slot:each="{ item: { fullName, phone, birthday, address } }">
                <p> <b>{{ fullName }}</b> - {{ phone }} - {{ timeToText(birthday, "DD/MM/YY") }} </p>
                <p> {{ formatAddress(address, "WW - DD - PP", false) }} </p>
              </template>
            </InputOptions>
          </v-col>
          <v-col cols="12" sm="4">
            <InputPhone v-model:value="phone" label="Số điện thoại" />
          </v-col>
          <v-col cols="12" sm="4">
            <InputDate v-model:value="birthday" label="Ngày sinh" />
          </v-col>
          <v-col cols="12" sm="4">
            <SelectOptions v-model:value="gender" label="Giới tính" :options="[
              { value: 'Male', text: 'Nam' },
              { value: 'Female', text: 'Nữ' },
            ]" />
          </v-col>

          <InputAddress v-model:value="address" />

          <v-col cols="12" class="d-flex justify-end">
            <v-btn class="mr-5" color="secondary" size="large" variant="flat" @click="openModalPatient = false">
              Hủy bỏ
            </v-btn>
            <v-btn prepend-icon="mdi-content-save" color="primary" size="large" variant="flat" @click="savePatient">
              Lưu Lại
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
import InputAddress from '../common/InputAddress.vue'
import InputDate from '../common/InputDate.vue'
import InputOptions from '../common/InputOptions.vue'
import InputPhone from '../common/InputPhone.vue'
import SelectOptions from '../common/SelectOptions.vue'
import AxiosService from '../service/axios.service'
import type { Patient } from '../type/Patient'
import { formatAddress } from '../utils/formatters/address.formatter'
import { timeToText } from '../utils/formatters/time.formatter'

export default {
  components: { InputAddress, InputDate, InputPhone, InputOptions, SelectOptions },
  setup() {
    return {
      patientList: ref([]),
      fullName: ref(''),
      gender: ref(''),
      phone: ref(''),
      birthday: ref(''),
      address: ref(''),

      openModalPatient: ref(false),
      searching: ref(false),
      patient: ref({}),
      timeToText,
      formatAddress,
    }
  },

  watch: {
    async fullName(newVal) {
      if (!newVal) return (this.patientList = [])
      const result = await AxiosService.get(`/patient/search?searchText=${newVal}`)
      this.patientList = result.data
    },
  },

  methods: {
    selectPatient(item: Patient) {
      console.log('🚀 ~ file: ModalPatientInfo.vue:136 ~ selectPatient ~ item', item)
      this.fullName = item.fullName
      this.phone = item.phone
      this.gender = item.gender
      this.birthday = item.birthday
      this.address = item.address
    },

    async savePatient() {
      this.openModalPatient = false
      const patient = {
        fullName: this.fullName,
        gender: this.gender,
        phone: this.phone,
        birthday: this.birthday ? new Date(this.birthday).toISOString() : '',
        address: this.address,
      }
      console.log(
        '🚀 ~ file: ModalPatientInfo.vue:114 ~ savePatient ~ patient',
        patient
      )
      return ''
    },
  },
}
</script>
