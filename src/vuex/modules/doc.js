// doc state 需要一些变量来记录文档状态
import {
  SET_LOADING,
  SET_TIP,
  SET_MODAL,
  SET_MODAL_MSG
} from '../mutation_types'

const state = {
  tip: {
    message: '',
    actionHandler: function (event) {},
    timeout: 2000,
    actionText: ''
  },
  loading: false,
  modal: {
    show: false,
    message: {
      title: '',
      body: ''
    }
  }
}

const mutations = {
  [SET_TIP] (state, tip) {
    state.tip = tip
  },
  [SET_LOADING] (state, loading) {
    state.loading = loading
  },
  [SET_MODAL] (state, show) {
    state.modal.show = show
  },
  [SET_MODAL_MSG] (state, msg) {
    state.modal.message = msg
  }
}

export default {
  state,
  mutations
}
