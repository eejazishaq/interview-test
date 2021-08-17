import { ITEM } from '../actions/types'
import { addItemToCart, removeItemFromCart } from '../utils/cartUtils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ITEM.GET_ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state
  }
}
