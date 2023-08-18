import productsData from '../mocks/products.json'

export const getProducts = () => {
  return new Promise((resolve) => {
    resolve(productsData.products)
  })
}
