import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Award, Shield } from 'lucide-react';

const features = [
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: '10+ Years of Experience',
    description: 'With over a decade in the industry, we bring unmatched expertise and a proven track record.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Customer-Centric',
    description: 'We prioritize your needs, offering personalized solutions and dedicated support from start to finish.',
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Authorized Cooper Dealer',
    description: 'As an authorized dealer for Cooper Corp, we provide genuine, high-quality products you can trust.',
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Reliable After-Sales',
    description: 'Our commitment includes robust maintenance and support to ensure lasting performance.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-12 md:py-16 bg-secondary">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We are committed to delivering excellence and building lasting relationships with our clients through reliable power solutions and exceptional service.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col bg-card border">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline pt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
