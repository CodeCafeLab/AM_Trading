'use client';

import { blogPosts } from '@/data/blog';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-8 md:py-12 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline" className="text-sm">
                <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
            </Button>
          </div>
          
          <main>
            <h1 className="text-3xl md:text-5xl font-bold font-headline text-primary mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By {post.author}</span>
              </div>
            </div>

            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src={post.image}
                data-ai-hint={post.hint}
                fill
                style={{ objectFit: 'cover' }}
                alt={post.title}
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none text-foreground prose-headings:text-primary prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
                <p className='lead text-xl text-muted-foreground'>{post.description}</p>
                {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
          </main>
        </div>
      </div>
    </article>
  );
}
