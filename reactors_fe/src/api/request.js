import axios from 'axios'
import { API_HOST } from '../constants/Api'

export const get = (path) => {
   return axios.get(API_HOST + path)
}

export const post = (path, data, config) => {
  return axios.post(API_HOST + path, data, config)
}
