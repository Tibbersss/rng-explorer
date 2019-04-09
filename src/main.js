import Vue from 'vue'
import {Container, Header, Main, Menu, MenuItem, Submenu, Row, Col} from 'element-ui';
import router from './router'

import App from './App.vue'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Row)
Vue.use(Col)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
