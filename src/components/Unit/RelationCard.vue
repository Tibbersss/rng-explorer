<template>
  <el-card>
    <el-collapse :value="[1,2,3,4]">
      <el-collapse-item title="Authors" :name="1">
        <address-link :address="i.address" v-for="(i, k) in authors" :key="k"></address-link>
      </el-collapse-item>
      <el-collapse-item title="Children" :name="2">
        <address-link :address="i" v-for="(i, k) in child" :key="k"></address-link>
      </el-collapse-item>
      <el-collapse-item title="Parents" :name="3">
        <address-link :address="i" v-for="(i, k) in parents" :key="k"></address-link>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script>
  export default {
    name: 'UnitRelationCard',
    props: {
      authors: Array,
      child: Array,
      parents: Array,
    }
  }
</script>

<style lang="less">
</style>
