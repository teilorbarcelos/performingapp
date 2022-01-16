import { useMemo } from "react"
import { ProductItem } from "../ProductItem"

interface SearchResultsProps {
  totalPrice: number
  results: {
    id: number
    price: number
    formattedPrice: string
    title: string
  }[]
  onAddToWishlist: (id: number) => Promise<void>
}

export default function SearchResults({ totalPrice, results, onAddToWishlist }: SearchResultsProps) {

  return (
    <div>
      <h2>{totalPrice}</h2>

      {
        results.map(product => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              onAddToWishlist={onAddToWishlist}
            />
          )
        })
      }
    </div>
  )
}