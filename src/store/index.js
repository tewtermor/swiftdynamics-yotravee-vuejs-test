import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import { getSensorData, postLogin, postApprove } from '@/APIs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sensorData: [],
    groupedSensorData: null,
    graphDialogShow: false,
    user: null,
    snackbar: {
      status: false,
      text: ''
    }
  },
  mutations: {
    SET_SENSOR_DATA (state, payload) {
      state.sensorData = payload
      const countDataByDate = payload.reduce(function (acc, obj) {
        const key = moment(obj.timestamp).parseZone().format('YYYY-MM-DD')
        if (!acc[key]) {
          acc[key] = []
        }
        acc[key].push(obj)
        return acc
      }, {})
      state.groupedSensorData = countDataByDate
    },
    SET_GRAPH_DIALOG_SHOW (state, payload) {
      state.graphDialogShow = payload
    },
    SET_USER_LOGIN (state, payload) {
      state.user = payload.id
    },
    SET_SNACKBAR_SHOW (state, payload) {
      state.snackbar = payload
    }
  },
  actions: {
    GET_SENSOR_DATA () {
      getSensorData().then(res => {
        if (res.status === 200) {
          this.commit('SET_SENSOR_DATA', res.data)
        }
      })
    },
    POST_LOGIN (state, payload) {
      postLogin(payload).then(res => {
        if (res.status === 200) {
          this.commit('SET_USER_LOGIN', payload)
          this.commit('SET_SNACKBAR_SHOW', { status: true, text: 'Login Successful !!' })
        }
      })
    },
    POST_APPROVE_WORK (state, payload) {
      postApprove(payload.id, payload.params).then(res => {
        if (res.status === 200) {
          this.commit('SET_SNACKBAR_SHOW', { status: true, text: `Work Approved by ${payload.params.userID} !!` })
        }
      })
    }
  },
  modules: {
  }
})
