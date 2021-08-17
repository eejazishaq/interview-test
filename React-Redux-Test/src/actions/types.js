import { createActionTypes } from '../utils'

export const ITEM = createActionTypes('ITEM', [
  'GET_ALL_PRODUCTS',
  'GET_ADD_ITEM_TO_CART',
])

export default ITEM
