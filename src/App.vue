<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="16" :offset="4">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">地址列表</el-menu-item>
              <el-submenu index="3" style="float: right">
                <template slot="title">cn</template>
                <el-menu-item index="3-1">cn</el-menu-item>
                <el-menu-item index="3-2">en</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="16" :offset="4">
            <router-view/>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data () {
      return {
        activeIndex: '1'
      }
    }
  }
</script>

<style>
  #app {
  }
</style>
