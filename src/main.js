import Vue from 'vue'
import {Container, Header, Main, Menu, MenuItem, Submenu, Row, Col, Card, Table, Button, TableColumn, Tag, Icon, Loading,} from 'element-ui';
import router from './router'
import store from './store'//引入store
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'


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
Vue.use(Tag)
Vue.use(Icon)
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;

moment.locale('en', {
  longDateFormat: {
    L: "YYYY-MM-DD HH:mm:ss",
  }
})

Vue.use(VueMoment, {
  moment,
})

Vue.use(new VueSocketIO({
  debug: false,
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
