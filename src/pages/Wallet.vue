<template>
  <el-row class="wallet">
    <el-col :span="20" :offset="2">
      <el-card class="wallet__title">
        {{$t('address')}}：{{this.$route.params.value}}
      </el-card>
      <div class="wallet__summary">
        <el-card class="wallet__summary__left">
          <div class="qrcode">
            <qrcode-vue :value="this.$route.params.value" :size="100" level="H"></qrcode-vue>
          </div>
          <div class="summary">
            <h3 class="underline">摘要</h3>
            <el-form label-width="80px" label-suffix=":" label-position="left">
              <el-form-item label="地址">
                {{this.$route.params.value}}
              </el-form-item>
              <el-form-item label="创建时间">
                123
              </el-form-item>
            </el-form>
          </div>
        </el-card>
        <el-card class="wallet__summary__right">
          <el-form label-width="80px" label-suffix=":" label-position="left">
            <el-form-item label="总接收">
              439,140,741.95 rng
            </el-form-item>
            <el-form-item label="总发送">
              439,140,741.95 rng
            </el-form-item>
            <el-form-item label="余额">
              439,140,741.95 rng
            </el-form-item>
          </el-form>
        </el-card>
      </div>

      <el-card>
        <div slot="header">
          <h3 class="underline">交易记录</h3>
        </div>
        <el-table
            class="transactions-table"
            :data="tableData">
          <el-table-column
              prop="date"
              label="日期"
              width="160">
            <template slot-scope="scope">
              {{$moment.utc(scope.row.date).local().format('L')}}
            </template>
          </el-table-column>
          <el-table-column
              prop="unit"
              label="unit">
            <template slot-scope="scope">
              <address-link class="ellipsis" :address="scope.row.unit"></address-link>
            </template>
          </el-table-column>
          <el-table-column
              prop="input"
              label="输入数">
          </el-table-column>
          <el-table-column
              prop="output"
              label="输出数">
          </el-table-column>
          <el-table-column
              label="from">
            <template slot-scope="scope">
              <address-link class="ellipsis" :address="scope.row.from"
                            v-if="scope.row.from != $route.params.value"></address-link>
              <span class="ellipsis" v-else>{{scope.row.from}}</span>
            </template>
          </el-table-column>
          <el-table-column
              label="to">
            <template slot-scope="scope">
              <address-link class="ellipsis" :address="scope.row.to"
                            v-if="scope.row.to != $route.params.value"></address-link>
              <span class="ellipsis" v-else>{{scope.row.to}}</span>
            </template>
          </el-table-column>
          <el-table-column
              label="数量">
            <template slot-scope="scope">
              {{scope.row.amount}} RNG
            </template>
          </el-table-column>
          <el-table-column
              label="手续费">
            <template slot-scope="scope">
              {{scope.row.fee}} RNG
            </template>
          </el-table-column>
        </el-table>
      </el-card>


    </el-col>
  </el-row>
</template>

<script>
  import QrcodeVue from 'qrcode.vue';

  export default {
    name: 'Wallet',
    components: {QrcodeVue},
    sockets: {
      UPDATE_WALLET: function (data) {
        console.log(data)
        // this.form = data
      }
    },
    mounted() {
      this.ioConnected(() => {
        this.$socket.emit('getWalletInfo', {
          unit: this.$route.params.value
        })
      })
    },
    data() {
      return {
        tableData: [{
          date: '2019-01-01',
          unit: 'aSGOVFYefcW9i3rDnLwi1Q4GZh3UYRJJfU1IVOhu6Js=',
          input: 15,
          output: 4,
          amount: 1.023525555,
          fee: 0.000001,
          from: 'PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX',
          to: 'to_PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX'
        }, {
          date: '2019-01-01',
          unit: 'aSGOVFYefcW9i3rDnLwi1Q4GZh3UYRJJfU1IVOhu6Js=',
          input: 15,
          output: 4,
          amount: 1.023525555,
          fee: 0.000001,
          from: 'to_PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX',
          to: 'PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX'
        }, {
          date: '2019-01-01',
          unit: 'aSGOVFYefcW9i3rDnLwi1Q4GZh3UYRJJfU1IVOhu6Js=',
          input: 15,
          output: 4,
          amount: 1.023525555,
          fee: 0.000001,
          from: 'PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX',
          to: 'to_PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX'
        }, {
          date: '2019-01-01',
          unit: 'aSGOVFYefcW9i3rDnLwi1Q4GZh3UYRJJfU1IVOhu6Js=',
          input: 15,
          output: 4,
          amount: 1.023525555,
          fee: 0.000001,
          from: 'to_PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX',
          to: 'PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX'
        }, {
          date: '2019-01-01',
          unit: 'aSGOVFYefcW9i3rDnLwi1Q4GZh3UYRJJfU1IVOhu6Js=',
          input: 15,
          output: 4,
          amount: 1.023525555,
          fee: 0.000001,
          from: 'PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX',
          to: 'to_PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX'
        }]
      }
    },
    methods: {}
  }
</script>

<style lang="less">
  .wallet {
    h3 {
      margin: 0;
    }
    .underline:after {
      content: "";
      display: block;
      width: 72px;
      height: 5px;
      margin-top: 6px;
      background-color: #2992fa;
    }
    .el-form-item {
      margin-bottom: 0;
    }
    &__summary {
      display: flex;
      > div {
        flex: 1;
      }
      .el-form-item {
        font-weight: bold;
        .el-form-item__label, .el-form-item__content {
          font-size: 10px;
          height: 24px;
          line-height: 24px;
        }
        .el-form-item__content {
          text-align: right;
        }
      }
      &__left {
        .el-card__body {
          display: flex;
          .summary {
            width: 100%;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      }
      &__right {
        display: flex;
        .el-card__body {
          width: 100%;
          .el-form {
            width: 100%;
          }
          display: flex;
          align-self: flex-end;
        }
      }
    }
    .el-card {
      margin-bottom: 20px;
    }
    .transactions-table {
      width: 100%;
      font-size: 12px;
      td, th {
        padding: 2px 0;
      }
      .ellipsis {
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
