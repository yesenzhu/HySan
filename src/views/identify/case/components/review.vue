<template>
  <el-form
    :model="formData"
    class="baseinfo-form"
    label-width="220px"
  >
    <h2
      style="
        width: calc(90vw - 20px);
        margin-bottom: 10px;
        border-bottom: 1px dashed #ccc;
        padding-bottom: 10px;
        font-size: 18px;
      "
    >
      4-評審 Review
    </h2>

    <el-form-item label="評審時間 Review Time">
      <el-date-picker
        v-model="formData.time"
        type="daterange"
        range-separator="至"
        start-placeholder="開始日期"
        end-placeholder="結束日期"
      >
      </el-date-picker>
    </el-form-item>

    <el-form-item label="評審人 Review Person / Team">
      <el-select
        v-model="formData.person"
        size="small"
        filterable
        clearable
        style="width: 100%"
        placeholder="請選擇"
      >
        <el-option
          v-for="item in []"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="評審員工 Review By">
      <el-select
        v-model="formData.employee"
        size="small"
        filterable
        clearable
        style="width: 100%"
        placeholder="請選擇"
      >
        <el-option
          v-for="item in []"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <h4
      style="
        width: calc(90vw - 20px);
        margin-bottom: 10px;
        border-bottom: 1px dashed #ccc;
        padding-bottom: 10px;
      "
    >
      時間線 Timeline
    </h4>
    <el-form-item label="跟進詳情 Follow up Action">
      <el-input size="small" v-model="formData.details" placeholder="請輸入" />
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data: () => ({
    formData: {
      time: "",
      person: null,
      employee: null,
      details: null,
    },
  }),
};
</script>
