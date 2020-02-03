import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import SearchComponent from  '../SearchComponent'

import products from '../../../../reducers/products'

import * as productActions from '../../../../actions/products'

jest.mock('../../../../actions/products.js')

const mockStore = configureStore([])

describe('SearchComponent', () => {
    let store
    let component

    beforeEach(()=> {
      store = mockStore({
        products
      })

      component = renderer.create(
        <Provider store={store}>
          <SearchComponent />
        </Provider>
      )
    })

    it('should render the container correctly', () => {
      expect(component.toJSON()).toMatchSnapshot()
    })
})