import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './src/App'
import { CartContextProvider } from './src/contexts/CartContext'

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
)
