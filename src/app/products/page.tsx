import { ProductCard } from '@/components/product-card'

// This would normally fetch from an API or database
const products = [
  {
    id: '1',
    name: 'Sample Product',
    description: 'This is a sample product',
    price: 99.99,
    image: '/api/placeholder/400/400',
    category: 'general',
    inventory: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Add more sample products...
]

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}