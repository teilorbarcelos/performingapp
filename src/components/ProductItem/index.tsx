import { memo } from 'react'

interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
    formattedPrice: string
  }
  onAddToWishlist: (id: number) => Promise<void>
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.formattedPrice}</strong>
      <button onClick={() => onAddToWishlist(product.id)} type='button'>Add to Wishlist</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})