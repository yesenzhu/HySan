<template>
  <el-form :model="formData" class="baseinfo-form" label-width="220px">
    <h2 style="width: calc(90vw - 20px); margin-bottom: 10px; border-bottom: 1px dashed #ccc; padding-bottom: 10px; font-size: 18px">3-確認完成 Confirm</h2>
    <el-form-item label="確認完成時間 Confirmed Time">
      <el-date-picker v-model="formData.confirmedTime" type="date" style="width: 100%" placeholder="选择日期"></el-date-picker>
    </el-form-item>

    <el-form-item label="確認完成人 Confirmed Person / Team">
      <el-select v-model="formData.person" size="small" filterable clearable style="width: 100%" placeholder="請選擇">
        <el-option v-for="item in []" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="確認完成員工 Confirmed By">
      <el-select v-model="formData.employee" size="small" filterable clearable style="width: 100%" placeholder="請選擇">
        <el-option v-for="item in []" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data: () => ({
    formData: {
      confirmedTime: '',
      person: null,
      employee: null,
    },
  }),
}
</script>
