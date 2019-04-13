<template>

  <el-row class="mining-status">
    <el-col :span="16" class="left">
      <el-card>
        <div slot="header">
          <el-row>
            <el-col :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-renzheng" style="16px"></use>
              </svg>
              {{ $t('currentRound') }}
            </el-col>
            <el-col :span="8">{{ $t('difficulty') }}
            </el-col>
            <el-col :span="8">{{ $t('duration') }}
            </el-col>
          </el-row>
        </div>

        <el-row>
          <el-col :span="16" :offset="4" style="text-align: center">
            <el-col :span="8">TrustME
            </el-col>
            <el-col :span="8">PoW
            </el-col>
            <el-col :span="8">Coinbase
            </el-col>
          </el-col>
        </el-row>
        <el-row>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="8" class="right">
      <el-card>
        <div slot="header">
          <div>{{ $t('online_peers') }}：</div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'MiningStatus',
    props: {
      address: String
    },
    methods: {
      getUrl() {
        return {
          name: this.getAddressType(this.address),
          params: {
            value: this.address
          }
        }
      }
    }
  }
</script>

<style lang="less">
  .mining-status {
    margin-top: 20px;
    .el-card__header {
      text-align: center;
    }

  }
</style>
