const sumOfItemReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_SUM':
      return state + action.payload
    case 'SUB_FROM_SUM':
      return state - action.payload.price * action.payload.count
    default:
      return state
  }
}

export default sumOfItemReducer