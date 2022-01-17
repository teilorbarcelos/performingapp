import dynamic from 'next/dynamic'
import { memo, useState } from 'react'
import { AddProductToWishlistProps } from '../AddProductToWishlist'
// import { AddProductToWishlist } from '../AddProductToWishlist'

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(async () => {
  return import('../AddProductToWishlist').then(mod => mod.AddProductToWishlist)
}, {
  loading: () => <span>Carregando...</span>
})

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
  const [isAddingToWishlist, setIsAddingToWishlist] = useState<boolean>(false)

  return (
    <div>
      {product.title} - <strong>{product.formattedPrice}</strong>

      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar à lista de desejos</button>

      {
        isAddingToWishlist &&
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      }
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})