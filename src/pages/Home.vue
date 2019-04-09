<template>
  <div class="home">
    <div class="body-bg">
    </div>
    <br>
    <el-row class="home-units">
      <el-card>
        <div slot="header">
          <span><i :class="unitsLoading?'el-icon-loading':'el-icon-document'"></i>单元列表</span>
          <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
        </div>
        <el-table
            max-height="300"
            width="100%"
            :data="units"
            style="width: 100%">
          <el-table-column
              prop="unit"
              label="单元">
          </el-table-column>
          <el-table-column
              label="日期">
            <template slot-scope="scope">
              {{$moment.utc(scope.row.creation_date).local().format('L')}}
            </template>
          </el-table-column>
          <el-table-column
              prop="main_chain_index"
              label="主链高度">
          </el-table-column>
          <el-table-column
              label="稳定"
              width="100">
            <template slot-scope="scope">
              <el-tag
                  :type="scope.row.is_stable ? 'success' : 'danger'"
                  disable-transitions>{{scope.row.is_stable ? '是' : '否'}}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {},
    mounted () {
      setInterval(() => {
        this.$socket.emit('getLatestUnits')
      }, 3000)
    },
    data () {
      return {
        unitsLoading: false
      }
    },
    methods: {
      refreshUnitsIcon () {
        this.unitsLoading = true
        setTimeout(() => {
          this.unitsLoading = false
        }, 2000)
      }
    },
    computed: {
      units () {
        return this.$store.state.units
      }
    },
    watch: {
      // 如果 `question` 发生改变，这个函数就会运行
      units: function () {
        this.refreshUnitsIcon()
      }
    }
  }
</script>

<style lang="less" scoped>
  .home {
    display: flow;
    .body-bg {
      background: url(../assets/background.png) no-repeat center center;
      height: 560px;
      width: 100%;
      position: absolute;
      z-index: 0;
      left: 0;
      top: -30px;
      transition: background .6s ease-in-out;
    }
  }
</style>
