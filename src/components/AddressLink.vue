<template>
  <router-link class="el-button el-button--text address-link" type="text"
               :to="getUrl()">{{address}}
  </router-link>
</template>

<script>
  export default {
    name: 'AddressLink',
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
  .address-link {
    white-space: normal;
    font-weight: normal;
    text-decoration: none;
  }
</style>
