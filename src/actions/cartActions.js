import { CART_ADD_ITEM, CART_CLEAR_ITEMS } from '../constants/cartConstants';
export const addToCart = (productDetails) => async (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: productDetails,
  });
};

export const clearCart = () => async (dispatch) => {
  dispatch({
    type: CART_CLEAR_ITEMS,
  });
};
