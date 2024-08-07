<template>
  <div class="main">
    <el-card>
      <span style="font-weight: 700; font-size: 18px">案例 Case</span>
    </el-card>
    <div class="add-content">
      <el-card class="add-card">
        <div class="baseinfo-container">
          <div class="baseinfo-card">
            <Identify ref="receive" />
            <Follow ref="follow" />
            <Confirm ref="confirm" />
            <Review ref="review" />
            <el-button @click="handleClick" type="primary" :loading="loading">提交 Submit</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Identify from './components/identify.vue'
import Follow from './components/follow.vue'
import Confirm from './components/confirm.vue'
import Review from './components/review.vue'
import { $http } from '@/http/fetch'

export default {
  data: () => ({
    loading: false,
    allForm: {},
  }),
  components: {
    Identify,
    Follow,
    Confirm,
    Review,
  },
  methods: {
    async handleClick() {
      this.allForm = {
        ...this.$refs.receive.formData,
        ...this.$refs.follow.formData,
        ...this.$refs.confirm.formData,
        ...this.$refs.review.formData,
      }
      // this.$refs.receive.this.$refs.identify.validate(async valid => {
      // if (valid) {
      this.loading = true
      const params = {
        data: this.allForm,
        packageName: 'Workflow 9',
      }
      const res = await $http(params)
      if (res) {
        this.loading = false
        this.$message.success('提交成功')
        // this.receive()
      }
      // }
      // })
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
