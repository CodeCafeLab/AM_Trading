import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { products as allProducts } from '@/data/products';

type ProductsSectionProps = {
  limit?: number;
  showButton?: boolean;
};

export default function ProductsSection({ limit, showButton = false }: ProductsSectionProps) {
  const products = limit ? allProducts.slice(0, limit) : allProducts;

  return (
    <section id="products" className="py-8 md:py-12 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our successfully delivered products, demonstrating our commitment to quality and excellence.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="block">
              <Card className="group relative h-64 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={product.src}
                  fill
                  style={{ objectFit: 'cover' }}
                  alt={product.alt}
                  className="transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={product.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-white text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 mb-5">
                    {product.title}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {showButton && (
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="font-bold">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
