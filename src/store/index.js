import { createStore } from 'vuex'

export default createStore({
  state: {
    layout: 'default-layout',
  },
  getters: {
    layout (state) {
      return state.layout
    },
  },
  mutations: {
    SET_LAYOUT (state, payload) {
      state.layout = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
