import SectionTitle from '@/components/global/SectionTitle'
import ProductsGrid from '@/components/products/ProductsGrid'
import { fetchFavorites } from '@/utils/actions'

export default async function FavoritesPage() {
  const favorites = await fetchFavorites()
  if (favorites.length === 0) return <SectionTitle text="You have no favorites" />

  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  )
}
