// doc state 需要一些变量来记录文档状态
import {
  SET_LOADING,
  SET_TIP
} from '../mutation_types'

const state = {
  tip: {
    message: '',
    actionHandler: function (event) {},
    timeout: 2000,
    actionText: ''
  },
  loading: false
}

const mutations = {
  [SET_TIP] (state, tip) {
    state.tip = tip
  },
  [SET_LOADING] (state, loading) {
    state.loading = loading
  }
}

export default {
  state,
  mutations
}
