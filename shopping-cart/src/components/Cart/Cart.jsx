import { useMemo, useState } from 'react'
import { useCart } from '../../hooks/useCart'
import './Cart.css'
import { CartIcon } from '../Icons'

export function Cart () {
  const [isHidden, setIsHidden] = useState(true)
  const { cart, addToCart, removeFromCart } = useCart()

  const subTotal = useMemo(() => {
    return cart.reduce((prev, curr, index) => {
      console.log(prev, curr, index)
      return prev + (curr.quantity * curr.product.price)
    }, 0)
  }, [cart])

  return (
    <>
      <button className='open-cart' onClick={() => { setIsHidden(false) }} hidden={!isHidden}>
        <CartIcon />
      </button>
      <section className='cart' style={{ display: isHidden ? 'none' : 'flex' }}>
        <button
          className='close-cart' onClick={() => { setIsHidden(true); console.log('hide') }}
        />
        <h3>Cart</h3>
        <ul>
          {cart.map((item) => {
            const handleClickAddButton = () => {
              addToCart(item.product, cart)
            }
            const handleClickRemoveButton = () => {
              removeFromCart(item.product, cart)
            }
            return (
              <li key={item.id}>
                <img src={item.product.thumbnail} alt={`Thumbnail of ${item.product.title}`} />
                <main>
                  <aside>
                    <h5>{item.product.title}</h5>
                    <h4>{item.product.price.toLocaleString('en-us', { style: 'currency', currency: 'USD' })}</h4>
                  </aside>
                  <div>
                    <button onClick={handleClickRemoveButton}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={handleClickAddButton}>+</button>
                  </div>
                </main>
              </li>
            )
          })}
        </ul>
        <section>
          <h4>Subtotal: <strong>{subTotal.toLocaleString('en-us', { style: 'currency', currency: 'USD' })}</strong></h4>
        </section>
      </section>

    </>
  )
}
