import axios from 'axios'
import { API_HOST } from '../constants/Api'

export const get = (path) => {
   return axios.get(API_HOST + path)
}

export const post = (path, params) => {
	return axios.post(API_HOST + path, params)
}

export const get_with_header = (path, header) => {
   return axios.get(API_HOST + path, { "headers": header })
}

export const delete_with_header = (path, header) => {
   return axios.delete(API_HOST + path, { "headers": header })
}
