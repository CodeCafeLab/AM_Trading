'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // This form is for display purposes. The quote request logic is in the slide-out sheet.
    console.log('Form submitted');
    const form = event.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Contact Us</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Have a question or need a quote? Reach out to us through the form below or contact us directly.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                  <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Our Address</h3>
                <p className="text-muted-foreground">123 Power Lane, Jaipur, Rajasthan, 302001, India</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                  <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <a href="mailto:contact@amtrading.com" className="text-muted-foreground hover:text-primary">contact@amtrading.com</a>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                  <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary">+91 987 654 3210</a>
              </div>
            </div>
          </div>
          <Card className="shadow-lg border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input name="name" placeholder="Your Name" required />
                <Input name="email" type="email" placeholder="Your Email" required />
                <Textarea name="message" placeholder="Your Message" rows={5} required />
                <Button type="submit" className="w-full font-bold text-lg py-6">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
