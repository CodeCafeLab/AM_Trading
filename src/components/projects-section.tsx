import Image from 'next/image';
import { Card } from '@/components/ui/card';
import a from './../images/1.jpg'
import b from './../images/2.jpg'
import c from './../images/3.jpg'
import d from './../images/4.jpg'
import e from './../images/5.jpg'
import f from './../images/6.jpg'
import g from './../images/7.jpg'
import h from './../images/8.jpg'

const projects = [
  { src: a, alt: 'Industrial Generator Installation', hint: 'industrial generator' },
  { src: b, alt: 'Commercial Power Solution', hint: 'commercial building' },
  { src: c, alt: 'Residential Backup System', hint: 'residential generator' },
  { src: d, alt: 'Large Scale Power Plant', hint: 'power plant' },
  { src: e, alt: 'Generator Maintenance', hint: 'generator maintenance' },
  { src: f, alt: 'Site Assessment', hint: 'construction site' },
  { src: g, alt: 'Site Assessment', hint: 'construction site' },
  { src: h, alt: 'Site Assessment', hint: 'construction site' },
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
            <Card key={index} className="group relative h-64 overflow-hidden rounded-lg shadow-md">
              <Image
                src={project.src}
                fill
                style={{ objectFit: 'cover' }}
                alt={project.alt}
                className="transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <p className="text-white text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.alt}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
