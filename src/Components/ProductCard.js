import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './ProductCard.css'
import { addToCart } from '../actions/cart'

const ProductCard = ({ product }) => {

  const products = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault()
    let isAvaliable = false
    console.log("clicked", product.id);
    products.forEach(element => element.id === product.id ? isAvaliable = true : 0)
    if (isAvaliable) {
      window.confirm("Already Added item...")
    } else {
      dispatch(addToCart(product))
    }
  }

  return (
    <div className='product-card'>
      <h3 className="product-name">{product.productName}</h3>
      <div className='price-cart'>
        <span className="add-to-cart">{product.productPrice}</span>
        <button onClick={handleClick} className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
