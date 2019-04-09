<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <el-row>
          <el-col :span="16" :offset="4">
            <el-menu
                :default-active="activeIndex"
                mode="horizontal"
                background-color="transparent"
                text-color="#fff"
                active-text-color="#fff"
                style="width: 100%"
            >
              <el-menu-item class="transparent_bg" index="1">{{ $t('index') }}</el-menu-item>
              <el-menu-item class="transparent_bg" index="2">{{ $t('addressMap') }}</el-menu-item>
            </el-menu>

            <el-menu
                @select="changeLanguage"
                class="submenu-language transparent_bg"
                mode="horizontal"
            >
              <el-submenu index="3" style="float: right">
                <template cla="abc" slot="title">{{languageMap[language]}}</template>
                <el-menu-item v-for="(i, k) in languageMap" :index="k">{{i}}</el-menu-item>
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
    data () {
      return {
        activeIndex: '1',
        languageMap: {
          en: 'english',
          zh: '中文',
        }
      }
    },
    methods: {
      changeLanguage (key) {
        this.$i18n.locale = key
      }
    },
    computed: {
      language () {
        return this.$i18n.locale
      }
    }
  }
</script>

<style lang="less">
  html, body {
    margin: 0;
    padding: 0;
  }

  .transparent_bg {
    background: transparent !important;
  }

  #app {
    .header {
      z-index: 100;
      .el-col {
        display: flex;
        .el-menu.el-menu--horizontal {
          border-bottom: none;
        }
        .submenu-language {
          .el-submenu__title {
            background: transparent !important;
            color: #fff;
            i {
              color: #fff;
            }
          }
        }
      }
    }
    /*.submenu-language {*/
    /*.el-submenu__title {*/
    /*background: transparent !important;*/
    /*}*/
    /*}*/
  }
</style>
