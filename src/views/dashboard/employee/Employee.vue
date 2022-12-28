<template lang="">
  <v-card
    prepend-icon="mdi-account-multiple"
    title="Quản lý nhân viên"
    elevation="0"
  >
    <v-card-item class="d-flex justify-end">
      <v-btn variant="outlined" color="primary"> Thêm nhân viên mới </v-btn>
    </v-card-item>
    <v-card-item>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Username</th>
            <th class="text-left">Họ Tên</th>
            <th class="text-left">Ngày Tạo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in employeeList" :key="index">
            <td>{{ employee.username }}</td>
            <td>{{ employee.fullName }}</td>
            <td>{{ timeToText(employee.createdAt, "DD-MM-YYYY") }}</td>
            <td>
              <v-btn variant="outlined" color="primary" size="small">
                Sửa
              </v-btn>
              <v-btn variant="outlined" color="error" size="small" class="ml-1">
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

interface Employee {
  id: number;
  fullName: string;
  username: string;
  createdAt: string;
}

export default {
  setup() {
    const employeeList = ref([] as Employee[])
    AxiosService.get('/employee').then((res) => {
      employeeList.value = res.data as Employee[]
    })
    return { employeeList, timeToText, dialogDelete: ref(false) }
  },
  methods: {
    removeEmployee(id: number) {
      console.log(id)
    },
  },
}
</script>
<style lang=""></style>
