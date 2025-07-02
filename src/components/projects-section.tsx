import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { projects as allProjects } from '@/data/projects';

export default function ProjectsSection({ limit, showButton = false }: { limit?: number; showButton?: boolean }) {
  const projects = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <section id="projects" className="py-12 md:py-16 bg-secondary">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our successfully completed projects, demonstrating our commitment to quality and excellence.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="group relative h-64 overflow-hidden rounded-lg shadow-md block">
                <Image
                  src={`https://placehold.co/400x300.png`}
                  fill
                  style={{ objectFit: 'cover' }}
                  alt={project.alt}
                  className="transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-white text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        {showButton && (
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="font-bold">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
