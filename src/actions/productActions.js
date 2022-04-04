import axios from 'axios';
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('https://fakestoreapi.com/products');
    console.log({ data });

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addNewProduct = (productDetails) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PRODUCT_REQUEST });
    const { data } = await axios.post(
      'https://fakestoreapi.com/products',
      productDetails
    );

    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
