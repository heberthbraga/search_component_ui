import { get, post } from '../call'
import axios from 'axios'

jest.mock('axios')

describe('Call', () => {
	it('get', async () => {
		const resp = {status: 'SUCCESS'}
		axios.get.mockImplementationOnce(() =>
			Promise.resolve({
        data: resp
			}))
		const mockGet = await get('/api/sample')
		expect(mockGet).toEqual(resp)
	})

	it('post', async () => {
		const resp = {status: 'SUCCESS'}
		axios.post.mockImplementationOnce(() =>
			Promise.resolve({
				data: resp
			}))
		const mockPost = await post('api/sample', { text: 'word' })
		expect(mockPost).toEqual(resp)
	})
})