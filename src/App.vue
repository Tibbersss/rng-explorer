<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <el-row>
          <el-col :span="16" :offset="4">
            <el-menu
                :default-active="path"
                mode="horizontal"
                background-color="transparent"
                text-color="#fff"
                active-text-color="#fff"
                style="width: 100%"
                :router="true"
            >
              <el-menu-item class="transparent_bg" index="/">{{ $t('index') }}</el-menu-item>
              <el-menu-item class="transparent_bg" index="/addressMap">{{ $t('addressMap') }}</el-menu-item>
              <el-menu-item v-show="false" index="/unit"></el-menu-item>
              <el-menu-item v-show="false" index="/wallet"></el-menu-item>
            </el-menu>
            <query-input v-if="path !== '/home'" class="queryInput" v-model="input"></query-input>
            <el-menu
                @select="changeLanguage"
                class="submenu-language transparent_bg"
                mode="horizontal"
            >
              <el-submenu index="3" style="float: right">
                <template slot="title">{{languageMap[language]}}</template>
                <el-menu-item v-for="(i, k) in languageMap" :index="k" :key="k">{{i}}</el-menu-item>
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
  import QueryInput from './components/QueryInput'

  export default {
    name: 'app',
    components: {QueryInput},
    data() {
      return {
        input: '',
        activeIndex: '1',
        languageMap: {
          en: 'english',
          zh: '中文',
        }
      }
    },
    methods: {
      changeLanguage(key) {
        this.$i18n.locale = key
      }
    },
    computed: {
      language() {
        return this.$i18n.locale
      },
      path() {
        return '/' + this.$route.name
      }
    }
  }
</script>

<style lang="less">
  html, body {
    margin: 0;
    padding: 0;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .transparent_bg {
    background: transparent !important;
  }

  #app {
    .header {
      z-index: 100;
      background: url(./assets/background.png) no-repeat top center;
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
    .queryInput {
      margin-top: 14px;
      input {
        height: 32px;
        line-height: 32px;
      }
    }
    /*.submenu-language {*/
    /*.el-submenu__title {*/
    /*background: transparent !important;*/
    /*}*/
    /*}*/
  }
</style>
