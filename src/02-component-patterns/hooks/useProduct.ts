import { useEffect, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
}

export const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {

  const [counter, setCounter] = useState(value)

  const increaseBy = (value: number) => {

    const newValue = Math.max(counter + value, 0)
    setCounter((prev) => Math.max(prev + value, 0))
    if (onChange) {
      onChange({ count: newValue, product })
    }
  }

  useEffect(() => {
    setCounter(value)
  }, [value])


  return {
    counter,
    // methods
    increaseBy
  }
}