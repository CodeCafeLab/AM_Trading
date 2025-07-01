import Image from 'next/image';
import { Button } from '@/components/ui/button';
import a from './../images/1.jpg'

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src={a}
        data-ai-hint="diesel generator"
        fill
        style={{ objectFit: 'cover' }}
        alt="Hero background with a large diesel generator"


      />
      <div className="container relative z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight">
          Reliable Power Solutions
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
          Your trusted partner for diesel generator sales, installation, and support for over 10 years.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="font-bold">
            <a href="#services">Our Services</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold border-white text-white hover:bg-white hover:text-primary">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
