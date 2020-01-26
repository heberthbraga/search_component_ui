import { post, get } from './call'

const ProductsApiService = {
  search: (searchTerm) =>
    post('products/search', { text: searchTerm }),

  list: () =>
    get('products')
}

export default ProductsApiService