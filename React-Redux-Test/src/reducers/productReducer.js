import { ITEM } from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case ITEM.GET_ALL_PRODUCTS:
      return { ...state, ...action.payload.data }
    default:
      return state
  }
}
