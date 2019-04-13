<template>

  <el-row class="mining-status">
    <el-col :span="16" :xs="24" class="left">
      <el-card>
        <div slot="header">
          <el-row>
            <el-col :span="8">
              {{ $t('currentRound') }} {{miningStatus.current_round}}
            </el-col>
            <el-col :span="8">{{ $t('difficulty') }} {{miningStatus.difficulty}}
            </el-col>
            <el-col :span="8">{{ $t('duration') }} {{formatTime}}
            </el-col>
          </el-row>
        </div>

        <el-row>
          <el-col :span="20" :offset="2" class="unit">
            <el-col :span="8">
              <svg class="icon" aria-hidden="true" style="font-size: 18px">
                <use xlink:href="#icon-renzheng"></use>
              </svg>
              TrustME
            </el-col>
            <el-col :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-test"></use>
              </svg>
              PoW
            </el-col>
            <el-col :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-ico_hushigongzuozhan_jizhangguanli"></use>
              </svg>
              Coinbase
            </el-col>
          </el-col>
        </el-row>

        <el-row class="miners">
          <div v-for="i in 10" :key="i">
            <p>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-server"></use>
              </svg>
            </p>
            <p>#{{i}}</p>
          </div>
        </el-row>


        <el-row>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="8"  :xs="24" class="right">
      <el-card>
        <div slot="header">
          <div>{{ $t('online_peers') }}：</div>
        </div>
        <ul class="peers">
          <li class="peer" v-for="i in peers">{{i}}</li>
        </ul>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  const prefixInteger = function (num, length) {
    return (new Array(length).join('0') + num).slice(-length);
  }
  export default {
    name: 'MiningStatus',
    props: {
      miningStatus: {}
    },
    mounted () {
      setInterval(() => {
        if (this.miningStatus.current_round) {
          this.d++
          this.format()
        }
      }, 1000)
    },
    data () {
      return {
        d: 0,
        formatTime: '',
        peers: [
          'ws://explorer-beta2.ringnetwork.org:9193',
          'ws://45.77.159.194:9193',
          'ws://45.77.159.194:9193',
          'ws://45.77.159.194:9193',
          'ws://45.77.159.194:9193',
          'ws://45.77.159.194:9193',
          'ws://45.77.159.194:9193'
        ]
      }

    },
    methods: {
      format () {
        let tempTime = this.$moment.duration(this.d * 1000)
        this.formatTime = prefixInteger(tempTime.hours(), 2) + ':'
          + prefixInteger(tempTime.minutes(), 2) + ':'
          + prefixInteger(tempTime.seconds(), 2)
      },
    },
    computed: {
      duration () {
        return this.$store.state.duration
      },
    },
    watch: {
      'miningStatus.current_round': function () {
        this.d = this.duration
      }
    }
  }
</script>

<style lang="less">
  .mining-status {
    .left,.right {
      margin-top: 20px;
    }
    .right {
      .el-card__body {
        box-sizing: content-box;
      }
    }
    .el-card__header {
      text-align: center;
    }
    .el-card__body {
      height: 200px;
    }
    .unit {
      text-align: center;
      font-size: 18px;
      padding: 20px 0;
      .icon {
        font-size: 14px;
      }
    }

    .miners {
      display: flex;
      justify-content: space-around;
      text-align: center;
      .icon {
        font-size: 58px;
      }
      .gray {
        filter: grayscale(100%);
      }
    }

    .peers {
      overflow: hidden auto;
      height: 100%;
      width: 100%;
      padding: 0;
      margin: 0;
      .peer {
        list-style: none;
        font-size: 16px;
        height: 36px;
        line-height: 36px;
        padding-left: 10px;
        white-space: nowrap;
        &:nth-child(2n + 1) {
          background: #E9EFF7;
        }
      }
    }

  }
</style>
