<template>
  <el-row class="unit">
    <el-col :span="10">
      <el-card>
        <el-form label-width="90px" label-position="right" label-suffix=":" class="unit-form">
          <el-form-item :label="i" v-for="i in baseForm" :key="i">
            {{form.base[i]}}
          </el-form-item>
        </el-form>
      </el-card>
      <el-card>
        <el-collapse :value="[1,2,3,4]">
          <el-collapse-item title="Authors" :name="1">
            <el-button type="text">tc5nIUZgc1Rgrpj1BZOOnFTJThKLP2foe32OgAgp4iI=</el-button>
          </el-collapse-item>
          <el-collapse-item title="Children" :name="2">
            <el-button type="text">tc5nIUZgc1Rgrpj1BZOOnFTJThKLP2foe32OgAgp4iI=</el-button>
            <el-button type="text">tc5nIUZgc1Rgrpj1BZOOnFTJThKLP2foe32OgAgp4iI=</el-button>
          </el-collapse-item>
          <el-collapse-item title="Parents" :name="3">
            <el-button type="text">tc5nIUZgc1Rgrpj1BZOOnFTJThKLP2foe32OgAgp4iI=</el-button>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <el-card>
        <el-collapse :value="[1]">
          <el-collapse-item title="Messages" :name="1">
            <el-collapse :value="[1,2,3,4]">
              <el-collapse-item title="Pow_equihash" :name="1">
                seed: 4c0f6f4f9ce9b1e634f291e461f05cb685a7daecb2713237613b47e2e351635c
                deposit: 6OXXN2BA7SJYXZMUSSOXC7H5VC4YKNNN
                solution:
                {"hash":"0023789a0a19534fb221e5e67479ce888351d6b3b09b20ef618b133b6c012122","selfBits":528482303,"nonce":198}
              </el-collapse-item>
              <el-collapse-item title="Payment in notes" :name="2">

                <el-form label-width="50px" label-position="right" label-suffix=":" class="unit-form">
                  <el-form-item label="input">
                    5,000,000 from RttYJtaL1u022DUxckPkmAykBEyT/8Vtgr0s3cN84qk=
                  </el-form-item>
                  <el-form-item label="output">
                    5,000,000 to RttYJtaL1u022DUxckPkmAykBEyT/8Vtgr0s3cN84qk=
                  </el-form-item>
                </el-form>
              </el-collapse-item>
            </el-collapse>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-col>
    <el-col :span="14">
      222
    </el-col>

  </el-row>
</template>

<script>
  export default {
    name: 'Unit',
    props: {},
    mounted() {
      this.ioConnected(() => {
        this.$socket.emit('getUnitInfo', {
          unit: this.$route.params.value
        })
      })
    },
    data() {
      return {
        baseForm: ['unit', 'round_index', 'pow_type', 'received'],
        form: {
          base: {
            unit: 'tc5nIUZgc1Rgrpj1BZOOnFTJThKLP2foe32OgAgp4iI=',
            round_index: 1475,
            pow_type: 'coin base',
            received: '11.04.2019 12:04:36'
          }
        }
      }
    },
    methods: {},
    computed: {},
    watch: {}
  }
</script>

<style lang="less">
  .unit {
    .el-collapse-item__content {
      padding-bottom: 4px;
    }
    .el-collapse-item__header {
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      font-weight: bold;
    }
    .el-collapse-item__content > .el-collapse {
      padding-left: 16px;
    }
    .el-collapse-item__content {
      .el-collapse-item__header {
        font-size: 13px;
        font-weight: 500;
      }
    }
  }

  .unit-form {
    .el-form-item {
      margin-bottom: 0;
      .el-form-item__content {
        word-wrap: break-word

      }
    }
  }
</style>
