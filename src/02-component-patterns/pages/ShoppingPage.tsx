import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle
} from '../components'
import { products } from '../data/products'
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard
          product={product}
          className="text-white bg-dark"
          key={product.id}
          initialValues={{
            count: 4,
            maxCount: 8
          }}
        >
          {({ count, reset, maxCount, isMaxCountReached, increaseBy }) => (
            <>
              <ProductImage
                className="custom-image"
                style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' }}
                key={product.id}
              />
              <ProductTitle title={'Cafe'} className="text-bold" />
              <ProductButtons className="custom-buttons" />

              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {/* isMacCount */}
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
              <span>
                {count} - {maxCount}
              </span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  )
}
