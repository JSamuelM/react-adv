import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import NoImage from '../assets/no-image.jpg'

import styles from '../styles/styles.module.css'

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext)

  return (
    <img
      className={styles.productImg}
      src={img || product.img || NoImage}
      alt="Product Image"
    />
  )
}
