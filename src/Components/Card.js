import React from 'react'
import { useDispatch } from 'react-redux'

import { removeFromCart } from '../actions/cart'

const Card = ({ product }) => {

  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault()

    dispatch(removeFromCart(product.id))
  }

  console.log(product);

  return (
    <div className='product-card'>
      <h3 className="product-name">{product.productName}</h3>
      <div className='price-cart'>
        <span className="add-to-cart">{product.productPrice}</span>
        <button onClick={handleClick} className="add-to-cart">Remove Item</button>
      </div>
    </div>
  )
}

export default Card
