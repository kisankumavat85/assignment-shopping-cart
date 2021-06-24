import allProductsReducer from './allProducts'
import cartReducer from './cart'
import sumOfItemReducer from './sumOfItem'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  allProductsReducer,
  cartReducer,
  sumOfItemReducer
})

export default reducers