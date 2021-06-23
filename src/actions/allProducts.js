const allProducts = [
  {
    productName: 'Black T-Shirt',
    productPrice: 200,
    id: "001"
  },
  {
    productName: 'Yellow T-Shirt',
    productPrice: 250,
    id: "002"
  },
  {
    productName: 'Gray T-Shirt',
    productPrice: 400,
    id: "003"
  }
]

export const getAllProducts = () => {
  return {
    type: 'GET_ALL_PRODUCTS',
    payload: allProducts
  }
}