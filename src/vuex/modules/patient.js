// doc state 需要一些变量来记录文档状态
import { SET_CURRENT_PATIENT } from '../mutation_types'

const state = {
  currentPatient: ''
}

const mutations = {
  [SET_CURRENT_PATIENT] (state, patient) {
    state.currentPatient = patient
  }
}

export default {
  state,
  mutations
}
