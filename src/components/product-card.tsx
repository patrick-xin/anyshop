import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full overflow-hidden">
      <CardContent className="p-4">
        <Link href={`/products/${product.id}`}>
          <div className="aspect-square relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-md"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
          </div>
          <div className="mt-4">
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{formatPrice(product.price)}</p>
          </div>
        </Link>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}