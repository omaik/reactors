import axios from 'axios'
import { API_HOST } from '../constants/Api'

export const get = (path) => {
   return axios.get(API_HOST + path)
}
