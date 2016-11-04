import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/user_info'
import common from './modules/common'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  modules: {
    userInfo,
    common
  },
  strict: debug,
  middlewares: debug ? [] : []
})

export default store
