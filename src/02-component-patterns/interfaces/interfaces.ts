import React, { PropsWithChildren } from 'react'

export interface ProductCardProps extends PropsWithChildren {
  product: Product
}

export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps) : React.JSX.Element;
  Title: ({ title }: { title?: string }) => React.JSX.Element;
  Image: ({ img }: { img?: string }) => React.JSX.Element;
  Buttons: () => React.JSX.Element;
}
