import { projects } from '@/data/projects';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-8">{project.title}</h1>
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg mb-8">
            <Image
              src={`https://placehold.co/1200x800.png`}
              data-ai-hint={project.hint}
              fill
              style={{ objectFit: 'cover' }}
              alt={project.alt}
            />
          </div>
          <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
            <p>{project.description}</p>
            <h2 className="text-2xl font-bold font-headline text-primary mt-8 mb-4">Project Details</h2>
            <p>{project.details}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
