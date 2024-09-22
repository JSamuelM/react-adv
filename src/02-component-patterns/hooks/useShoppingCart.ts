import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces'
import { products } from '../data/products'

type Cart = { [key: string]: ProductInCart }

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<Cart>({})

  const onProductCountChange = ({
    count,
    product
  }: {
    count: number
    product: Product
  }) => {
    setShoppingCart((oldShoppingCart) => {
      console.log({count})      

      if (count === 0) {
        delete oldShoppingCart[product.id]
        return { ...oldShoppingCart }
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count }
      }
    })
  }

  return {
    products,
    shoppingCart,

    setShoppingCart,
    onProductCountChange
  }
}