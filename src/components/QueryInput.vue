<template>
  <el-input v-model="input" :placeholder="$t('queryPlaceholder')" @keyup.enter.native="submit"/>
</template>

<script>
  export default {
    name: 'AddressLink',
    props: {
      value: String
    },
    data() {
      return {
        input: ''
      }
    },
    methods: {
      submit() {
        let tpye = this.getAddressType(this.input)
        this.$router.push({
          name: tpye,
          params: {
            value: this.input
          }
        })
      }
    },
    watch: {
      value: function (v) {
        this.input = v
      }
    }
  }
</script>

<style lang="less">
</style>
