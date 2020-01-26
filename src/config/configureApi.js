import axios from 'axios'

import { isDevelopment } from '../helpers'

let requestInterceptor
let responseInterceptor

export const configureApi = () => {
  const headers = {
    'Content-Type': 'application/JSON;charset=UTF-8',
	}

  axios.defaults.baseURL = isDevelopment ? 'http://localhost:3000/api/v1' : ''

	let authToken = localStorage.getItem('auth_token')
	
  if (authToken) {
		headers['Authorization'] = authToken
  }

  requestInterceptor = axios.interceptors.request.use(function (config) {
		config.headers = { ...headers }
		return config;
	})
  
  responseInterceptor = axios.interceptors.response.use(
		response => {
			return response
		},
		error => {
			if (error) {
				console.error(error)
				// handle error
			}
			return Promise.reject(error)
		}
	)
}

export const resetApi = () => {
	axios.defaults.baseURL = '/'
	axios.interceptors.request.eject(requestInterceptor)
	axios.interceptors.response.eject(responseInterceptor)
}