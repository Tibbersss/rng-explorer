import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    units: []
  },
  mutations: {
  },
  actions: {
    'SOCKET_UPDATE_LATEST_UNITS'({state}, data) {
      state.units = data
    }
  }
})

export default store
