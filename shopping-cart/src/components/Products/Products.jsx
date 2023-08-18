import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons'
import { useCart } from '../../hooks/useCart'

export function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  return (
    <ul className='products'>
      {products.map((product) => {
        const isProductInCart = (cart.findIndex((item) => item.product.id === product.id) !== -1)
        return (
          <li className='product' key={product.id}>
            <a>
              <img src={product.thumbnail} alt={`Thumbnail of ${product.title}`} />
              <button onClick={(event) => {
                event.preventDefault()
                isProductInCart ? removeFromCart(product, cart) : addToCart(product, cart)
              }}
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>

              <main>
                <h4>{product.title}</h4>
                <section>
                  <aside>
                    <p>{product.brand}</p>
                    <p>{product.category}</p>
                  </aside>
                  <div>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                </section>
              </main>
            </a>

          </li>
        )
      }
      )}
    </ul>
  )
}
