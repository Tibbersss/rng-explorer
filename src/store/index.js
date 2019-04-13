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
  mutations: {
    SET_INDEX (state, data) {
      state.latestUnits = data.latestUnits
      state.miningStatus = data.miningStatus
    }
  },
  actions: {
    'SOCKET_UPDATE_INDEX' ({commit}, data) {
      commit('SET_INDEX', data)
    }
  }
})

export default store
