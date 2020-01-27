import { post, get } from './call'

const ProductsApiService = {
  search: (searchTerm, aggregation) =>
    post('products/search', { text: searchTerm, aggregation: aggregation }),

  list: () =>
    get('products')
}

export default ProductsApiService