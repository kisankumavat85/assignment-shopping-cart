import allProductsReducer from './allProducts'
import cartReducer from './cart'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  allProductsReducer,
  cartReducer
})

export default reducers