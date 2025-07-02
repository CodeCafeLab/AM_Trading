import HeroSection from '@/components/hero-section';
import WhyChooseUsSection from '@/components/why-choose-us-section';
import ServicesSection from '@/components/services-section';
import ProjectsSection from '@/components/projects-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection limit={3} showButton={true} />
      <ProjectsSection limit={4} showButton={true}/>
      <section className="py-16 md:py-20 text-center bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Ready to Get Started?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Contact us today for a free consultation and let us find the perfect power solution for you.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="font-bold text-lg">
              <a href="tel:+919876543210" className='flex items-center gap-2'>
                <Phone size={20} />
                +91 987 654 3210
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
