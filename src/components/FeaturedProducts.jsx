
import {  SectionTitle } from '../components'
import ProductsGrid from './ProductsGrid'
const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text='Featured Products' />
      <ProductsGrid/>

    </div>
  )
}

export default FeaturedProducts