<template>
  <div class="main">
    <el-card>
      <span style="font-weight: 700; font-size: 18px">Confirm Case</span>
    </el-card>
    <div class="add-content">
      <el-card class="add-card">
        <div class="baseinfo-container">
          <div class="baseinfo-card">
            <el-form
              ref="caseForm"
              :model="formData"
              :rules="rules"
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
                System Section
              </h2>

              <el-form-item label="{/_currentuser}">
                <el-input size="small" v-model="formData.workflowEmailId" />
              </el-form-item>

              <el-form-item label="case folder id">
                <el-input size="small" v-model="formData.folderEmailId" />
              </el-form-item>

              <el-form-item label="3">
                <el-input size="small" v-model="formData.number" />
              </el-form-item>

              <el-form-item label="Submitter Team">
                <el-input size="small" v-model="formData.caseName" />
              </el-form-item>

              <el-form-item label="Instructing Department">
                <el-input size="small" v-model="formData.department" />
              </el-form-item>

              <el-form-item label="Instructing Department Code">
                <el-input size="small" v-model="formData.departmentCode" />
              </el-form-item>

              <h2
                style="
                  width: calc(90vw - 20px);
                  margin: 40px 0 10px 0;
                  border-bottom: 1px dashed #ccc;
                  padding-bottom: 10px;
                  font-size: 18px;
                "
              >
                1-發現 Identify
              </h2>

              <el-form-item label="識別碼 Case ID">
                <el-input size="small" v-model="formData.caseID" />
              </el-form-item>

              <el-form-item label="案列標題 Case Title" prop="caseTitle">
                <el-input size="small" v-model="formData.caseTitle" />
              </el-form-item>

              <el-form-item label="來源 Origin">
                <el-select
                  v-model="formData.origin"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="電話 Telephone"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="個案種類 Subject" prop="subject">
                <el-select
                  v-model="formData.subject"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="優先順序 Priority">
                <el-select
                  v-model="formData.priority"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="標準 Normal"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="案例類型 Case Type">
                <el-select
                  v-model="formData.caseType"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="問題回報 Problem Report"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="物業 Property">
                <el-select
                  v-model="formData.caseType"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="地點 Location">
                <el-select
                  v-model="formData.location"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="巡邏位置記錄 Patrol Location History">
                <el-select
                  v-model="formData.patrolLocation"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="租戶／公共範圍 Tenant / Common Area">
                <el-radio-group v-model="formData.radio">
                  <el-radio label="公共範圍 Common Area"></el-radio>
                  <el-radio label="租戶範圍 Tenant Area"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="是否租戶 Is Tenant?">
                <el-radio-group v-model="formData.isTenant">
                  <el-radio label="是 Yes"></el-radio>
                  <el-radio label="否 No"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="租戶名稱 Lease Tenant">
                <el-select
                  v-model="formData.leaseTenant"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="客戶名稱 Customer Name">
                <el-select
                  v-model="formData.customerName"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="單位 Unit">
                <el-select
                  v-model="formData.Unit"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="聯絡人 Contact Person">
                <el-select
                  v-model="formData.contactPerson"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="負責人 Person in Charge">
                <el-select
                  v-model="formData.personCharge"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="創建團隊人員 Create Team Staff">
                <el-select
                  v-model="formData.createTeamStaff"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="Descriptions">
                <el-input
                  size="small"
                  v-model="formData.descriptions"
                  :rows="3"
                  type="textarea"
                  minlength="50"
                  maxlength="200"
                  show-word-limit
                />
              </el-form-item>

              <el-form-item label="附註 Attachment">
                <el-upload
                  class="upload-demo"
                  :limit="3"
                  action=""
                  :auto-upload="false"
                  :file-list="formData.fileList"
                >
                  <el-button size="small" type="primary">上載 Upload</el-button>
                </el-upload>
              </el-form-item>

              <h2
                style="
                  width: calc(90vw - 20px);
                  margin: 40px 0 10px 0;
                  border-bottom: 1px dashed #ccc;
                  padding-bottom: 10px;
                  font-size: 18px;
                "
              >
                2-跟進 Follow Up
              </h2>

              <el-form-item label="跟進時間 Follow up Time">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="formData.date"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>

              <el-form-item label="跟進人 Follow up Person / Team">
                <el-select
                  v-model="formData.followPerson"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="跟進員工 Follow up By">
                <el-select
                  v-model="formData.followPerson"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="跟進詳情 Follow up Action">
                <el-input size="small" v-model="formData.followUpAction" />
              </el-form-item>

              <h2
                style="
                  width: calc(90vw - 20px);
                  margin: 40px 0 10px 0;
                  border-bottom: 1px dashed #ccc;
                  padding-bottom: 10px;
                  font-size: 18px;
                "
              >
                3-確認完成 Confirm
              </h2>

              <el-form-item label="確認完成時間 Confirmed Time">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="formData.confirmedTime"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>

              <el-form-item label="確認完成人 Confirmed Person / Team">
                <el-select
                  v-model="formData.confirmPerson"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="確認完成員工 Confirmed By">
                <el-select
                  v-model="formData.confirmBy"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <h2
                style="
                  width: calc(90vw - 20px);
                  margin: 40px 0 10px 0;
                  border-bottom: 1px dashed #ccc;
                  padding-bottom: 10px;
                  font-size: 18px;
                "
              >
                4-評審 Review
              </h2>

              <el-form-item label="評審時間 Review Time">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="formData.reviewTime"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>

              <el-form-item label="評審人 Review Person / Team">
                <el-select
                  v-model="formData.reviewPerson"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="評審員工 Review By">
                <el-select
                  v-model="formData.reviewBy"
                  size="small"
                  filterable
                  clearable
                  style="width: 100%"
                  placeholder="請選擇"
                >
                  <el-option
                    v-for="item in courseClassifyListCopy"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

              <h2
                style="
                  width: calc(90vw - 20px);
                  margin: 40px 0 10px 0;
                  border-bottom: 1px dashed #ccc;
                  padding-bottom: 10px;
                  font-size: 18px;
                "
              >
                時間線 Timeline
              </h2>

              <el-form-item label="描述 Description">
                <el-input size="small" v-model="formData.masterCaseNumber" />
              </el-form-item>

              <h2
                style="
                  width: calc(90vw - 20px);
                  margin: 40px 0 10px 0;
                  border-bottom: 1px dashed #ccc;
                  padding-bottom: 10px;
                  font-size: 18px;
                "
              >
                Timeline
              </h2>

              <el-form-item label="日期和時間 Date Time">
                <el-input size="small" v-model="formData.dataTime" />
              </el-form-item>

              <el-form-item label="用戶名 UserName">
                <el-input size="small" v-model="formData.UserName" />
              </el-form-item>

              <el-form-item label="描述 Description">
                <el-input size="small" v-model="formData.Descriptioned" />
              </el-form-item>

              <el-form-item>
                <el-button
                  class="submit-btn"
                  size="small"
                  type="primary"
                  @click="handleSubmit"
                  >提交</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
