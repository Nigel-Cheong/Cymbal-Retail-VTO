import Image from 'next/image';
import { type Product } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  onProductSelect: (product: Product) => void;
  priority?: boolean;
}

export default function ProductCard({ product, onProductSelect, priority = false }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={product.image.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.image.imageHint}
            priority={priority}
          />
        </div>
        <div className="p-4">
          <Badge variant="secondary" className="mb-2">{product.category}</Badge>
          <h3 className="font-semibold text-lg leading-tight truncate">{product.name}</h3>
          <p className="text-muted-foreground mt-1 font-bold text-md">{formatPrice(product.price)}</p>
          <Button
            className="w-full mt-4"
            variant="outline"
            onClick={() => onProductSelect(product)}
          >
            Try On
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
