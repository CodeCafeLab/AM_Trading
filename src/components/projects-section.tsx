import Image from 'next/image';

const projects = [
  { src: 'https://placehold.co/600x400.png', alt: 'Industrial Generator Installation', hint: 'industrial generator' },
  { src: 'https://placehold.co/600x400.png', alt: 'Commercial Power Solution', hint: 'commercial building' },
  { src: 'https://placehold.co/600x400.png', alt: 'Residential Backup System', hint: 'suburban house' },
  { src: 'https://placehold.co/600x400.png', alt: 'Large Scale Power Plant', hint: 'power plant' },
  { src: 'https://placehold.co/600x400.png', alt: 'Generator Maintenance', hint: 'technician maintenance' },
  { src: 'https://placehold.co/600x400.png', alt: 'Site Assessment', hint: 'construction site' },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our successfully completed projects, demonstrating our commitment to quality and excellence.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden shadow-md">
              <Image 
                src={project.src} 
                width={600} 
                height={400} 
                alt={project.alt} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                data-ai-hint={project.hint} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <p className="text-white text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
