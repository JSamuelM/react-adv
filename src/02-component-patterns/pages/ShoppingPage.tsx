import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle
} from '../components'
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart'

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange, products } = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            className="text-white bg-dark"
            key={product.id}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' }}
              key={product.id}
            />
            <ProductTitle title={'Cafe'} className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.values(shoppingCart).map((product) => (
          <ProductCard
            product={product}
            className="text-white bg-dark"
            style={{ width: '100px' }}
            key={product.id}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' }}
            />
            <ProductButtons
              className="custom-buttons"
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
