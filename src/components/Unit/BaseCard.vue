<template>
  <el-card>
    <el-form label-width="90px" label-position="right" label-suffix=":" class="unit-base-form">
      <el-form-item :label="$t('unit')">
        {{unit}}
      </el-form-item>
      <el-form-item :label="$t('round_index')">
        {{round_index}}
      </el-form-item>
      <el-form-item :label="$t('pow_type')">
        {{pow_type}}
      </el-form-item>
      <el-form-item :label="$t('date')">
        {{date}}
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
  export default {
    name: 'UnitBaseCard',
    props: {
      unit: String,
      round_index: Number,
      pow_type: Number,
      date: String,
    }
  }
</script>

<style lang="less">
</style>
