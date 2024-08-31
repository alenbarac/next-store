import { fetchFeaturedProducts } from '@/utils/actions'
import EmptyList from '../global/EmptyList'
import SectionTitle from '../global/SectionTitle'
import ProductsGrid from '../products/ProductsGrid'

async function FeaturedProducts() {
  const featProducts = await fetchFeaturedProducts()
  if (featProducts.length === 0) return <EmptyList />

  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={featProducts} />
    </section>
  )
}
export default FeaturedProducts
