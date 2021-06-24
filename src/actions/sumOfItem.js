export const addSumOfItem = (price) => {
  return {
    type: 'ADD_TO_SUM',
    payload: price
  }
}
export const subSumOfItem = (price, count) => {
  return {
    type: 'SUB_FROM_SUM',
    payload: { price: price, count: count }
  }
}