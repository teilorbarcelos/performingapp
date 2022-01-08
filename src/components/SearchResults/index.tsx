import { useMemo } from "react"
import { ProductItem } from "../ProductItem"

interface SearchResultsProps {
  results: {
    id: number
    price: number
    title: string
  }[]
  onAddToWishlist: (id: number) => Promise<void>
}

export default function SearchResults({ results, onAddToWishlist }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price
    }, 0)
  }, [results])

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