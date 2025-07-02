import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import a from './../images/1.jpg';
import b from './../images/2.jpg';
import c from './../images/3.jpg';
import d from './../images/4.jpg';
import e from './../images/5.jpg';
import f from './../images/6.jpg';
import g from './../images/7.jpg';
import h from './../images/8.jpg';
import i from './../images/9.jpg';
import j from './../images/10.jpg';
import k from './../images/11.jpg';
import l from './../images/12.jpg';
import m from './../images/13.jpg';
import n from './../images/14.jpg';

const allProjects = [
  { src: a, alt: 'Industrial Generator Installation', hint: 'industrial generator' },
  { src: b, alt: 'Commercial Power Solution', hint: 'commercial building' },
  { src: c, alt: 'Residential Backup System', hint: 'residential generator' },
  { src: d, alt: 'Large Scale Power Plant', hint: 'power plant' },
  { src: e, alt: 'Generator Maintenance', hint: 'generator maintenance' },
  { src: f, alt: 'Site Assessment', hint: 'construction site' },
  { src: g, alt: 'Mobile Generator Van', hint: 'mobile generator' },
  { src: h, alt: 'Emergency Power Setup', hint: 'emergency power' },
  { src: i, alt: 'Emergency Power Setup', hint: 'emergency power' },
  { src: j, alt: 'Emergency Power Setup', hint: 'emergency power' },
  { src: k, alt: 'Emergency Power Setup', hint: 'emergency power' },
  { src: l, alt: 'Emergency Power Setup', hint: 'emergency power' },
  { src: m, alt: 'Emergency Power Setup', hint: 'emergency power' },
  { src: n, alt: 'Emergency Power Setup', hint: 'emergency power' },
];

export default function ProjectsSection({ limit, showButton = false }: { limit?: number; showButton?: boolean }) {
  const projects = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our successfully completed projects, demonstrating our commitment to quality and excellence.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                <p className="text-white text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.alt}
                </p>
              </div>
            </Card>
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
