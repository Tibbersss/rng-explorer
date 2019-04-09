<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="16" :offset="4">
            <el-menu
                :default-active="activeIndex"
                mode="horizontal"
                background-color="transparent"
                text-color="#fff"
                active-text-color="#000"
                style="background-color: transparent!important;"
            >
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
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data() {
      return {
        activeIndex: '1'
      }
    }
  }
</script>

<style lang="less">
  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    header {
      z-index: 100;
    }
  }
</style>
