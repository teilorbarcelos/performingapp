import ProductItem from "../ProductItem"

interface SearchResultsProps {
  results: {
    id: number
    price: number
    title: string
  }[]
}

export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {
        results.map(product => {
          return (
            <ProductItem
              key={product.id}
              product={product}
            />
          )
        })
      }
    </div>
  )
}