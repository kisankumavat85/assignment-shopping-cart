import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import './Card.css'
import { removeFromCart } from '../actions/cart'
import { addSumOfItem, subSumOfItem } from '../actions/sumOfItem'

const Card = ({ product }) => {

  let [count, setCount] = useState(1)
  const dispatch = useDispatch()

  const handleRemove = (event) => {
    event.preventDefault()
    dispatch(removeFromCart(product.id))
    dispatch(subSumOfItem(product.productPrice, count))
  }

  const handleInc = (event) => {
    event.preventDefault()
    setCount(count += 1)
    dispatch(addSumOfItem(product.productPrice))
  }
  const handleDec = (event) => {
    event.preventDefault()
    if (count !== 1) {
      setCount(count -= 1)
      dispatch(subSumOfItem(product.productPrice, 1))
    } else {
      setCount(count)
    }
  }

  return (
    <div className='product-card'>
      <h3 className="product-name">{product.productName}</h3>
      <div className='price-cart'>
        <span className="add-to-cart">Rs. {product.productPrice}</span>
        <div className='quantity-div'>
          Quantity
          <button onClick={handleInc} className='inc-btn'>+</button>
          <span className='count-span'>{count}</span>
          <button onClick={handleDec} className='dec-btn'>-</button>
        </div>
        <button onClick={handleRemove} className="add-to-cart">Remove Item</button>
      </div>
    </div >
  )
}

export default Card
