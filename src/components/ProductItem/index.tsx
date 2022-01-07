interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
  }
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}