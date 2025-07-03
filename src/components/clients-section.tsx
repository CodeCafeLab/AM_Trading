import { clients } from '@/data/clients';
import Image from 'next/image';

export default function ClientsSection() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-10">Our Valued Clients</h2>
        <div className="relative overflow-hidden w-full bg-card rounded-xl shadow-lg p-8">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-44" title={client.name}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={60}
                  className="object-contain max-h-16 w-auto"
                  data-ai-hint={client.hint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
