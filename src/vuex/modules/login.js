import {
  SET_LOGIN
} from '../mutation_types'

const state = {
  isLogin: false
}

const mutations = {
  [SET_LOGIN] (state, isLogin) {
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
      commit(SET_LOGIN, isLogin)
    }
  }
}

export default {
  state,
  mutations,
  actions
}
