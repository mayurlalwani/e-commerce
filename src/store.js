import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { addNewProduct, productListReducer } from './reducers/productReducers';

const reducer = combineReducers({
  productList: productListReducer,
  addNewProduct: addNewProduct,
  cart: cartReducer,
});

const initialState = {
  cart: {
    cartItems: [],
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
