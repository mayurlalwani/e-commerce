import {
  CART_ADD_ITEM,
  CART_CLEAR_ITEMS,
  CART_REMOVE_ITEM,
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
