import * as types from '../mutation_types'

const state = {
  isLogin: false,
  loading: false
}

const mutations = {
  [types.SET_LOADING] (state, loading) {
    state.loading = loading
  },
  [types.SET_LOGIN] (state, isLogin) {
    state.isLogin = isLogin
    storeLoginInfo(isLogin)
    console.log('login invoked: ' + isLogin)
  }
}

let sessionStorage = window.sessionStorage

let storeLoginInfo = (data) => {
  sessionStorage.setItem('Login', data)
}

const actions = {
  getCommonStore: ({ commit }) => {
    if (sessionStorage.getItem('Login')) {
      let isLogin = sessionStorage.getItem('BaseInfo')
      commit(types.SET_LOGIN, isLogin)
    }
  }
}

export default {
  state,
  mutations,
  actions
}
