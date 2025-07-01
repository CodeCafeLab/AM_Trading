import Image from 'next/image';
import a from './../images/2.jpg'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">About AM Trading &amp; Co</h2>
            <p className="mt-4 text-muted-foreground">
              AM Trading &amp; Co is a trusted and experienced company, proudly serving in the diesel generator industry for over 10 years. We specialize in sales, installation, and complete technical support of diesel generators, catering to a wide range of clients across Rajasthan and other parts of India.
            </p>
            <p className="mt-4 text-muted-foreground">
              The company is led by two dedicated partners, Mr. Anil Kumar and Ms. Anima Beniwal, whose combined experience and hands-on approach have been the driving force behind our success. Their deep technical knowledge and customer-first attitude have helped AM Trading &amp; Co build a strong reputation for quality and reliability.
            </p>
            <p className="mt-4 text-muted-foreground">
              We are proud to be an authorized dealer of Cooper Corporation, a renowned manufacturer of high-performance diesel and gas gensets. This partnership allows us to offer our clients advanced, eco-friendly, and reliable power solutions.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <Image src={a} data-ai-hint="cooper generator" fill style={{ objectFit: 'contain' }} alt="Cooper Corp 5 kVA diesel generator" />
          </div>
        </div>
      </div>
    </section>
  );
}
