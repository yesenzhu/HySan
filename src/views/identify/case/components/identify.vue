<template>
  <el-form ref="identify" :rules="rules" :model="formData" class="baseinfo-form" label-width="220px">
    <h2 style="width: calc(90vw - 20px); margin-bottom: 10px; border-bottom: 1px dashed #ccc; padding-bottom: 10px; font-size: 18px">1-發現 Identify</h2>

    <el-form-item label="識別碼 Case ID">
      <el-input size="small" v-model="formData.workflowEmailId" placeholder="請輸入" />
    </el-form-item>

    <el-form-item label="案列標題 Case Title" prop="folderEmailId">
      <el-input size="small" v-model="formData.folderEmailId" placeholder="請輸入" />
    </el-form-item>

    <el-form-item label="來源 Origin">
      <el-select v-model="formData.origin" size="small" filterable clearable style="width: 100%" placeholder="電話 Telephone">
        <el-option v-for="item in courseClassifyListCopy" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="個案種類 Subject" prop="subjectType">
      <el-select v-model="formData.subjectType" size="small" filterable clearable style="width: 100%" placeholder="請選擇">
        <el-option v-for="item in subjects" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="案例類型 Case Type">
      <el-select v-model="formData.type" size="small" filterable clearable style="width: 100%" placeholder="請選擇">
        <el-option v-for="item in caseType" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="物業 Property" prop="pyhsicsType">
      <el-select v-model="formData.pyhsicsType" size="small" filterable clearable style="width: 100%" placeholder="請選擇">
        <el-option v-for="item in pyhsics" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="優先順序 Priority">
      <el-select v-model="formData.orderType" size="small" filterable clearable style="width: 100%" placeholder="請選擇">
        <el-option v-for="item in order" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="地點 Location">
      <el-select v-model="formData.locationType" size="small" filterable clearable style="width: 100%" placeholder="請選擇">
        <el-option v-for="item in location" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="巡邏位置記錄 Patrol Location History">
      <el-select v-model="formData.patrolType" size="small" filterable clearable style="width: 100%" placeholder="請選擇">
        <el-option v-for="item in patrol" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="租戶／公共範圍 Tenant / Common Area">
      <el-radio-group v-model="formData.tenement">
        <el-radio :label="1">公共範圍 Common Area</el-radio>
        <el-radio :label="2">租戶範圍 Tenant Area</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否租戶 Is Tenant?">
      <el-radio-group v-model="formData.isTenement">
        <el-radio :label="1">是 Yes</el-radio>
        <el-radio :label="2">否 No</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="租戶名稱 Lease Tenant">
      <el-select v-model="formData.name" size="small" filterable clearable style="width: 100%" placeholder="請選擇">
        <el-option v-for="item in tenementName" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="客戶名稱 Customer Name">
      <el-input size="small" v-model="formData.customerName" placeholder="請輸入" />
    </el-form-item>
    <el-form-item label="單位 Unit">
      <el-select v-model="formData.unit" size="small" filterable clearable style="width: 100%" placeholder="請選擇">
        <el-option v-for="item in unitName" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="聯絡人 Contact Person">
      <el-input size="small" v-model="formData.contractPerson" placeholder="請輸入" />
    </el-form-item>
    <el-form-item label="負責人 Person in Charge">
      <el-select v-model="formData.charge" size="small" filterable clearable style="width: 100%" placeholder="請選擇">
        <el-option v-for="item in chargeName" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="團隊員工 Team Staff">
      <el-select v-model="formData.staff" size="small" filterable clearable style="width: 100%" placeholder="請選擇">
        <el-option v-for="item in staffName" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="描述 Description">
      <el-input type="textarea" :rows="2" v-model="formData.textarea" placeholder="請輸入"></el-input>
    </el-form-item>
    <el-form-item label="附註 Attachment">
      <el-upload class="upload-demo" :limit="3" action="" :auto-upload="false" :file-list="formData.fileList">
        <el-button size="small" type="primary">上載 Upload</el-button>
      </el-upload>
    </el-form-item>
  </el-form>
</template>
<script>
import { courseClassifyListCopy, caseType, subjects, pyhsics, order, location, patrol, tenementName, unitName, chargeName, staffName } from '../mock'
export default {
  data: () => ({
    courseClassifyListCopy,
    caseType,
    subjects,
    pyhsics,
    order,
    location,
    tenementName,
    unitName,
    chargeName,
    staffName,
    patrol: [],
    formData: {
      workflowEmailId: '',
      folderEmailId: '',
      origin: 'telephone',
      type: 1,
      subjectType: null,
      pyhsicsType: null,
      orderType: 2,
      locationType: null,
      patrolType: null,
      tenement: 1,
      isTenement: 1,
      name: null,
      customerName: '',
      unit: null,
      contractPerson: '',
      charge: null,
      staff: '',
      textarea: '',
      fileList: [],
    },
    rules: {
      folderEmailId: [
        {
          required: true,
          message: '值是必需的。',
          trigger: 'change',
        },
      ],
      subjectType: [
        {
          required: true,
          message: '值是必需的。',
          trigger: 'change',
        },
      ],
      pyhsicsType: [
        {
          required: true,
          message: '值是必需的。',
          trigger: 'change',
        },
      ],
    },
  }),
}
</script>
