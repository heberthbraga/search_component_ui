import { get, post } from '../call'
import ProductsApiService from '../products'

import productsJSON from '../../fixtures/jsons/products.json'

jest.mock('../call.js')

describe('ProductsApiService', () => {
    it('list', async () => {
      get.mockImplementationOnce(() => Promise.resolve(productsJSON))

      const existingProducts = await ProductsApiService.list()
      expect(existingProducts.length).toEqual(productsJSON.length)
    })

    it('search', async () => {
      post.mockImplementationOnce(() => Promise.resolve(productsJSON))

      const existingProducts = await ProductsApiService.search('word')
      expect(existingProducts.length).toEqual(productsJSON.length)
    })
})
