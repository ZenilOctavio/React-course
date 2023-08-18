import './App.css'
import { useEffect, useState } from 'react'
import { getProducts } from './services/getProducts'
import { Products } from './components/Products/Products'
import { Cart } from './components/Cart/Cart'

function App () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(newProducts => setProducts(newProducts))
  }, [])

  return (
    <>
      <h1>Shopping cart</h1>
      <Products products={products} />
      <Cart />
    </>
  )
}

export default App
