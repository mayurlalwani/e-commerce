import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addNewProduct = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        loading: false,
        ...state,
        products: [...state.products, action.payload],
      };
    case ADD_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteProduct = (state = { products: [] }, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        loading: false,
        ...state,
        products: state.products.map(
          (product) => product.id !== action.payload
        ),
      };
    case DELETE_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
