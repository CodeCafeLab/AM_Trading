import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { Wrench, HardHat, ShieldCheck, FileText, Phone } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: 'Diesel Generator Sales',
    description: 'We provide a wide range of high-performance diesel generators from trusted partners like Cooper Corporation.',
  },
  {
    icon: <HardHat className="w-10 h-10 text-primary" />,
    title: 'Installation & Commissioning',
    description: 'Our skilled technicians offer complete, safe, and timely installation services for all generator types.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: 'After-Sales & Maintenance',
    description: 'We provide regular maintenance and on-call support to ensure minimum downtime and maximum performance.',
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: 'Annual Maintenance (AMC)',
    description: 'Enjoy peace of mind with our custom AMC plans, covering scheduled inspections and quick issue resolution.',
  },
  {
    icon: <Phone className="w-10 h-10 text-primary" />,
    title: 'Consultation & Load Assessment',
    description: 'Get free expert consultation to help you choose the most efficient and cost-effective power solution.',
  },
];

export default function ServicesSection({ limit, showButton = false }: { limit?: number; showButton?: boolean }) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Services</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From sales to support, we offer a comprehensive range of services to meet all your power backup needs.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col bg-card border">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="font-headline pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {showButton && (
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="font-bold">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
