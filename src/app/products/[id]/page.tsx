'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useQuoteSheet } from '@/context/quote-sheet-context';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const { setIsOpen } = useQuoteSheet();

  if (!product) {
    notFound();
  }

  // Split details into a list for better presentation
  const detailPoints = product.details
    .split('. ')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline" className="text-sm">
                <Link href="/products">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
                </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Image Column */}
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg sticky top-24">
              <Image
                src={product.src}
                data-ai-hint={product.hint}
                fill
                style={{ objectFit: 'cover' }}
                alt={product.alt}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Details Column */}
            <div className="flex flex-col space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                {product.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <div className="border-t border-border pt-6">
                <h2 className="text-2xl font-bold font-headline text-foreground mb-4">
                  Solution Highlights
                </h2>
                <ul className="space-y-3">
                  {detailPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                      <span className="text-muted-foreground">{point}.</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full md:w-auto font-bold text-lg" onClick={() => setIsOpen(true)}>
                  Request a Quote for a Similar Solution
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
