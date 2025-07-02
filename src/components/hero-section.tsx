'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useQuoteSheet } from '@/context/quote-sheet-context';

export default function HeroSection() {
  const { setIsOpen } = useQuoteSheet();

  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="https://placehold.co/1920x1080.png"
        data-ai-hint="diesel generator"
        fill
        style={{ objectFit: 'cover' }}
        alt="Hero background with a large diesel generator"
        priority
      />
      <div className="container relative z-20 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight [text-shadow:0_4px_8px_rgba(0,0,0,0.4)]">
          Reliable Power Solutions
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          Your trusted partner for diesel generator sales, installation, and support for over 10 years.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg" className="font-bold text-lg">
            <Link href="/services">Our Services</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="font-bold border-white text-white text-lg hover:bg-white hover:text-primary"
            onClick={() => setIsOpen(true)}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
