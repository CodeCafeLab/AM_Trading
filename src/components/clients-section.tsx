import { clients } from '@/data/clients';
import Image from 'next/image';

export default function ClientsSection() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-10">Our Valued Clients</h2>
        <div className="relative overflow-hidden group w-full">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-40" title={client.name}>
                <Image 
                  src={client.logo} 
                  alt={client.name} 
                  width={140} 
                  height={50} 
                  className="object-contain max-h-12 w-auto grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100" 
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
