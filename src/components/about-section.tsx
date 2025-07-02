import Image from 'next/image';
import a from './../images/1.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-26 md:py-24">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">About Us</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AM Trading &amp; Co is a trusted and experienced company, proudly serving in the diesel generator industry for over 10 years. We specialize in sales, installation, and complete technical support of diesel generators, catering to a wide range of clients across Rajasthan and other parts of India.
              </p>
              <p>
                The company is led by two dedicated partners, Mr. Anil Kumar and Ms. Anima Beniwal, whose combined experience and hands-on approach have been the driving force behind our success. Their deep technical knowledge and customer-first attitude have helped AM Trading &amp; Co build a strong reputation for quality and reliability.
              </p>
              <p>
                At AM Trading & Co, we don’t just sell generators — we deliver end-to-end power solutions. From initial consultation and site assessment to installation and post-sale support, we ensure that every project is executed with precision and care.
              </p>
              <p>
                We are proud to be an authorized dealer of Cooper Corporation, a renowned manufacturer of high-performance diesel and gas gensets, engines, and tractors. This partnership allows us to offer our clients advanced, eco-friendly, and reliable power solutions backed by Cooper's century-long legacy of innovation and excellence.
              </p>
               <p>
                Whether it’s for residential, commercial, or industrial use, our mission is to provide dependable power backup systems that our clients can count on. With a commitment to transparency, timeliness, and customer satisfaction, we aim to be your trusted partner in power solutions.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image src={a} data-ai-hint="cooper generator" fill style={{ objectFit: 'contain' }} alt="Cooper Corp 5 kVA diesel generator" />
          </div>
        </div>
      </div>
    </section>
  );
}
