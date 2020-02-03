import { post, get } from './call'

const ProductsApiService = {
  search: (searchTerm, aggregation, page) =>
    post('products/search', { text: searchTerm, aggregation: aggregation, page }),

  list: () =>
    get('products')
}

export default ProductsApiService