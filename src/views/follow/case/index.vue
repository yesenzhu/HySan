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
            <Follow ref="follow-p" />
            <Confirm />
            <Review />
            <el-button @click="handleClick" type="primary" :loading="loading">提交</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Identify from './components/identify.vue';
import Follow from './components/follow.vue';
import Confirm from './components/confirm.vue';
import Review from './components/review.vue';
export default {
  data: () => ({
    loading: false
  }),
  components: {
    Identify,
    Follow,
    Confirm,
    Review
  },
  methods: {
    async handleClick() {
      try {
        await Promise.all([this.$refs['receive'].$refs['identify'].validate(), this.$refs['follow-p'].$refs['follow'].validate()]);
        this.loading = true;
        await new Promise((resolve) => setTimeout(resolve, 500));
        this.loading = false;
        this.$message({
          message: '提交成功',
          type: 'success'
        })

      } catch (error) {
        console.warn(error);
      }
    }
  }
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
