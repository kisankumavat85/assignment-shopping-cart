import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './Products.css'
import ProductCard from '../Components/ProductCard'
import { getAllProducts } from '../actions/allProducts'

const Products = () => {

  const products = useSelector(state => state.allProductsReducer)
  // console.log(products);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <div className='products-div'>
      {
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
  )
}

export default Products
