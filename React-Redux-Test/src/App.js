import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import WithErrors from './hocs/WithErrors'

const App = () => (
  <Switch>
    <Route exact path="/" component={ProductsContainer} />
    <Route exact path="/cart" component={CartContainer} />
  </Switch>
)

export default WithErrors(App)
