import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
let locale = navigator.language.indexOf('zh') > -1 ? 'zh' : 'en'
const i18n = new VueI18n({
  locale: locale,
  messages: {
    zh: {
      index: '首页',
      addressMap: '地址列表',
      areMined: ['已经挖出', 'RNGs'],
      toBeMined: ['共发行', 'RNGs'],
      depositRatio: '当前抵押率',
      inflationRatio: '年化通胀率',
      queryPlaceholder: '输入单元地址或钱包地址',
      currentRound: '当前轮次',
      difficulty: '难度系数',
      main_chain_unit: '单元位置',
      unit_status: '单元状态',
      unit_type: '单元类型',
      address: '地址',
      transaction: '交易',
      stable: '稳定',
      unstable: '未稳定',
      failure: '失败',
      online_peers: '在线节点数',
    },
    en: {
      index: 'index',
      addressMap: 'address map',
      areMined: ['', 'new RNGs are Mined'],
      toBeMined: ['', 'RNGs to be Mined'],
      depositRatio: 'Deposit Ratio',
      inflationRatio: 'Inflation Ratio',
      queryPlaceholder: 'Input unit address or wallet address',
      currentRound: 'current consensus round',
      difficulty: 'difficulty',
      main_chain_unit: 'main chain unit',
      unit_status: 'unit status',
      unit_type: 'unit type',
      address: 'address',
      transaction: 'transaction',
      stable: 'stable',
      unstable: 'unstable',
      failure: 'failure',
      online_peers: 'online peers',
    },
  },
})

export default i18n
