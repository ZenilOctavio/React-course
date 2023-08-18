import { useCallback, useContext, useEffect } from 'react'
import { CartContext } from '../contexts/CartContext'

export function useCart () {
  const { cart, setCart } = useContext(CartContext)

  useEffect(() => {
    console.log(cart)
  }, [cart])

  const addToCart = useCallback((product, cart) => {
    // console.log('Added to cart', product)
    const index = cart.findIndex((item) => item.product.id === product.id)

    const newCart = structuredClone(cart)

    if (index >= 0) {
      newCart[index].quantity++
      setCart(newCart)
      return
    }
    newCart.push({ product, quantity: 1 })
    setCart(newCart)
  }
  , [])

  const removeFromCart = useCallback((product, cart) => {
    const index = cart.findIndex((item) => item.product.id === product.id)

    const newCart = structuredClone(cart)

    if (newCart[index].quantity > 1) {
      newCart[index].quantity--
    } else {
      newCart.splice(index, 1)
    }
    setCart(newCart)
  }, [])

  return { cart, setCart, addToCart, removeFromCart }
}
