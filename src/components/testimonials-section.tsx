'use client';
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { testimonials } from "@/data/testimonials"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our commitment to quality and service speaks for itself through our clients' experiences.
          </p>
        </div>
        <Carousel 
          opts={{ align: "start", loop: true }} 
          className="w-full max-w-6xl mx-auto mt-12"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="flex flex-col items-center text-center p-8 space-y-4 flex-grow">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                      </div>
                      <p className="text-muted-foreground italic text-base flex-grow">"{testimonial.quote}"</p>
                      <div>
                        <div className="font-bold font-headline text-lg">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}
