import axios from 'axios'
import { configureApi, resetApi } from '../configureApi'

const requestInterceptorSpy = jest.spyOn(axios.interceptors.request, 'use')
const responseInterceptorSpy = jest.spyOn(axios.interceptors.response, 'use')

describe('configureApi', () => {
	it('configureApi', () => {
		configureApi()
		thenConfigureApi()
  })
  
	it('resetApi', () => {
		const requestInterceptorSpy = jest.spyOn(axios.interceptors.request, 'eject')
    const responseInterceptorSpy = jest.spyOn(axios.interceptors.response, 'eject')
    
    resetApi()
    
		expect(requestInterceptorSpy).toHaveBeenCalledTimes(1)
		expect(responseInterceptorSpy).toHaveBeenCalledTimes(1)
	})
})

const thenConfigureApi = () => {
  expect(axios.interceptors.response.handlers[0].fulfilled({ status: 'SUCCESS' })).toEqual({ status: 'SUCCESS' })
	expect(axios.interceptors.response.handlers[0].rejected({
		error: 'Page not found'
	})).rejects.toMatchObject({
		error: 'Page not found'
	})
  
	expect(requestInterceptorSpy).toHaveBeenCalledTimes(1)
  expect(responseInterceptorSpy).toHaveBeenCalledTimes(1)
  
	requestInterceptorSpy.mockClear()
	responseInterceptorSpy.mockClear()
}
