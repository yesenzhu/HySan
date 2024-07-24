<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <div class="logo-container">
        <img :src="require('@/assets/ricoh.svg')" alt="" />
      </div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#323c4c"
        text-color="#fff"
        active-text-color="#fff"
        router
        :collapse="isCollapse"
      >
        <el-submenu index="/identify">
          <template slot="title">
            <i class="el-icon-news"></i>
            <span slot="title">Identify</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/identify/case">
              <i class="el-icon-chat-line-round"></i>
              <span slot="title">1-Identify</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/follow-up">
          <template slot="title">
            <i class="el-icon-s-help"></i>
            <span slot="title">Follow Up</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/follow/case">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">2-Follow Up</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/confirm">
          <template slot="title">
            <i class="el-icon-picture"></i>
            <span slot="title">Confirm</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/confirm/case">
              <i class="el-icon-s-flag"></i>
              <span slot="title">{{ cardTitle }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/review">
          <template slot="title">
            <i class="el-icon-picture"></i>
            <span slot="title">Review</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/review/case">
              <i class="el-icon-s-flag"></i>
              <span slot="title">{{ cardTitle }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { TimelineItem } from 'element-ui'

export default {
  name: 'Menu',
  props: ['isCollapse'],
  data() {
    return {
      cardTitle: '案例 Case',
    }
  },
}
</script>
<style lang="less" scoped>
.scrollbar-wrapper {
  overflow-x: hidden !important;
  .el-scrollbar__view {
    height: 100%;
  }
}
.el-menu {
  border-right: 0;
  /deep/ .is-active {
    background: #28303d !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  // min-height: 400px;
}
::v-deep .el-menu-item-group__title {
  padding: 0;
}
.logo-container {
  margin: 20px 0;
  text-align: center;
}
</style>
