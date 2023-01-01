<template lang="">
  <v-card
    prepend-icon="mdi-bed"
    elevation="0"
    :loading="loadingComponent"
  >
    <template v-slot:title>
        Quản lý bệnh nhân
    </template>
    <v-card-item>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Họ Tên</th>
            <th class="text-left">SĐT</th>
            <th class="text-left">Ngày Sinh</th>
            <th class="text-left">Địa Chỉ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(patient, index) in patientList" :key="index">
            <td>{{ patient.fullName }}</td>
            <td>{{ patient.phone }}</td>
            <td>{{ timeToText(patient.birthday, "DD-MM-YYYY") }}</td>
            <td>{{ formatAddress(patient.address, "W - D") }}</td>
            <td>
              <v-btn variant="flat" color="primary" size="small">
                Sửa
              </v-btn>
              <v-btn variant="flat" color="error" size="small" class="ml-1">
                Xoá
                <v-dialog v-model="dialogDelete" activator="parent" max-width="500">
                  <v-card style="margin-top: -300px">
                    <v-card-text>
                      Thao tác xoá sẽ không thể khôi phục dữ liệu.
                      Bạn có chắc muốn xoá tài khoản nhân viên này ?
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" block @click="dialogDelete = false"
                        >Huỷ</v-btn
                      >
                      <v-btn color="error" block @click="dialogDelete = false"
                        >Xoá</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-item>
  </v-card>
</template>
<script lang="ts">
import AxiosService from '@/service/axios.service'
import { ref } from 'vue'
import { timeToText } from '@/utils/formatters/time.formatter'
import { formatAddress } from '@/utils/formatters/address.formatter'
import type { Patient } from '@/type/Patient'

export default {
  setup() {
    const patientList = ref([] as Patient[])
    const loadingComponent = ref(true)
    AxiosService.get('/patient').then((res) => {
      patientList.value = res.data as Patient[]
      loadingComponent.value = false
    })
    return { patientList, timeToText, formatAddress, dialogDelete: ref(false), loadingComponent }
  },
  methods: {
    removePatient(id: number) {
      console.log(id)
    },
  },
}
</script>
<style lang=""></style>
