// doc state 需要一些变量来记录文档状态
import { SET_CURRENT_PATIENT, SET_TREATMENT_RECORDS } from '../mutation_types'

const state = {
  currentPatient: '',
  treatmentRecords: ''
}

const mutations = {
  [SET_CURRENT_PATIENT] (state, patient) {
    state.currentPatient = patient
  },
  [SET_TREATMENT_RECORDS] (state, treatmentRecords) {
    state.treatmentRecords = treatmentRecords
  }
}

export default {
  state,
  mutations
}
