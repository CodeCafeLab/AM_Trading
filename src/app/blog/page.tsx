import { blogPosts } from '@/data/blog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import type { StaticImageData } from 'next/image';

export default function BlogPage() {
  return (
    <section className="py-8 md:py-12 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">From Our Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay updated with the latest industry news, tips, and insights from our experts.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-56">
                        <Image
                            src={post.image as StaticImageData}
                            fill
                            style={{ objectFit: 'cover' }}
                            alt={post.title}
                            className="transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={post.hint}
                            placeholder='blur'
                        />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                        <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                        <h3 className="text-xl font-bold font-headline mb-4 flex-grow">{post.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-3">{post.description}</p>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
