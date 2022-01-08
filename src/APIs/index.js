import axios from 'axios'

// API for Web Application
export const getSensorData = params => {
  return axios.get(`${'https://swdapi.ddns.net:8090/data/ttntest'}`)
}

export const postLogin = params => {
  return axios.post(`${'http://localhost:3000/api/login'}`, params)
}

export const postApprove = (id, params) => {
  return axios.post(`${'http://localhost:3000/api/approve/' + id}`, params)
}
