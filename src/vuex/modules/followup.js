// doc state 需要一些变量来记录文档状态
import { SET_FOLLOWUP } from '../mutation_types'

const state = {
  currentFollowupList: null
}

const mutations = {
  [SET_FOLLOWUP] (state, followups) {
    state.currentFollowupList = followups
  }
}

export default {
  state,
  mutations
}
