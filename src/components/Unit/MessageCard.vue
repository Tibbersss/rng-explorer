<template>
  <el-card>
    <el-collapse :value="[1]">
      <el-collapse-item title="Messages" :name="1">
        <el-collapse :value="[1,2,3,4,5,6]">
          <el-collapse-item :title="message.app" :name="k+1" v-for="(message, k) in messages">
            <template v-if="message.app!=='payment'">
              <el-form label-width="90px" label-position="right" label-suffix=":" class="unit-form">
                <el-form-item :label="$t(pKey)" v-for="(pItem, pKey) in message.payload" :key="pKey">
                  {{pItem}}
                </el-form-item>
              </el-form>
            </template>

            <!--payment-->

            <template v-else-if="message.app=='payment'">
              <el-form label-width="90px" label-position="right" label-suffix=":" class="unit-form">

                <!--inputs-->

                <el-form-item :label="$t('inputs')">
                  <div v-for="(input, iKey) in message.payload.inputs" :key="iKey" class="payment-items">
                    <template v-if="input.type && input.type == 'issue'">
                      <div class="infoTitleInput">Issue</div>
                      <div class="inputInfo">
                        <div>Serial number: {{input.serial_number}}</div>
                        <div>Amount: <span class="numberFormat">{{input.amount}}</span></div>
                      </div>
                    </template>
                    <template v-else-if="input.output_index !== undefined">
                        <span class="numberFormat">{{transfersInfo[getInputKey(input, getAsset(message))].amount}}</span>
                        from
                        <address-link
                            :address="transfersInfo[getInputKey(input, getAsset(message))].unit"></address-link>
                    </template>
                    <template v-else>
                      <div class="infoTitleInput">Issue</div>
                      <div class="inputInfo">
                        <div>Serial number: {{input.serial_number}}</div>
                        <div>Amount: <span class="numberFormat">{{input.amount}}</span></div>
                      </div>
                    </template>
                  </div>
                </el-form-item>

                <!--outputs-->

                <el-form-item :label="$t('outputs')">
                  <div v-for="(output, oKey) in outputsUnit[getAsset(message)]" :key="oKey" class="payment-items">
                    <span>{{output.amount}} to </span>
                    <address-link :address="output.address"></address-link>
                    <template v-if="output.is_spent === 1">
                      <br>(spent in
                      <address-link :address="output.spent"></address-link>
                      )
                    </template>
                    <template v-else>
                      <br>(not spent)
                    </template>
                    <br>
                  </div>
                </el-form-item>
              </el-form>
            </template>
          </el-collapse-item>
        </el-collapse>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script>
  export default {
    name: 'UnitMessageCard',
    props: {
      messages: Array,
      transfersInfo: {},
      outputsUnit: {}
    },
    methods: {
      getAsset(message) {
        return message.payload.asset || 'null'
      },
      getInputKey(input, asset) {
        return input.unit + '_' + input.output_index + '_' + asset
      }
    }
  }
</script>

<style lang="less">
  .payment-items {
    line-height: 16px;
    padding-top: 14px;
  }
</style>