const courseClassifyListCopy = [
  { id: 1, name: 'To be sent by system' },
  { id: 2, name: 'To be sent manually' },
  { id: 3, name: 'Not required' },
]

export default {
  name: 'ConfirmCase',
  data() {
    return {
      courseClassifyListCopy,
      formData: {
        content: '',
        status: null,
        fileList: [],
      },
      rules: {
        caseTitle: [
          { required: true, message: '值是必需的。', trigger: 'blur' },
        ],
        subject: [{ required: true, message: '值是必需的。', trigger: 'blur' }],
        caseDisplay: [
          { required: true, message: '值是必需的。', trigger: 'blur' },
        ],
        instructingName: [
          { required: true, message: '值是必需的。', trigger: 'blur' },
        ],
        instructingEmail: [
          { required: true, message: '值是必需的。', trigger: 'blur' },
        ],
        lcoStaff: [
          { required: true, message: '值是必需的。', trigger: 'blur' },
        ],
        instructingName: [
          { required: true, message: '值是必需的。', trigger: 'blur' },
        ],

        status: [{ required: true, message: '请选择', trigger: 'change' }],
        emailOptions: [
          { required: true, message: '请选择', trigger: 'change' },
        ],
      },
    }
  },
  mounted() {},
  methods: {
    handleSubmit() {
      this.$refs.caseForm.validate((valid) => {
        if (!valid) return
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__label {
  text-align: left !important;
}
.add-content {
  padding: 20px;
  .add-card {
    height: calc(100vh - 134px);
    overflow-y: auto;
  }
  .baseinfo-form {
    width: 720px;
  }
  .quill-conatiner {
    width: calc(90vw - 300px);
    height: 400px;
  }
}
</style>
