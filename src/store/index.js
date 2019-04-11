import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    latestUnits: [],
    miningStatus: {
      inflationRatio: ''
    }
  },
  mutations: {},
  actions: {
    'SOCKET_UPDATE_INDEX'({state}, data) {
      state.latestUnits = data.latestUnits
      state.miningStatus = data.miningStatus
    }
  }
})

export default store
