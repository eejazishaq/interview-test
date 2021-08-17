import { combineReducers } from 'redux'
import ProductReducer from './productReducer'
import CartReducer from './cartReducer'

const rootReducer = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
})

export default rootReducer
