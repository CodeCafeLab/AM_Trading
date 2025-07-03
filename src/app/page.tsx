import HeroSection from '@/components/hero-section';
import WhyChooseUsSection from '@/components/why-choose-us-section';
import ServicesSection from '@/components/services-section';
import ProductsSection from '@/components/products-section';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import ClientsSection from '@/components/clients-section';
import TestimonialsSection from '@/components/testimonials-section';
import BlogPreviewSection from '@/components/blog-preview-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection limit={3} showButton={true} />
      <ProductsSection limit={4} showButton={true}/>
      <ClientsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <section className="py-12 md:py-16 text-center bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Ready to Get Started?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Contact us today for a free consultation and let us find the perfect power solution for you.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="font-bold text-lg">
              <a href="tel:+918841098469" className='flex items-center gap-2'>
                <Phone size={20} />
                +91 8841098469
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
