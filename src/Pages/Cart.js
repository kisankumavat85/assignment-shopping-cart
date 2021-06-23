import React from 'react'
import { useSelector } from 'react-redux'

import Card from '../Components/Card'

const Cart = () => {

  const products = useSelector(state => state.cartReducer)
  // console.log(products);

  return (
    <div className='products-div'>
      {
        products.map(product => <Card key={product.id} product={product} />)
      }
    </div>
  )
}

export default Cart
