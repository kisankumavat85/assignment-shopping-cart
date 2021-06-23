export const addToCart = (post) => {
  return {
    type: 'ADD_TO_CART',
    payload: post
  }
}
export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id
  }
}