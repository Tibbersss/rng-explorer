import Vue from 'vue'
import {Container, Header, Main, Menu, MenuItem, Submenu, Row, Col, Card, Table, Button, TableColumn} from 'element-ui';
import router from './router'
import store from './store'//引入store

import VueSocketIO from 'vue-socket.io'


import App from './App.vue'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'ws://127.0.0.1:7001',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
  }
}))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
