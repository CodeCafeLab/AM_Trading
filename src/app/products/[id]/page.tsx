import { products } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-8">{product.title}</h1>
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg mb-8">
            <Image
              src={product.src}
              data-ai-hint={product.hint}
              fill
              style={{ objectFit: 'cover' }}
              alt={product.alt}
            />
          </div>
          <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed text-center">
            <p className="text-lg mb-6">{product.description}</p>
            <h2 className="text-2xl font-bold font-headline text-primary mt-8 mb-4">Product Details</h2>
            <p>{product.details}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
