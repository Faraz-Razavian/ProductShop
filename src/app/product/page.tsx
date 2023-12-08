import { PRODUCT_INFO } from '../../data/productDetailsData';
import ProductCard from '../components/ProductCard';

export default function Product() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {PRODUCT_INFO.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}