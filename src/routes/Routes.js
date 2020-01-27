import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/presentational/content/Home'
import ProductListComponent from '../components/container/products/ProductListComponent'

export const Routes = props => (
  <Switch>
    <Route path="/search">
      <ProductListComponent action="search" />
    </Route>
    <Route path="/" component={Home} />
  </Switch>
)