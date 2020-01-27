import { get } from './call'

const CountriesApiService = {
  list: () =>
    get('countries')
}

export default CountriesApiService