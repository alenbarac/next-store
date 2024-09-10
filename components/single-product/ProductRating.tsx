import { fetchProductRating } from '@/utils/actions'
import { FaStar } from 'react-icons/fa'

async function ProductRating({ productId }: { productId: string }) {
  const { rating, count } = await fetchProductRating(productId)
  const classes = `flex gap-1 items-center text-medium mt-1 mb-4`
  const countValue = `(${count}) reviews`

  return (
    <span className={classes}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  )
}
export default ProductRating
