import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HardHat, Wrench, ShieldCheck, FileText, ClipboardList } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Diesel Generator Sales',
    description: 'We provide a wide range of high-performance diesel generators from our trusted partner Cooper Corporation, suitable for any application.',
  },
  {
    icon: HardHat,
    title: 'Installation & Commissioning',
    description: 'From site inspection to final setup, we offer complete installation services with full adherence to technical and safety standards.',
  },
  {
    icon: ShieldCheck,
    title: 'After-Sales Service & Maintenance',
    description: 'We provide regular maintenance and on-call support to keep your generator running smoothly, ensuring minimum downtime.',
  },
  {
    icon: FileText,
    title: 'AMC (Annual Maintenance Contracts)',
    description: 'With our custom AMC plans, clients enjoy peace of mind as we take full responsibility for your generator\'s upkeep.',
  },
  {
    icon: ClipboardList,
    title: 'Consultation & Load Assessment',
    description: 'We provide free consultation and load analysis to help you choose the most efficient and cost-effective power solution.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a comprehensive range of services to meet all your power backup needs, ensuring reliability and efficiency.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
