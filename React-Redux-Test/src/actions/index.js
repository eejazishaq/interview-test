import axios from 'axios'
import { ITEM } from './types'


export const ProductDispatch = (request) => {
  return {
    type: ITEM.GET_ALL_PRODUCTS,
    payload: request,
  }
}

export const addItemToCart = item => ({
  type: ITEM.GET_ADD_ITEM_TO_CART,
  payload: item
});
