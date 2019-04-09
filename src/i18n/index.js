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
    },
    en: {
      index: 'index',
      addressMap: 'address map'
    },
  },
})

export default i18n
