import axios from 'axios'

export const post = (api_path, request) => {
  return axios.post(`${api_path}`, JSON.stringify(request)).then(response => response ? response.data : null)
}

export const get = (api_path) => {
  return axios.get(`${api_path}`).then(response => response ? response.data : null)
}