<template lang="">
  <v-card-text>
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
          <td>{{ new Date(employee.createdAt) }}</td>
          <td>{{ employee.id }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card-text>
</template>
<script lang="ts">
import AxiosService from '@/service/axios.service'
import { ref } from 'vue'

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
    return { employeeList }
  },
}
</script>
<style lang=""></style>
