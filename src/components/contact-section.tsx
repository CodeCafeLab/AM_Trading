'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const { toast } = useToast()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log('Form submitted');
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    })
    const form = event.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-26 md:py-24">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Contact Us</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Have a question or need a quote? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>
        <div className="mt-16 max-w-xl mx-auto">
          <Card className="shadow-lg border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input name="name" placeholder="Your Name" required />
                <Input name="email" type="email" placeholder="Your Email" required />
                <Textarea name="message" placeholder="Your Message" rows={5} required />
                <Button type="submit" className="w-full font-bold text-lg py-6">
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
