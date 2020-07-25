import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './Reducers/productReducers';
import {cartReducer} from './Reducers/cartReducers'
const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails : productDetailsReducer,
    cart: cartReducer
})

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnchancer (applyMiddleware(thunk)));

export default store