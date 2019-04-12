<template>
  <el-row class="unit">
    <el-col :span="10">
      <unit-base-card
          :unit="form['unit']"
          :round_index="form['round_index']"
          :pow_type="form['pow_type']"
          :date="$moment.utc(form['date']).local().format('L')"
      ></unit-base-card>
      <unit-relation-card
          :authors="form.authors"
          :child="form.child"
          :parents="form.parents"
      ></unit-relation-card>
      <unit-message-card
          :messages="form.messages"
          :transfersInfo="form.transfersInfo"
          :outputsUnit="form.outputsUnit"
      >

      </unit-message-card>
    </el-col>
    <el-col :span="14">
      222
    </el-col>

  </el-row>
</template>

<script>
  import UnitBaseCard from '../components/Unit/BaseCard'
  import UnitRelationCard from '../components/Unit/RelationCard'
  import UnitMessageCard from '../components/Unit/MessageCard'
  export default {
    name: 'Unit',
    components: {UnitBaseCard, UnitRelationCard, UnitMessageCard},
    sockets: {
      UPDATE_UNIT: function (data) {
        console.log(data)
        // this.form = data
      }
    },
    mounted() {
      this.ioConnected(() => {
        this.$socket.emit('getUnitInfo', {
          unit: this.$route.params.value
        })
      })
    },
    data() {
      return {
        form: {
          "unit": "aSGOVFYefcW9i3rDnLwi1Q4GZh3UYRJJfU1IVOhu6Js=",
          "round_index": 1719,
          "pow_type": 1,
          "sequence": "good",
          "child": [
            "4t6IXOYvAxB9EaXyiTjPKh/apY3CKrc7JsBNGI38pWU=",
            "KH+ry3EfTvwUGDBkox625Dk7GGWs4qllm3kHOuutF5c="
          ],
          "parents": [
            "+OrHvS9A6frBMcHqFXCJ+SMsgBI3+OGCO9ThLkqfpdA=",
            "cEt73YayNG3xsk8Zdkg3CQ2UAhk/PcnuLnZJ5QZV4+k="
          ],
          "authors": [
            {
              "address": "PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX",
              "authentifiers": {
                "r": "G0z69sDHEQLs1ffc3Rfc6wWfUpzjOOukb2I6j/zpXPYUEmUA0W2OZQJ+oi5VQ4oSDVnUhAW/zWN5dEEoB31T5Q=="
              },
              "definition": false
            }
          ],
          "headers_commission": 0,
          "payload_commission": 0,
          "main_chain_index": 68675,
          "latest_included_mc_index": 68673,
          "level": 79325,
          "is_stable": 1,
          "last_ball_unit": "cEt73YayNG3xsk8Zdkg3CQ2UAhk/PcnuLnZJ5QZV4+k=",
          "messages": [
            {
              "app": "pow_equihash",
              "payload_hash": "hmZfcu+fLC7b2T+/oRXtO3hzYv1c0YguEcp8NHUBzEo=",
              "payload_location": "inline",
              "payload": {
                "seed": "1827d42c4ca4c55e420d4232cd1bed7ddef6e44e51e0e7024bfd7ad406148b2e",
                "deposit": "UBT5UNGOCNLS2RTESFUSLI3ZFFF3S454",
                "solution": {
                  "hash": "00772c80d17648889715708cf004b00f875831f0a0c2473d3e2fbe147ffb507a",
                  "selfBits": 528482303,
                  "nonce": 95
                }
              }
            },
            {
              "app": "payment",
              "payload_hash": "PhpwE/aVIbvjOCv7prvnBH8nSJO5v6oydJCluSECfJo=",
              "payload_location": "inline",
              "payload": {
                "inputs": [
                  {
                    "unit": "63zYRuV10QXlkTlwcdQD/1SaWjc1H4s8YkuLzcOXlOE=",
                    "message_index": 1,
                    "output_index": 0
                  }
                ],
                "outputs": [
                  {
                    "address": "PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX",
                    "amount": 3802441
                  }
                ]
              }
            },
            {
              "app": "data_feed",
              "payload_hash": "WeLhwLBa+3Xl7xyB6rSwiCHqrpVbgywmvstIt+ltvCs=",
              "payload_location": "inline",
              "payload": {
                "timestamp": 1555034765577
              }
            }
          ],
          "transfersInfo": {
            "63zYRuV10QXlkTlwcdQD/1SaWjc1H4s8YkuLzcOXlOE=_0_null": {
              "unit": "63zYRuV10QXlkTlwcdQD/1SaWjc1H4s8YkuLzcOXlOE=",
              "amount": 3802441
            }
          },
          "outputsUnit": {
            "null": [
              {
                "output_id": 51757,
                "address": "PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX",
                "amount": 3802441,
                "asset": null,
                "denomination": 1,
                "is_spent": 1,
                "spent": "stk5HFAsrTMfpuk1axqYLYqUQMmq2ZEeH3zMBIhRkCU="
              },
              {
                "output_id": 51757,
                "address": "PJMHUM3Y43I2FCV5KCVVUQ3ZUP2H6YHX",
                "amount": 3802441,
                "asset": null,
                "denomination": 1,
                "is_spent": 0,
                "spent": "stk5HFAsrTMfpuk1axqYLYqUQMmq2ZEeH3zMBIhRkCU="
              },
            ]
          },
          "date": "2019-04-12T10:06:04+08:00",
          "assocCommissions": {
            "headers": {},
            "witnessing": {}
          }
        }
      }
    },
    methods: {
      getAsset(message) {
        return message.payload.asset || 'null'
      },
    },
    computed: {},
    watch: {}
  }
</script>

<style lang="less">

  .unit {
    .el-form-item {
      margin-bottom: 0;
      .el-form-item__content {
        word-wrap: break-word

      }
    }

    .el-collapse-item__content {
      padding-bottom: 4px;
      .address-link {
        display: inline;
        padding: 0;
        margin-left: 0;
        word-break: break-all;
        line-height: 14px;
        height: 14px;
      }
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

</style>
